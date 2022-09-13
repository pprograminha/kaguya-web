import { setupAPIClient, tokenCookieKey } from '@/services/kaguya/api';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies';

export function withSSRGuest<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const kaguyaApi = setupAPIClient(ctx);

    const response = await kaguyaApi.post('/users/tokens/validate-token');

    if(cookies[tokenCookieKey] && response.data.validated) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }

    return await fn(ctx);
  }
}