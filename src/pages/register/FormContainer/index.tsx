import { Box, Flex, Text, VStack } from '@chakra-ui/react';

import { SignInWithGithubButton } from '../SignInButtons/SignInWithGithubButton';
import { SignInWithGoogleButton } from '../SignInButtons/SignInWithGoogleButton';
import { FormHeader } from './FormHeader';
import { FormInputs } from './Inputs';

import { Button } from '@/components/Button';
import { DividerLine } from '@/components/DividerLine';

export function FormContainer() {
  return (
    <>
      <Box
        px={["4", "8"]}
        w="100%"
        pb="12"
        as="form"
      >
        <FormHeader />
        <VStack
          spacing="3"
        >
          <SignInWithGoogleButton  />
          <SignInWithGithubButton  />
        </VStack>

        <Flex
          alignItems="center"
          my="4"
        >
          <DividerLine />
          <Text color="gray.300">ou</Text>
          <DividerLine />
        </Flex>
        
        <FormInputs />
        
        <Button mt="8" w="100%" type="submit" disabled>
          Registrar
        </Button>
      </Box>
    </>
  )
}