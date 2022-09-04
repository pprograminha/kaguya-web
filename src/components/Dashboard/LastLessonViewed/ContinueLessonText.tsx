import { Box, Flex, Text } from '@chakra-ui/react';
import { IoPlaySharp } from 'react-icons/io5';

export function ContinueLessonText() {
  return (
    <>
      <Flex
        ml={["auto"]}
        mt={["2", "0"]}
        alignItems="center"
        gap="6"
      >
        <Text
          fontSize={["sm", "md", "lg"]}
        >
          Continuar assistindo
        </Text>
        <Box
          background="pink.700"
          p={["2", "3"]}
          borderRadius="50%"
        >
          <IoPlaySharp color="#fff" size="18px" />
        </Box>
      </Flex>
    </>
  );
}