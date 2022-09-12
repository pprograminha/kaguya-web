import { 
  Input as ChakraInput, 
  InputProps as ChakraInputProps, 
  FormControl,
  FormErrorMessage,
  Text,
  Box,
  FormLabel,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps extends ChakraInputProps {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  icon?: React.ReactElement;
  error?: FieldError;
}

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  icon,
  type,
  error = null,
  ...rest
}, ref) => {
  return (
    <>
      <FormControl
        flexDirection="column"
        isInvalid={!!error}
      >
        <FormLabel
          position="relative"
          m="0"
        >
          <Box
            position="absolute"
            zIndex="10"
            left="4"
            top="50%"
            transform="translateY(-50%)"
          >
            {icon}
          </Box>

          <ChakraInput
            name={name}
            ref={ref}
            type={type}

            size="lg"
            bg="blackAlpha.600"

            display="block"
            py={["sm", "md", "1"]}
            w="100%"
            borderRadius="md"
            outline="0"
            pl="12"

            fontSize={["sm", "md"]}
            textColor="gray.300"
            color="gray.300"
            border="0"
        
            {...rest}
          />
        </FormLabel>

        {!!error && (
          <FormErrorMessage>
            <Text color="red.300" >
              {error.message}
            </Text>
          </FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}

export const Input = forwardRef(InputBase);