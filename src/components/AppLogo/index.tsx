import { 
  Box,
  Link as ChakraLink, 
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Lordicon from '../ReactLordicon';

export function AppLogo() {
  return (
    <>
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
    </>
  )
}