import { 
  Box, 
  Flex, 
  VStack, 
  Link as ChakraLink,
  Heading,
  Text,
  ScaleFade,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';

import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { DividerLine } from '../../components/DividerLine';
import { RegisterChangePageHeader } from './ChangePageHeader';
import { FormContainer } from './FormContainer';

export default function RegisterUser() {
  return (
    <>
      <Head>
        <title>Kaguya | Registrar-se na plataforma</title>
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        flexDirection="column"
      >
        <Header />

        <Flex
          w="100vw"
          h="100vh"
          px="4"
        >
          <ScaleFade 
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '100%'
            }}
            initialScale={0.9} 
            in
          >
            <VStack
              bg="blackAlpha.700"
              maxW={460}
              w="100%"
              borderRadius="md"
            >
              <RegisterChangePageHeader />

              <FormContainer />
            </VStack>
          </ScaleFade>
        </Flex>
      </Flex>
    </>
  );
}