import { Heading, Text } from '@chakra-ui/react';

export function Welcome() {
  return (
    <>
      <Text
        color="gray.300"
        letterSpacing="wide"
        fontSize={["sx", "sm", "md"]}
      >
        Olá, Tiago e Marcos
      </Text>
      <Heading
        fontSize={["sm", "md", "2xl"]}
        mt="1"
      >
        Vamos estudar o que hoje?
      </Heading>
    </>
  );
}