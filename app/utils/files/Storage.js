import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistingStorage {
  save = async (key, value) => {
    try {
      if (key && value) {
        let data = value;
        if (typeof data == 'object') {
          data = JSON.stringify(value);
        }
        await AsyncStorage.setItem(key.toString(), data.toString());
      }
    } catch (e) {
      console.warn(e);
    }
  };

  get = async key => {
    try {
      let rawData = await AsyncStorage.getItem(key);
      if (rawData) {
        let parsedData = JSON.parse(rawData);
        if (typeof parsedData === 'object') {
          return parsedData;
        }
        return rawData;
      }
    } catch (e) {
      console.warn(e);
    }
  };

  getProfile = async () => {
    try {
      let data = await AsyncStorage.getItem('profile');
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  getToken = async () => {
    try {
      let data = await AsyncStorage.getItem('token');
      if (data) {
        return data;
      }
    } catch (e) {
      console.warn(e);
    }
  };

  removeItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  removeUserData = async () => {
    try {
      const keys = ['profile', 'token'];
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.warn(e);
    }
  };
}

const Storage = new PersistingStorage();
export default Storage;
