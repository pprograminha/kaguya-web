import { 
  Button,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react';

export interface ButtonItemProps extends ChakraButtonProps {
  children?: React.ReactNode;
}

export function ButtonItem({
  children,
  ...rest
}: ButtonItemProps) {
  return (
    <>
      <Button
        display="flex"
        gap="3"
        py="4"
        px="4"
        fontWeight="normal"
        bg="none"
        h="auto !important"
        color="gray.300"
        _hover={{
          bg:"none",
          color: "pink.500"
        }}
        _active={{
          bg:"none"
        }}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
}