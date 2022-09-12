import { 
  Input as ChakraInput, 
  InputProps as ChakraInputProps, 
  FormControl,
  FormErrorMessage,
  Text,
  Box,
  FormLabel,
  useToken,
} from '@chakra-ui/react';
import { forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ChangeInputTypeButton } from './ChangeInputTypeButton';

export interface InputPasswordProps extends ChakraInputProps {
  name: string;
  icon?: React.ReactElement;
  error?: FieldError;
}

const InputPasswordBase: React.ForwardRefRenderFunction<HTMLInputElement, InputPasswordProps> = ({
  name,
  icon,
  error = null,
  ...rest
}, ref) => {
  const [gray300]= useToken("colors", [
    'gray.300', 
  ]);

  const [inputType, setInputType] = useState<'text' | 'password'>('password');
  
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
            type={inputType}

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
            border="none"
        
            {...rest}
          />

          {inputType === 'password' && (
             <ChangeInputTypeButton
              right="2"
              onClick={() => setInputType('text')}
            >
              <AiFillEyeInvisible color={`${gray300}`} size={18} />
            </ChangeInputTypeButton>
          )}
          {inputType === 'text' && (
             <ChangeInputTypeButton
              right="2"
              onClick={() => setInputType('password')}
            >
              <AiFillEye color={`${gray300}`} size={18} />
            </ChangeInputTypeButton>
          )}
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

export const InputPassword = forwardRef(InputPasswordBase);