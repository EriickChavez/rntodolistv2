import { Storage } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reduxStorageAsyncStorage: Storage = {
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, value);
    return Promise.resolve(true);
  },
  getItem: async key => {
    const value = await AsyncStorage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
    return Promise.resolve();
  },
};
