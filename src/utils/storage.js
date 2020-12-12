import AsyncStorage from '@react-native-community/async-storage';

// Auth Token
export const storeToken = token => AsyncStorage.setItem('@storage_token', token);

export const getToken = () => AsyncStorage.getItem('@storage_token');

export const clearToken = () => AsyncStorage.removeItem('@storage_token');

// Active Theme
export const storeTheme = (theme = {}) => AsyncStorage.setItem('@storage_theme', theme);

export const getTheme = () => AsyncStorage.getItem('@storage_theme');

export const clearTheme = () => AsyncStorage.removeItem('@storage_theme');
