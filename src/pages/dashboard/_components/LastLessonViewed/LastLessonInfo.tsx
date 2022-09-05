import { Flex, HStack, Image, Text } from '@chakra-ui/react';

export function LastLessonInfo() {
  return (
    <Flex>
      <Image
        src="https://app-kaguya.s3.amazonaws.com/1096b9782cc48ca7b1b19422cfe39f-html5.png"
        alt="html"

        w="16"
        h="16"
      />
      <HStack
        flexDirection="column"
        alignItems="flex-start"
        ml="4"
      >
        <Text
          fontWeight="bold"
          fontSize={["sm", "md", "lg"]}
        >
          O que é HTML
        </Text>
        <Text
          ml="0 !important"
          color="gray.300"
          fontSize={["sm"]}
        >
          Introdução ao HTML 5
        </Text>
      </HStack>
    </Flex>
  );
}