import { Flex } from '@chakra-ui/react';
import { LessonVideoLikesDislikes } from './LessonVideoLikesDislikes';
import { LessonViewedCountFromVideo } from './LessonViewedCountFromVideo';

export function InfoAboutLessonVideo() {
  return (
    <>
      <Flex 
        p="8"
        py="6"
        bg="blackAlpha.800"
        justifyContent="space-between"
        alignItems="center"
      >
        <LessonViewedCountFromVideo />
        <LessonVideoLikesDislikes />
      </Flex>
    </>
  )
}