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
import { Button } from '../../../../components/Button';
import Lordicon from '../../../../components/ReactLordicon';
import { TrailMenu } from './TrailMenu';

export function Trail() {
  return (
    <>
      <NextLink href="#" passHref>
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
              src="https://app-kaguya.s3.amazonaws.com/1096b9782cc48ca7b1b19422cfe39f-html5.png"
              alt="html"
                  
              w={["12","16"]}
              h={["12","16"]}
            />
            <Stack
              flexDirection="column"
            >
              <Heading
                fontSize={["sm", "md", "2xl"]}
              >
                HTML
              </Heading>
              <Box>
                <Text
                  color="gray.300"
                  fontSize={["sm"]}
                >
                  1 playlist
                </Text>
                <Text
                  color="gray.300"
                  fontSize={["sm"]}
                >
                  2 aulas
                </Text>
              </Box>
            </Stack>
          </Flex>
          <Box
            ml="auto"
            display="flex"
            flexDirection="column"
          >
            <TrailMenu />
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
    </>
  );
}