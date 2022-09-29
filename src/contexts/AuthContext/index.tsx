import { setCookie, destroyCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { kaguyaApi } from 'services/kaguya/apiClient';

import { 
  SignInCredentials, 
  User, 
  SignInResponse, 
  RegisterUserCredentials,
  RegisterUserResponse
} from './types';
import { useToast } from '@chakra-ui/react';
import { apiError } from 'utils/apiFormatError';
import { tokenCookieKey } from '@/services/kaguya/api';

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(data: RegisterUserCredentials): Promise<void>;
  setUser(fn: User | null | ((user: User | null) => User | null)): void;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, tokenCookieKey);

  Router.push('/login');
}

export function AuthProvider({
  children
}: AuthProviderProps) {
  const toast = useToast();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function getUser() {
    try {
      const response = await kaguyaApi.get<User>('/profile');
      setUser(response.data);
    } catch (error) {
      signOut();
    }
  }

  useEffect(() => {
    const cookies = parseCookies();
    
    const token = cookies[tokenCookieKey];
    
    if(token) {
      getUser();
    }
  }, []);

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

  async function signUp({ email, password, username }: RegisterUserCredentials) {
    try {
      const response = await kaguyaApi.post<RegisterUserResponse>('/users', {
        email,
        password,
        username
      });
  
      const { token, user } = response.data;

      setCookie(undefined, tokenCookieKey, token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setUser(user);

      kaguyaApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      toast({
        title: 'Registro feito com sucesso',
        description: "Bem vindo a kaguya. Esperamos que seu ensino aqui seja excelente.",
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
          title: 'Erro na criação de conta',
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
          signUp,

          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}