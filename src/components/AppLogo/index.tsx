import {
  Box,
  ChakraProps,
  Link as ChakraLink, Text, useToken
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Lordicon from '../ReactLordicon';

type AppLogoProps = ChakraProps & {
  lordiconSize?: string[]
}
export function AppLogo({
  lordiconSize,
  fontSize
}: AppLogoProps) {
  const router = useRouter() 
  const [pink800, white]= useToken("colors", ['pink.800', 'white'])
  
  return (
    <>
       <NextLink href="/dashboard">
        <ChakraLink
          cursor={router.pathname === '/dashboard' ? 'not-allowed' : undefined}
          display="flex"
          alignItems="center"
          gap="2"
          _hover={{
            textDecoration: "none"
          }}
        >
          <Box
            w={lordiconSize || ["8", "12"]}
          >
            <Lordicon
              size={"100%"}
              icon='nightSky'
              colors={{
                primary: white,
                secondary: pink800
              }}
              trigger='loop'
              delay={3000}
            />
          </Box>
          <Text
            fontWeight="bold"
            fontSize={fontSize || ["md", "2xl"]}
          >
            Kaguya
          </Text>
        </ChakraLink>
      </NextLink>
    </>
  )
}