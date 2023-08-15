import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ROOT_URL} from '@env'
const api = axios.create({
  baseURL: ROOT_URL,
});

// Interceptor to add Authorization header to requests
api.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;