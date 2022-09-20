import { modifyYoutubeUrl } from '@/utils/modifyYoutubeUrl';
import { Flex, Skeleton } from '@chakra-ui/react';
import { InfoAboutLessonVideo } from './InfoAboutLessonVideo';

interface Lesson {
  id: string;
  name: string;
  description: string;
  link: string;
  slug: string;

  completed: boolean;

  _count: {
		dislikes: number;
		likes: number;
		views: number;
	},
  block_id: string;
}

interface LessonVideoProps {
  lesson?: Lesson
  isLoadingLesson: boolean
}

export function LessonVideo({ lesson, isLoadingLesson }: LessonVideoProps) {
  if(isLoadingLesson) {
    return <Skeleton  
      borderRadius="md"
      width= "max(240px, min(850px, 50vw))"
      height= "max(calc(240px * 0.5625), min(calc(850px * 0.5625), calc(50vw * 0.5625)))" 
      endColor="blackAlpha.700" 
      startColor="blackAlpha.600" 
    />
  }

  return (
    <>
      <Flex 
        borderRadius="md"
        overflow="hidden"
        width= "max(240px, min(850px, 50vw))"
        flexDirection="column"
      >
        <Flex 
          width= "max(240px, min(850px, 50vw))"
          height= "max(calc(240px * 0.5625), min(calc(850px * 0.5625), calc(50vw * 0.5625)))"
      
        >
          <iframe
            width="100%"
            height="100%"
            title={lesson?.name}
            src={modifyYoutubeUrl(lesson?.link)}
            frameBorder="0"
            allowFullScreen
          />
        </Flex>
          <InfoAboutLessonVideo lesson={lesson} />
      </Flex>
    </>
  )
}