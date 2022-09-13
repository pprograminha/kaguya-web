
import { 
  Box, 
  Flex, 
  Heading, 
  Image, 
  Link as ChakraLink, 
  Stack, 
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Button } from '@/components/Button';
import Lordicon from '@/components/ReactLordicon';
import { TrailMenu } from './TrailMenu';

interface TrailData {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar_url: string;

  created_at: string;
  updated_at: string;

  _count: {
    playlists: number;
    users: number;
    lessons: number;
  };
}

interface TrailProps {
  trail: TrailData;
}

export function Trail({
  trail
}: TrailProps) {
  return (
    <>
      <Box
        position="relative"
      >
        <NextLink href={`/trail/${trail.slug}`} passHref>
          <ChakraLink
            display="flex"
            w="100%"
            bg="blackAlpha.800"
            px={["4", "8"]}
            py={["4", "6"]}
            borderRadius="md"
            cursor="pointer"
            _hover={{
              textDecoration:"none"
            }}
          >
            <Flex
              alignItems="center"
              gap="4"
            >
              <Image
                src={trail.avatar_url}
                alt={`Avatar da trilha de ${trail.name}.`}
                    
                w={["12","16"]}
                h={["12","16"]}
              />
              <Stack
                flexDirection="column"
              >
                <Heading
                  fontSize={["sm", "md", "2xl"]}
                >
                  {trail.name}
                </Heading>
                <Box>
                  <Text
                    color="gray.300"
                    fontSize={["sm"]}
                  >
                    {trail._count.playlists === 1 ? (
                      <>{trail._count.lessons} playlist</>
                    ) : (
                      <>{trail._count.playlists} playlists</>
                    )}
                  </Text>
                  <Text
                    color="gray.300"
                    fontSize={["sm"]}
                  >
                    {trail._count.lessons === 1 ? (
                      <>{trail._count.lessons} aula</>
                    ) : (
                      <>{trail._count.lessons} aulas</>
                    )}
                  </Text>
                  <Text
                    color="gray.300"
                    fontSize={["sm"]}
                  >
                    {trail._count.users === 1 ? (
                      <>{trail._count.users} usuário</>
                    ) : (
                      <>{trail._count.users} usuários</>
                    )}
                  </Text>
                </Box>
              </Stack>
            </Flex>
            <Box
              ml="auto"
              display="flex"
              flexDirection="column"
            >
              <Button
                py="1"
                mt="auto"
              >
                <Lordicon 
                  icon='flatArrow' 
                  size={20} 
                  trigger='hover' 
                />
              </Button>
            </Box>
          </ChakraLink>
        </NextLink>
        <TrailMenu trail={trail} />
      </Box>
    </>
  );
}