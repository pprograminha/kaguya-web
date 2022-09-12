import { Box, Flex, Text, useToken, VStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { SignInWithGithubButton } from '../SignInButtons/SignInWithGithubButton';
import { SignInWithGoogleButton } from '../SignInButtons/SignInWithGoogleButton';
import { ForgotPasswordLink } from './ForgotPasswordLink';
import { FormHeader } from './FormHeader';

import { Button } from '@/components/Button';
import { DividerLine } from '@/components/DividerLine';
import { Input } from '@/components/Form/Input';
import { InputPassword } from '@/components/Form/InputPassword';

import { User } from 'services/kaguya/types';
import { useAuth } from 'hooks/useAuth';

export type LoginResponse = {
  user: User;
  token: string;
}

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string()
    .required('E-mail obrigatório')
    .email('E-mail inválido'),
  password: yup.string()
    .required('Senha obrigatória'),
});

export function FormContainer() {
  const [gray300]= useToken("colors", [
    'gray.300', 
  ]);

  const { signIn } = useAuth();

  const { formState, handleSubmit, register } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const signInErrors = formState.errors;
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await signIn(data);
  }

  return (
    <>
      <Box
        px={["4", "8"]}
        w="100%"
        pb="12"
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
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
            error={signInErrors.email}
            {...register('email')}
          />
          <InputPassword
            placeholder="Senha"
            icon={<FaLock color={`${gray300}`} />}
            error={signInErrors.password}
            {...register('password')}
          />
        </VStack>
        <ForgotPasswordLink />
        
        <Button
          mt="2"
          w="100%"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Entrar
        </Button>
      </Box>
    </>
  )
}