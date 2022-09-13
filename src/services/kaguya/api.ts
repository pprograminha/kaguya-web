import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export const tokenCookieKey = 'kaguyaApp.token';

export function setupAPIClient(ctx: GetServerSidePropsContext | undefined = undefined) {
  let cookies = parseCookies(ctx);
  
  const kaguyaApi = axios.create({
    baseURL: 'https://kaguya-it.herokuapp.com',
  });
  
  kaguyaApi.defaults.headers.common.Authorization = `Bearer ${cookies[tokenCookieKey]}`;

  return kaguyaApi;
}