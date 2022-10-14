import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';

import { Header } from '@/components/Header';
import { Input } from '@/components/Form/Input';
import { TextArea } from '@/components/Form/TextArea';
import { Button } from '@/components/Button';

export default function SuggestionCreatePage() {
  return (
    <>
      <Head>
        <title>Kaguya | Criação de sugestão</title>
      </Head>

      <Flex
        flexDirection="column"
      >
        <Header headerType={'has-user-profile'}/>

        <Box
          maxW={1480}
          w="100%"

          flexDirection={"column"}

          mt="16"
          mb="16"
          mx={["0", "auto"]}
        >
          <Box
            mx="4"
          >
            <Heading>Criar uma sugestão de trilha</Heading>
            <Box
              mt="16"
              maxW={840}
            >
              <Heading
                as="h2"
                fontSize={["md", "lg", "2xl"]}
              >
                Por que a comunidade deve aceitar sua sugestão para ser implementada no aplicativo?
              </Heading>
              <Flex
                mt="4"
                flexDirection="column"
                gap="4"
              >
                <Input
                  name="a"
                  labelText="Título da sugestão"
                  labelProps={{
                    maxW: 460
                  }} 
                />
                <TextArea
                  name="a"
                  labelText="Descrição da sugestão"
                  labelProps={{
                    maxW: 460,
                  }}
                  maxHeight="260"
                />
              </Flex>
            </Box>
            <Flex
              bg="blackAlpha.700"
              mt="8"
              p="8"
              justifyContent="space-between"
            >
              <Flex
                flexDirection="column"
                w="100%"
              >
                <Heading
                  as="h2"
                  fontSize={["md", "lg", "2xl"]}
                >
                  Informações da trilha
                </Heading>
                <Flex
                  mt="4"
                  flexDirection="column"
                  gap="4"
                >
                  <Input
                    name="a"
                    labelText="Nome da trilha"
                    labelProps={{
                      maxW: 460
                    }} 
                  />
                  <TextArea
                    name="a"
                    labelText="Descrição da trilha"
                    labelProps={{
                      maxW: 460,
                    }}
                    maxHeight="260"
                  />
                </Flex>
              </Flex>

              <Flex
                flexDirection="column"
                w="100%"
              >
                <Flex
                  alignItems="center"
                  gap="4"
                >
                  <Heading
                    as="h2"
                    fontSize={["md", "lg", "2xl"]}
                  >
                    Playlists da trilha
                  </Heading>
                  <Button py="0">
                    + 1
                  </Button>
                </Flex>
                <Flex gap="4" flexDirection="column">
                  <Flex
                    mt="4"
                    flexDirection="column"
                    gap="4"
                    maxW={500}
                    bg="blackAlpha.200"
                    p="8"
                    position="relative"
                  >
                    <Text
                      position="absolute"
                      top="-4"
                      left="-4"
                      bg="blackAlpha.900"
                      p="4"
                      w="12"
                      h="12"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      _hover={{
                        border: '1px solid',
                        borderColor: 'white'
                      }}
                    >
                      1
                    </Text>
                    <Input
                      name="a"
                      labelText="Nome da playlist"
                      labelProps={{
                        maxW: 460
                      }} 
                    />
                    <TextArea
                      name="a"
                      labelText="Descrição da playlist"
                      labelProps={{
                        maxW: 460,
                      }}
                      maxHeight="260"
                    />

                    <Box ml="8">
                      <Flex
                        alignItems="center"
                        gap="4"
                      >
                        <Heading
                          as="h3"
                          fontSize={["2xl"]}
                        >
                          Blocos da playlist
                        </Heading>
                        <Button py="0">
                          + 1
                        </Button>
                      </Flex>
                      <Flex
                        flexDirection="column"
                        mt="2"
                      >
                        <Input
                          name="a"
                          labelText="Nome do bloco"
                        />
                        <Box ml="8" mt="4">
                          <Flex
                            alignItems="center"
                            gap="4"
                          >
                            <Heading
                              as="h4"
                              fontSize={["lg"]}
                            >
                              Aulas
                            </Heading>
                            <Button py="0">
                              + 1
                            </Button>
                          </Flex>
                          <Box>
                            <VStack>
                              <Input
                                name="a"
                                labelText="Nome da aula"
                              />
                              <Input
                                name="a"
                                labelText="Link de video da aula"
                              />
                              <Input
                                name="a"
                                labelText="Descrição da aula"
                              />
                            </VStack>
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  )
}