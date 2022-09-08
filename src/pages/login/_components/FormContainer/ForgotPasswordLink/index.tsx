import { 
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export function ForgotPasswordLink() {
  return (
    <>
      <Text
        w="100%"
        pb="6"
        color="gray.300"
        fontSize={["sm", "md"]}
        pt="3"
      >
        <Text as="span" mr="1">
          Esqueceu sua senha?
        </Text>
        <NextLink href="/recover-password" passHref>
          <ChakraLink
            color="gray.300"
            fontSize={["sm", "md"]}
            _hover={{
              color: "pink.500",
              textDecoration: "underline"
            }}
          >
            Redefinir agora
          </ChakraLink>
        </NextLink>
      </Text>
    </>
  )
}