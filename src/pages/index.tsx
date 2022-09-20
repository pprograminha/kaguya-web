import { 
  Box, 
  Flex, 
  Grid, 
  GridItem, 
  Heading, 
  Highlight, 
  Image, 
  Text,
  Link as ChakraLink,
  useToken,
  Divider
} from '@chakra-ui/react';
import { useSize } from "@chakra-ui/react-use-size";
import Head from 'next/head';
import NextLink from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/Button';
import { DividerLine } from '@/components/DividerLine';
import Lordicon from '@/components/ReactLordicon';
import { Header } from '@/components/Header';

import { useAuth } from '@/hooks/useAuth';

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  const [pink800, white] = useToken(
    'colors',
    ["pink.800", "white"]
  );
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);

  const height = (size?.width || 0) * 0.42;
  
  return (
    <>
      <Head>
        <title>Kaguya - Home</title>
      </Head>

      <Header
        headerType={isAuthenticated ? 'has-user-profile' : 'has-sign-log-buttons'}
      />

      <Box as="main">
        <Box
          as="section"

          position="relative"
          ref={ref}
          mt={["4", "8", "32"]}
          w="100%"
          minH={height}
          _before={{
            content: '""',
            position: 'absolute',
            opacity: 0.3,
            width: '100%',
            height: '100%',
            backgroundSize: ['cover', "cover", 'contain'],
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(assets/svgs/background.svg)`,
            backgroundPositionX: "center",
          }}
        >
          <Flex
            position="relative"
            zIndex={2}
            maxWidth={1480}
            mx="auto"
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              alignItems="center"
              flexDirection="column"
            >
              <Heading
                as="h1"
                fontSize={["md", "3xl" ,"5xl"]}
                maxWidth={'2xl'}
                fontWeight="bold"
                textAlign="center"
              >
                A melhor plataforma de ensino gratuito
              </Heading>
              <Text
                color="gray.300"
                as="strong"
                textAlign="center"

                mt="4"
                maxWidth={480}
                mx="auto"
                display="block"
              >
                Entruturada com conteúdos de forma legal e de fácil acesso para otimizar seus estudos na programação.
              </Text>
              <Button
                bg="pink.500"
                color="white"
                mt="4"
                w={240}
                _hover={{
                  bg:"normal",
                  opacity: '0.9'
                }}
              >
                Começar agora
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Box
          as="section"

          mt="8"
          pt="4"
          pb="32"
        >
          <Flex
            maxW={1480}
            mx="auto"
            alignItems="center"
            justifyContent="center"
            gap="32"
          >
            <Box mt="8">
              <Flex
                alignItems="center"
                gap="4"
              >
                <Box w="24">
                  <Lordicon
                    icon="book"
                    size={'100%'}
                    delay={7000}
                    colors={{
                      primary: pink800,
                      secondary: white
                    }}
                  />
                </Box>
                <Heading>
                  O que é a plataforma?
                </Heading>
              </Flex>
              <Text
                maxW={540}
                fontSize="xl"
                color="gray.300"
                mt="4"
              >
                A plataforma organiza os diversos conteúdos espalhados pela internet para que a comunidade da programação tenha uma maior facilidade de começar ou continuar seus estudos podendo evoluir junto e de forma coordenada com outros alunos.
              </Text>
            </Box>
            <Image 
              src="/assets/svgs/online-learning.svg"
              alt="a"

              w={480}
              h={480}
            />
          </Flex>
        </Box>

        <DividerLine />

        <Box
          as="section"

          py="4"
          pb="32"
        >
          <Flex
            maxW={1480}
            mx="auto"
            alignItems="center"
            justifyContent="center"
            gap="32"
          >
            <Image 
              src="/assets/svgs/success-factors.svg"
              alt="a"

              w={480}
              h={480}
            />
            <Box mt="8">
              <Flex
                alignItems="center"
                gap="4"
              >
                <Box w="24">
                  <Lordicon
                    icon="book"
                    size={'100%'}
                    delay={7000}
                    colors={{
                      primary: pink800,
                      secondary: white
                    }}
                  />
                  
                </Box>
                <Heading maxW={540} mx="auto">
                  Como organizamos os conteúdos
                </Heading>
              </Flex>
              <Box>
                <Text
                  maxW={540}
                  fontSize="xl"
                  color="gray.300"
                  mt="4"
                >
                  <Highlight
                    query={["trilha", "simples", "intuitiva"]}
                    styles={{
                      color:"pink.500",
                    }}
                  >
                    A plataforma organiza cada tecnologia em uma trilha para que o usuário consiga de forma simples e intuitiva escolher o que deseja assistir.
                  </Highlight>
                </Text>
                <Text
                  maxW={540}
                  fontSize="xl"
                  color="gray.300"
                  mt="4"
                >
                  <Highlight
                    query={["playlists", "organização mais precisa"]}
                    styles={{
                      color:"pink.500",
                    }}
                  >
                    Dentro da trilha possuí diversas playlists, fazendo com que o conteúdo tenha diversas etapas e uma organização mais precisa.
                  </Highlight>
                </Text>
                <Text
                  maxW={540}
                  fontSize="xl"
                  color="gray.300"
                  mt="4"
                >
                  Ao acessar uma playlist, poderá ver uma lista de blocos que contém as aulas.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box
          as="section"

          py="4"
          pb="32"
          bg="blackAlpha.400"
        >
          <Flex
            maxW={1480}
            mx="auto"
            alignItems="center"
            justifyContent="center"
            gap="32"
          >
            <Box mt="24">
              <Heading
                maxW={540}
                mx="auto"
                fontSize={["5xl"]}
                textAlign="center"
              >
                <Highlight
                  query={["Kaguya"]}
                  styles={{
                    color:"pink.500",
                  }}
                >
                  Por que estudar na Kaguya?
                </Highlight>
              </Heading>

              <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                gap="4"
                mt="16"
              >
                <GridItem
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  pt="0"
                  pb="6"
                  px="6"
                >
                  <Box w="16">
                    <Lordicon
                      icon="book"
                      size={'100%'}
                      delay={7000}
                      colors={{
                        primary: pink800,
                        secondary: white
                      }}
                    />
                    
                  </Box>
                  <Heading
                    as="h2"
                    fontSize={["3xl"]}
                    mt="4"
                    mb="4"
                    w="max"
                  >
                    Fácil aprendizado
                  </Heading>
                  <Text
                    maxW={320}
                    color="gray.300"
                  >
                    Telas fácil de usar deixando a experiência agradável.
                  </Text>
                </GridItem>
                <GridItem
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  pt="0"
                  pb="6"
                  px="6"
                >
                  <Box w="16">
                    <Lordicon
                      icon="book"
                      size={'100%'}
                      delay={7000}
                      colors={{
                        primary: pink800,
                        secondary: white
                      }}
                    />
                    
                  </Box>
                  <Heading
                    as="h2"
                    fontSize={["3xl"]}
                    mt="4"
                    mb="4"
                    w="max"
                  >
                    Comunidade e network
                  </Heading>
                  <Text
                    maxW={320}
                    color="gray.300"
                  >
                    Conheça e conecte-se com outros desenvolvedores.
                  </Text>
                </GridItem>
                <GridItem
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  pt="0"
                  pb="6"
                  px="6"
                >
                  <Box w="16">
                    <Lordicon
                      icon="book"
                      size={'100%'}
                      delay={7000}
                      colors={{
                        primary: pink800,
                        secondary: white
                      }}
                    />
                    
                  </Box>
                  <Heading
                    as="h2"
                    fontSize={["3xl"]}
                    mt="4"
                    mb="4"
                    w="max"
                  >
                    Qualidade de ensino
                  </Heading>
                  <Text
                    maxW={320}
                    color="gray.300"
                  >
                    Tenha acesso a aulas iniciante e avançado de qualidade e grátis
                  </Text>
                </GridItem>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        as="footer"
        bg="blackAlpha.800"
        p="8"
      >
        <Flex
          w="100%"
          maxW={1480}
          mx="auto"
          justifyContent="space-between"
        >
          <Box>
            <Text
              color="gray.300"
              as="span"
              fontSize={["md"]}
              display="flex"
              alignItems="center"
              gap="6"
            >
              Kaguya - 2022
            </Text>
          </Box>

          <Flex
            gap="4"
          >
            <NextLink href="/terms" passHref>
              <ChakraLink
                color="gray.300"
              >
                Termos de uso
              </ChakraLink>
            </NextLink>
            <Divider orientation='vertical' />
            <NextLink href="/privacy-policy" passHref>
              <ChakraLink
                color="gray.300"
              >
                Politica de privacidade
              </ChakraLink>
            </NextLink>
            <Divider orientation='vertical' />
            <NextLink href="/help" passHref>
              <ChakraLink
                color="gray.300"
              >
                Ajuda
              </ChakraLink>
            </NextLink>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
