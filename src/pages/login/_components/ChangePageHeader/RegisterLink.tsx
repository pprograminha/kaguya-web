import { 
  Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export function RegisterLink() {
  return (
    <>
      <NextLink href="/register" passHref>
        <ChakraLink
          display="flex"
          alignItems="center"
          justifyContent="center"

          w="100%"
          padding={["4"]}
          fontSize={["xs","sm", "md"]}
          
          bg="linear-gradient(to right, rgb(13, 14, 18), rgb(24, 26, 33))"
          fontWeight="normal"
          borderTopRightRadius="md"
          _hover={{
            bg: "normal"
          }}
          >
          Registrar
        </ChakraLink>
      </NextLink>
    </>
  )
}