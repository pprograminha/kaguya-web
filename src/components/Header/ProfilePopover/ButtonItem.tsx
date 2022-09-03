import { 
  Box,
} from '@chakra-ui/react';

export interface ButtonItemProps {
  children?: React.ReactNode;
}

export function ButtonItem({
  children
}: ButtonItemProps) {
  return (
    <>
      <Box
        as="button"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        gap="3"
        px="8"
        py="4"
        fontWeight="normal"
        bg="none"
        color="gray.300"
        _hover={{
          bg:"none",
          color: "pink.600"
        }}
        _active={{
          bg:"none"
        }}
      >
        {children}
      </Box>
    </>
  );
}