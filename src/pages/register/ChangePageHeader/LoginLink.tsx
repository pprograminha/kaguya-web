import { 
  Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export function LoginLink() {
  return (
    <>
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
    </>
  )
}