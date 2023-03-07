import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { parseCookies } from 'nookies';

export const tokenCookieKey = 'kaguyaApp.token';

export function setupAPIClient(ctx: GetServerSidePropsContext | undefined = undefined) {
  let cookies = parseCookies(ctx);
  
  const baseURL = process.env.NODE_ENV === 'production' ? 'https://platform-backend-production.up.railway.app' : 'http://localhost:3333';
  
  const kaguyaApi = axios.create({
    baseURL: 'https://platform-backend-production.up.railway.app',
  });
  
  kaguyaApi.defaults.headers.common.Authorization = `Bearer ${cookies[tokenCookieKey]}`;

  return kaguyaApi;
}