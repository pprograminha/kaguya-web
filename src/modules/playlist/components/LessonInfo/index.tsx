import { Flex } from '@chakra-ui/react';
import { LessonDescription } from './LessonDescription';
import { LessonTitle } from './LessonTitle';
interface Lesson {
  id: string;
  name: string;
  description: string;
  slug: string;

  completed: boolean;

  _count: {
		dislikes: number;
		likes: number;
		views: number;
	},
  block_id: string;
}

type LessonInfoProps = {
  lesson?: Lesson 
  isLoadingLesson: boolean
}

export function LessonInfo({ lesson, isLoadingLesson } : LessonInfoProps) {
  return (
    <>
      <Flex
          flexDirection="column"
          ml={["4", "6"]}
          mt="10"
        >
          <LessonTitle isLoadingLesson={isLoadingLesson} title={lesson?.name} />
          <LessonDescription isLoadingLesson={isLoadingLesson} description={lesson?.description} />
        </Flex>
    </>
  )
}