import { 
  Box,
  Flex, 
  Link as ChakraLink, 
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Lordicon from '../ReactLordicon';

export function Header() {
  return (
    <>
      <Flex
        as="header"
        background="-webkit-gradient(
          linear, 0 0, 100% 0, 
          from(rgb(13, 14, 18)), 
          to(rgb(13, 14, 18)), 
          color-stop(0.5, rgb(27, 29, 36))
        )"
        mx="auto"
        maxW={1440}
        w="100%"
      >
        <Flex
          maxWidth={1024}
          width="100%"
          px="8"
          py="4"
          mx="auto"
        >
          <NextLink href="/dashboard">
            <ChakraLink
              display="flex"
              alignItems="center"
              gap="2"
              _hover={{
                textDecoration: "none"
              }}
            >
              <Box
                maxW={["8", "12"]}
              >
                <Lordicon
                  size={"100%"}
                  icon='nightSky'
                  colors={{
                    primary:'#fff',
                    secondary: '#a90f64'
                  }}
                  trigger='loop'
                  delay={3000}
                />
              </Box>
              <Text
                fontWeight="bold"
                fontSize={["md", "2xl"]}
              >
                Kaguya
              </Text>
            </ChakraLink>
          </NextLink>
        </Flex>        
      </Flex>
    </>
  );
}