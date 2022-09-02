import { 
  Input as ChakraInput, 
  InputProps as ChakraInputProps, 
  Flex, 
} from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
  name: string;
  icon?: React.ReactElement;
}

export function Input({
  name,
  icon,
  ...rest
}: InputProps) {
  return (
    <>
      <Flex
        as="label"
        flexDirection="row"
        align="center"
        bg="blackAlpha.600"
        py={["sm", "md", "1"]}
        pl="4"
        w="100%"
        borderRadius="md"
        outline="0"
      >
        {icon}
        <ChakraInput
          name={name}
          border="none"
          size="lg"
          fontSize={["sm", "md"]}
          textColor="gray.300"
          color="gray.300"
          _focusVisible={{
            border: 'none'
          }}
          _focusWithin={{
            border: 'none'
          }}
          _hover={{
            border: 'normal'
          }}
          {...rest}
        />
      </Flex>
    </>
  );
}