import { 
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface ItemLinkProps {
  nextLink: NextLinkProps;
  chakraLink?: ChakraLinkProps;
  children?: React.ReactNode;
}

export function ItemLink({
  chakraLink,
  nextLink,
  children,
}: ItemLinkProps) {
  return (
    <>
      <NextLink {...nextLink}>
        <ChakraLink
          display="flex"
          alignItems="center"
          gap="3"
          fontWeight="normal"
          bg="none"
          px="8"
          py="4"
          color="gray.300"
          _hover={{
            bg:"none",
            color: "pink.700",
          }}
          _active={{
            bg:"none"
          }}
          {...chakraLink}
        >

          {children}
        </ChakraLink>
      </NextLink>
    </>
  );
}