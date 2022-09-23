import { Flex, useMediaQuery } from '@chakra-ui/react';
import { LessonVideoLikesDislikes } from './LessonVideoLikesDislikes';
import { LessonViewedCountFromVideo } from './LessonViewedCountFromVideo';

interface Lesson {
  id: string;
  name: string;
  description: string;
  slug: string;
  state: 'none' | 'liked' | 'disliked';

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
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  
  return (
    <>
      <Flex 
        p={!isLargerThan1024 ? "2": "8"}
        py="4"
        width={isLargerThan1024 
          ? "max(240px, min(850px, 50vw))"
          : "max(100%, min(850px, 50vw))"
        }
        bg="blackAlpha.800"
        justifyContent="space-between"
        alignItems="center"
      >
        <LessonViewedCountFromVideo 
          views={lesson?._count.views || 0} 
        />
        <LessonVideoLikesDislikes
          lesson={lesson}
        />
      </Flex>
    </>
  )
}