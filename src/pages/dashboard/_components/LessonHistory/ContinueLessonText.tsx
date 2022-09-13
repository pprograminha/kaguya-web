import { Box, Flex, Text } from '@chakra-ui/react';
import { IoPlaySharp } from 'react-icons/io5';
import { UserHistoryShow } from '.';

interface ContinueLessonInfoProps {
  info: UserHistoryShow | undefined;
}

export function ContinueLessonText({
  info
}: ContinueLessonInfoProps) {
  return (
    <>
      <Flex
        ml={["auto"]}
        mt={["2", "0"]}
        alignItems="center"
        gap="6"
      >
        {info?.auto_generated ? (
          <Text
            fontSize={["sm", "md", "lg"]}
          >
            Sugerimos para você
          </Text>
        ) : (
          <Text
            fontSize={["sm", "md", "lg"]}
          >
            Continuar assistindo
          </Text>
        )}
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