import { Flex } from '@chakra-ui/react';
import { LessonDescription } from './LessonDescription';
import { LessonTitle } from './LessonTitle';

export function LessonInfo() {
  return (
    <>
      <Flex
          flexDirection="column"
          ml={["4", "6"]}
          mt="10"
        >
          <LessonTitle />
          <LessonDescription />
        </Flex>
    </>
  )
}