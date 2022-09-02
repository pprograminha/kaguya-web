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
    </>
  )
}

export default Home
