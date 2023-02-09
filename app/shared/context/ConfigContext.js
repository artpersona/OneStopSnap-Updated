import React, {useContext, createContext, useState, useEffect} from 'react';
import {FirebaseContext} from './FirebaseContext';

export const ConfigContext = createContext();

const ConfigProvider = ({children}) => {
  const {database} = useContext(FirebaseContext);

  const [appLocations, setAppLocations] = useState([]);
  const [cityWideCategories, setCityWideCategories] = useState([]);
  const [miniCategories, setMiniCategories] = useState([]);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentCityCategory, setCurrentCityCategory] = useState([]);
  const [currentMiniCategory, setCurrentMiniCategory] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  const [referenceLocations, setReferenceLocations] = useState([]);

  const [initialMapUse, setInitialMapUse] = useState(false);
  const [mapLocation, setMapLocation] = useState('');

  useEffect(() => {
    fetchAppLocations();
    fetchAppCityWideCategories();
    fetchAppMiniCategories();
  }, []);

  const fetchAppLocations = () => {
    database()
      .ref('app_location')
      .on('value', snapshot => {
        const result = snapshot.val();

        let appLocations = Object.entries(result).map(item => {
          item[1].key = item[0];
          return item[1];
        });

        setAppLocations(appLocations);
      });
  };

  const fetchRefLocations = store_id => {
    let tempLocations = [...referenceLocations];
    tempLocations = tempLocations.filter(
      item => String(item.store_key) == String(store_id),
    );
    if (tempLocations.length > 0) {
      return Object.values(tempLocations[0].location);
    }

    return [];
  };

  const fetchAppCityWideCategories = () => {
    const dbRef = database().ref('app_city_tags');
    dbRef.on('value', snapshot => {
      const result = snapshot.val();

      let appCityCategories = Object.entries(result).map(item => {
        item[1].key = item[0];
        return item[1];
      });

      setCityWideCategories(appCityCategories);
    });
  };

  const fetchAppMiniCategories = () => {
    const dbRef = database().ref('app_mini_tags');
    dbRef.on('value', snapshot => {
      const result = snapshot.val();

      let appMiniCategories = Object.entries(result).map(item => {
        item[1].key = item[0];
        return item[1];
      });

      setMiniCategories(appMiniCategories);
    });
  };

  const payload = {
    appLocations,
    cityWideCategories,
    miniCategories,
    currentLocation,
    setCurrentLocation,
    currentCityCategory,
    setCurrentCityCategory,
    currentMiniCategory,
    setCurrentMiniCategory,

    activeCategories,
    setActiveCategories,

    referenceLocations,
    setReferenceLocations,
    fetchRefLocations,

    initialMapUse,
    setInitialMapUse,

    mapLocation,
    setMapLocation,
  };

  return (
    <ConfigContext.Provider value={payload}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;
