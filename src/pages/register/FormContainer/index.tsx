import { Box, Flex, Text, useToken, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaUser } from 'react-icons/fa';

import { SignInWithGithubButton } from '../SignInButtons/SignInWithGithubButton';
import { SignInWithGoogleButton } from '../SignInButtons/SignInWithGoogleButton';
import { FormHeader } from './FormHeader';

import { Button } from '@/components/Button';
import { DividerLine } from '@/components/DividerLine';
import { Input } from '@/components/Form/Input';
import { InputPassword } from '@/components/Form/InputPassword';

import { useAuth } from '@/hooks/useAuth';
import { User } from '@/services/kaguya/types';

export type RegisterUserResponse = {
  user: User;
  token: string;
}

type RegisterUserFormData = {
  email: string;
  password: string;
  username: string;
}

const registerUserFormSchema = yup.object().shape({
  email: yup.string()
    .required('E-mail obrigatório')
    .email('Formato de e-mail inválido'),
  username: yup.string()
    .required('Username obrigatório')
    .min(2, 'Mínimo de 2 caracteres no username')
    .max(100, 'Máximo de 100 caracteres no username'),
  password: yup.string()
    .required('Senha obrigatória')
    .min(8, 'Mínimo de 8 caracteres na senha')
    .max(100, 'Máximo de 100 caracteres na senha'),
});

export function FormContainer() {
  const [gray300]= useToken("colors", [
    'gray.300', 
  ]);

  const { signUp } = useAuth();

  const { formState, handleSubmit, register } = useForm<RegisterUserFormData>({
    resolver: yupResolver(registerUserFormSchema),
  });

  const registerUserErrors = formState.errors;

  const handleRegisterUser: SubmitHandler<RegisterUserFormData> = async (data) => {
    await signUp(data);
  }

  return (
    <>
      <Box
        px={["4", "8"]}
        w="100%"
        pb="12"
        as="form"
        onSubmit={handleSubmit(handleRegisterUser)}
      >
        <FormHeader />
        <VStack
          spacing="3"
        >
          <SignInWithGoogleButton  />
          <SignInWithGithubButton  />
        </VStack>

        <Flex
          alignItems="center"
          my="4"
        >
          <DividerLine />
          <Text color="gray.300">ou</Text>
          <DividerLine />
        </Flex>
        
        <VStack
          spacing="3"
        >
          <Input
            placeholder="E-mail"
            icon={<MdEmail color={`${gray300}`} />}
            error={registerUserErrors.email}
            {...register('email')}
          />
          <Input
            {...register('username')}
            placeholder="Username"
            icon={<FaUser color={`${gray300}`} />}
            error={registerUserErrors.username}
          />
          <InputPassword
            placeholder="Senha"
            icon={<FaLock color={`${gray300}`} />}
            error={registerUserErrors.password}
            {...register('password')}
          />
        </VStack>
        
        <Button
          mt="6"
          w="100%"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Registrar
        </Button>
      </Box>
    </>
  )
}