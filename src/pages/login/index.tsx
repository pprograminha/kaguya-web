import { 
  Flex, ScaleFade, VStack, 
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { withSSRGuest } from 'utils/withSSRGuest';

import { Header } from '../../components/Header';
import { LoginChangePageHeader } from './_components/ChangePageHeader';
import { FormContainer } from './_components/FormContainer';

export default function UserLogin() {
  return (
    <>
      <Head>
        <title>Kaguya | Logar na plataforma</title>
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
              <LoginChangePageHeader />
              <FormContainer />
            </VStack>
          </ScaleFade>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {
    }
  }
})