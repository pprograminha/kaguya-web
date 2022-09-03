import { 
  Flex,
  useBreakpointValue,
  Link as ChakraLink,
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaUser } from 'react-icons/fa';
import { AppLogo } from '../AppLogo';
import { UserProfile } from './UserProfile';

type HeaderTypes = {
  hasUserProfile?: boolean;
  hasSignInButton?: Boolean; 
};

export interface HeaderProps {
  headerType?: HeaderTypes;
}

export function Header({
  headerType,
}: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Flex
        as="header"
        background="-webkit-gradient(
          linear, 0 0, 100% 0, 
          from(#0F0F11), 
          to(#0F0F11), 
          color-stop(0.5, rgb(27, 29, 36))
        )"
        mx="auto"
        maxW={1480}
        w="100%"
      >
        <Flex
          alignItems="center"
          maxWidth={1480}
          width="100%"
          px="8"
          py="4"
          mx="auto"
        >
          <AppLogo />
          {headerType?.hasSignInButton && (
            <Flex
              ml="auto"
              gap="12"
              alignItems="center"
            >
              <NextLink href="/login" passHref>
                <ChakraLink
                  fontStyle={["sm", "md"]}
                  fontWeight="bold"

                  _hover={{
                    textDecoration: "none"
                  }}
                >
                  <Text
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="3"
                  >
                    <FaUser /> Entrar
                  </Text>                  
                </ChakraLink>
              </NextLink>

              <NextLink href="/register" passHref>
                <ChakraLink
                  fontStyle={["sm", "md"]}
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="pink.500"
                  borderRadius="md"
                  p="2"
                  px="6"
                  transition="all 0.3s"

                  _hover={{
                    textDecoration: "none",
                    bg:"pink.500"
                  }}
                >
                  <Text>Criar Conta</Text>                  
                </ChakraLink>
              </NextLink>
            </Flex>
          )}
          {headerType?.hasUserProfile && <UserProfile showProfileData={isWideVersion} /> }
        </Flex>        
      </Flex>
    </>
  );
}