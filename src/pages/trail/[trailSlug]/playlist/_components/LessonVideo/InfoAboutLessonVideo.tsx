import { Flex } from '@chakra-ui/react';
import { LessonVideoLikesDislikes } from './LessonVideoLikesDislikes';
import { LessonViewedCountFromVideo } from './LessonViewedCountFromVideo';

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

interface InfoAboutLessonVideoProps {
  lesson?: Lesson
}

export function InfoAboutLessonVideo({ lesson }: InfoAboutLessonVideoProps) {
  return (
    <>
      <Flex 
        p="8"
        py="6"
        width= "max(240px, min(850px, 50vw))"
        bg="blackAlpha.800"
        justifyContent="space-between"
        alignItems="center"
      >
        <LessonViewedCountFromVideo 
          views={lesson?._count.views || 0} 
        />
        <LessonVideoLikesDislikes 
          likes={lesson?._count.likes || 0} 
          dislikes={lesson?._count.dislikes || 0} 
        />
      </Flex>
    </>
  )
}