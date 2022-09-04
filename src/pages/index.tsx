import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Kaguya - Home</title>
      </Head>
      <Header
        headerType={{
          hasSignInButton: true
        }}
      />
      {/* <Box maxWidth={1480} m="0 auto" px={["4", "6", "8"]} py="8">
      </Box> */}
    </>
  )
}

export default Home
