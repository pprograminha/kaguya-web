import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../../components/Header';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Kaguya | Dashboard</title>
      </Head>

      <Flex>
        <Header
          headerType={{
            hasUserProfile: true
          }}
        />
      </Flex>
    </>
  )
}