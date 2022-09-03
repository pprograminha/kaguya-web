import { Flex } from '@chakra-ui/react';
import { ContinueLessonText } from './ContinueLessonText';
import { LastLessonInfo } from './LastLessonInfo';

export function LastLessonViewed() {
  return (
    <>
      <Flex
        bg="linear-gradient(90deg, 
          #181a21 0%, 
          #181a21 32%, 
          #a90f64 300%
        )"
        mr="auto"
        mt="6"
        p={["4", "6", "8"]}
        w="100%"
        borderRadius="md"
        cursor="pointer"
        transition="all 0.2s ease-in-out"
        _hover={{
          boxShadow: "-2px 2px 2px #a90f64"
        }}
        flexDirection={["column", "column", "row"]}
        alignItems={["flex-start", "flex-start", "center"]}
      >
        <LastLessonInfo />
        <ContinueLessonText />
      </Flex>
    </>
  )
}