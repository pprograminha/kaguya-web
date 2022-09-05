import { Heading, Text } from '@chakra-ui/react';

export function TrailTitle() {
  return (
    <>
      <Heading
        display="flex"
        gap="2"
        fontSize={["lg", "2xl"]}
      >
        Trilha de 
        <Text
          as="span"
          color="pink.500"
          fontSize={["lg", "2xl"]}
        >
          HTML
        </Text>
      </Heading>
    </>
  )
}