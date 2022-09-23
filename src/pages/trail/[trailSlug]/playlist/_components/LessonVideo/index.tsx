import { modifyYoutubeUrl } from '@/utils/modifyYoutubeUrl';
import { Flex, Skeleton, useMediaQuery } from '@chakra-ui/react';
import { InfoAboutLessonVideo } from './InfoAboutLessonVideo';

interface Lesson {
  id: string;
  name: string;
  description: string;
  link: string;
  slug: string;

  completed: boolean;
  state: 'none' | 'liked' | 'disliked';

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
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

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
        width={!isLargerThan1024 ? '100%' : "max(240px, min(850px, 50vw))"}
        flexDirection="column"
      >
        <Flex 
          maxWidth={"max(100%, min(850px, 50vw))"}
          height={!isLargerThan1024
            ? "max(calc(360px * 0.5625), min(calc(360px), calc(50vw)))" // mobile
            : "max(calc(360px * 0.5625), min(calc(850px * 0.5625), calc(50vw)))"
          }
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