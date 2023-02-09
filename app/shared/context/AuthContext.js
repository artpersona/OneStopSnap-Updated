import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FirebaseContext} from './FirebaseContext';
import {ConfigContext} from './ConfigContext';
import {Alert} from 'react-native';
import {Storage} from '../../utils';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const {auth, database} = useContext(FirebaseContext);
  const {
    currentLocation,
    setCurrentLocation,
    appLocations,
    setReferenceLocations,
  } = useContext(ConfigContext);

  console.log('currentLocation is: ', currentLocation);

  const [userCategory, setUserCategory] = useState();

  const [userBranch, setUserBranch] = useState();
  const [loggedUser, setLoggedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [token, setToken] = useState('');

  const logout = async callback => {
    auth()
      .signOut()
      .then(() => {
        callback();
      });
  };

  const fetchUserLocation = () => {
    if (loggedUser != null && loggedUser?.location_key) {
      const newArray = appLocations.filter(item => {
        return item.key === loggedUser?.location_key;
      });
      if (newArray.length > 0) {
        setCurrentLocation(newArray[0]);
        updateRefLocation(newArray[0]);
      }
    }
  };

  const updateRefLocation = data => {
    if (data.reference_location) {
      var locationData = Object.values(data.reference_location);
      setReferenceLocations(locationData);
    }
  };

  const customerAuth = credential => {
    return new Promise(async (resolve, reject) => {
      await auth()
        .signInWithCredential(credential)
        .then(async data => {
          console.log('data is: ', data);
          const user = data.user.providerData[0];
          user.uid = data.user.uid;
          const isNewUser = data.additionalUserInfo.isNewUser;
          const isPhone = user.providerId === 'phone';
          // Location fetching for user
          const userLocation = fetchUserLocation(user?.location_key);
          if (userLocation != null && setCurrentLocation == null) {
            setCurrentLocation(userLocation);
          }
          console.log('user is: ', user);
          if (isNewUser) {
            console.log('is a new user! ');
            const newProfile = {
              displayName: isPhone ? user.phoneNumber : user.displayName,
              photoURL: user.photoURL,
              email: user.email,
              uid: user.uid,
              phoneNumber: 0 + user.phoneNumber.slice(3),
              role: 'customer',
              location_key: currentLocation.key,
            };

            console.log('new profile is: ', newProfile);
            await createCustomerProfile(newProfile)
              .then(() => {
                Storage.save('profile', newProfile);
                setLoggedUser(newProfile);
                resolve();
              })
              .catch(error => reject(error));
          }
        })
        .catch(error => {
          Alert.alert('Sorry something went wrong', error.message);
          reject(error);
        });
    });
  };

  const createCustomerProfile = async newProfile => {
    new Promise(async (resolve, reject) => {
      await database()
        .ref(`profiles/${newProfile.uid}`)
        .update(newProfile)
        .then(() => {
          resolve();
        })
        .catch(error => reject(error));
    });
  };

  const editCustomerProfile = data => {
    return new Promise((resolve, reject) => {
      database()
        .ref(`profiles/${loggedUser.uid}`)
        .update(data)
        .then(() => {
          resolve();
        })
        .catch(err => reject(err));
    });
  };

  const verifyPhoneNumber = (field, data) => {
    return new Promise((resolve, reject) => {
      if (field == 'phoneNumber') {
        let numberExists = false;
        database()
          .ref('profiles')
          .orderByChild('phoneNumber')
          .once('value', async snapshot => {
            if (snapshot.val()) {
              const storeObject = await snapshot.val();
              let phoneArray = Object.entries(storeObject).map(item => {
                item[1].key = item[0];
                return item[1];
              });
              phoneArray.map(item => {
                if (item.phoneNumber == data) {
                  numberExists = true;
                  reject('This number is already registered!');
                }
              });
            }
            if (numberExists == false) {
              resolve();
            }
          });
      }
    });
  };

  const saveCustomerOrder = data => {
    database()
      .ref(`profiles/${loggedUser.uid}`)
      .update({orders: data})
      .catch(err => Alert.alert('Sorry something went wrong', err.message));
  };

  const initAuth = async () => {
    const getProfileData = await Storage.get('profile');
    const getToken = await Storage.getToken('token');
    if (getProfileData && getToken) {
      setLoggedUser(getProfileData);
      setToken(getToken);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  useEffect(() => {
    if (loggedUser) fetchUserLocation();
  }, [loggedUser]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        const dbRef = database()
          .ref('profiles')
          .orderByChild('uid')
          .equalTo(user.uid);
        dbRef
          .once('value')
          .then(snapshot => {
            const profile = snapshot.val();
            if (profile) {
              console.log('may profile hehe!: ', profile);
              const isCust = Object.entries(profile)
                .map(key => {
                  if (key[1].role === 'customer') {
                    return key[1];
                  }
                })
                .flat();
              const newCustomer = new Object(isCust.filter(e => e));
              const userLocation = fetchUserLocation(
                newCustomer[0].location_key,
              );
              if (userLocation != null) {
                setCurrentLocation(userLocation);
              }
              console.log('pasok 2');
              Storage.save('profile', newCustomer[0]);
              setLoggedUser(newCustomer[0]);
            } else {
              alert('no profile');
            }
            setInitializing(false);
          })
          .catch(err => {
            alert(err);
          });
      } else {
        setLoggedUser(null);
        setInitializing(false);
      }
    });

    return subscriber;
  }, []);

  const payload = {
    userCategory,
    setUserCategory,

    userBranch,

    auth,

    customerAuth,
    initAuth,
    loggedUser,
    initializing,
    setLoggedUser,
    token,
    setToken,
    editCustomerProfile,
    verifyPhoneNumber,
    saveCustomerOrder,
    logout,
  };

  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
