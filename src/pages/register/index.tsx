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
              <Flex
                justifyContent="space-between"
                w="100%"
                marginBottom="8"
              >
                <NextLink href="/login" passHref>
                  <ChakraLink
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                    w="100%"
                    padding={["4"]}
                    fontSize={["xs","sm", "md"]}
                    
                    bg="linear-gradient(to left, rgb(13, 14, 18), rgb(24, 26, 33))"
                    fontWeight="normal"
                    borderTopLeftRadius="md"
                    _hover={{
                      bg: "normal"
                    }}
                    >
                    Login
                  </ChakraLink>
                </NextLink>
                <Text
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  w="100%"
                  padding={["4"]}
                  fontSize={["xs","sm", "md"]}

                  borderTopRightRadius="md"
                  textAlign="center"
                  color="pink.600"
                  bg="blackAlpha.700"
                  cursor="default"
                  fontWeight="normal"
                  boxShadow="rgb(24 26 33) 0px 15px, rgb(0 0 0 / 50%) 4px 4px 10px"
                  _hover={{
                    bg: "blackAlpha.700"
                  }}
                >
                  Registrar
                </Text>
              </Flex>

              <Box
                px={["4", "8"]}
                w="100%"
                pb="8"
                as="form"
              >
                <Heading
                  size={["md"]}
                  textAlign="left"
                  w="100%"
                  marginBottom="8"
                >
                  Registrar-se na plataforma
                </Heading>

                <VStack spacing="3">
                  <Button type="button" disabled>
                    <FcGoogle />
                    Entrar com a Google
                  </Button>
                  
                  <Button type="button" disabled>
                    <AiFillGithub />
                    Entrar com o Github
                  </Button>
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
                    name="email"
                    placeholder="E-mail"
                    icon={<MdEmail color="#9a9ea3"/>}
                  />
                  <Input
                    name="username"
                    placeholder="Username"
                    icon={<FaUser color="#9a9ea3"/>}
                  />
                  <Input
                    name="password"
                    placeholder="Senha"
                    icon={<FaLock color="#9a9ea3"/>}
                  />
                </VStack>
                
                <Button type="submit" disabled mt="8">
                  Entrar
                </Button>
              </Box>
            </VStack>
          </ScaleFade>
        </Flex>
      </Flex>
    </>
  );
}