import { Box, Flex, Text, useToken } from '@chakra-ui/react';
import { useSize } from "@chakra-ui/react-use-size";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import background from '../../public/assets/svgs/background.svg';
import { AppLogo } from '../components/AppLogo';
import { Header } from '../components/Header';
import Lordicon from '../components/ReactLordicon';
import Logo from '../../public/assets/imgs/logo.png';

const Home: NextPage = () => {
  const [pink800, white] = useToken(
    'colors',
    ["pink.800", "white"]
  )
  const ref = useRef<HTMLDivElement>(null)
  const size = useSize(ref)

  const height = (size?.width || 0) * 0.42
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={Logo.src} />
        <title>Kaguya - Home</title>
      </Head>
      <Header
        headerType={'has-sign-log-buttons'}
      />
      <Box
        maxWidth={1480}
        m="0 auto"
        mt={["4", "8", "12"]}
        px={["4",
            "6",
            "8"]}
      >
        <Box
          position="relative"
          ref={ref}
          mt={["16", "8", "0"]}
          w="100%"
          _before={{
            content: '""',
            position: 'absolute',
            opacity: 0.6,
            width: '100%',
            height: '100%',
            backgroundSize: ['cover', "cover", 'contain'],
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("${background.src}")`
          }}
          minH={height}
        >
          <Box
            position="relative"
            zIndex={2}   
            >
              <AppLogo lordiconSize={["8", "100px"]} fontSize={["md", '4xl']} />
              <Text
                mt={["4", "6", "12"]}
                as="h1"
                fontSize={["md", "3xl" ,"5xl"]}
                maxWidth={'2xl'}
                fontWeight="bold">O melhor site educacional gratuito</Text>
          </Box>
        
        </Box>
        <Flex mt="8" py="12" alignItems="center" textAlign={["center", "unset", "unset"]} justifyContent={["center", "center", "unset"]} borderRadius="lg" flexWrap={["wrap", "unset", "unset"]}>
          <Box w="16" mr="4">
            <Lordicon
              icon="book"
              size={'100%'}
              colors={{
                primary:
                pink800,
                secondary:
                white
              }} />
          </Box>
          <Box mt="8">
            <Text
              as="h2"
              fontWeight="bold"
              fontSize={["md", "3xl"]}>O que é a
            <Text
              as="span"
              color="pink.800"
              fontSize={["md", "4xl"]}> Kaguya</Text>?</Text>
            <Text
              fontSize="md"
              mt="8"
              maxW="2xl"
              color="gray.300"
            >
              <Text
                color="white"
                as="strong"
              >Kaguya </Text> é um site educacional, entruturando conteúdos de forma legal, adicionando comunidades, artigos, blogs, redes sociais daquele seu professor favorito, com isso nós acreditamos que você possa criar seu

              <Text
                as="strong"
                color="white"
              > Networking </Text> rapidamente e no processo disso aprender. Tudo totalmente gratuito e intuitivo de se
              utilizar.</Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Home
