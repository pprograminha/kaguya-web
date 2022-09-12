import { setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import { createContext, useState } from 'react';

import { kaguyaApi } from 'services/kaguya/api';

import { SignInCredentials, User, SignInResponse } from './types';
import { useToast } from '@chakra-ui/react';
import { apiError } from 'utils/apiFormatError';

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const tokenCookieKey = 'kaguyaApp.token';

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, tokenCookieKey);

  Router.push('/');
} 

export function AuthProvider({
  children
}: AuthProviderProps) {
  const toast = useToast();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const { 'nextAuth.token': token } = parseCookies();

  // }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await kaguyaApi.post<SignInResponse>('/sessions', {
        email,
        password
      });
  
      const { token, user } = response.data;

      setCookie(undefined, tokenCookieKey, token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setUser(user);

      kaguyaApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      toast({
        title: 'Login feito',
        description: "Bem vindo de volta.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      Router.push('/dashboard');
    } catch (error) {
      const errors = apiError(error);

      errors.messages.forEach(messageError => {
        toast({
          title: 'Erro no login',
          description: messageError,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      })
    }
  }
  
  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          isAuthenticated,
          signIn,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}