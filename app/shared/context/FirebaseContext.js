// import "firebaseui/dist/firebaseui.css";
import React, {createContext} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

export const FirebaseContext = createContext();

const FirebaseProvider = ({children}) => {
  const payload = {database, auth, storage};
  return (
    <FirebaseContext.Provider value={payload}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
