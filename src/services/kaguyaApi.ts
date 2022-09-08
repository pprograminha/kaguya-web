import axios from 'axios';

export const kaguyaApi = axios.create({
  baseURL: 'https://kaguya-it.herokuapp.com',
});