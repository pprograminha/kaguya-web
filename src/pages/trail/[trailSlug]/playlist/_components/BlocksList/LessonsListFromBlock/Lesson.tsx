import { 
  ChakraProps,
  Flex,
  Link as ChakraLink
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Lordicon from '@/components/ReactLordicon';
import { useRouter } from 'next/router';

interface Lesson {
  id: string;
  name: string;
  slug: string;
}

export interface LessonProps {
  isCurrentLesson?: boolean;
  lesson: Lesson;
}

const currentLessonStyle: ChakraProps = {
  fontWeight: "bold",
  _hover: {
    textDecoration: "none",
    color: "pink.500"
  }
};

const defaultLessonStyle: ChakraProps = {
  fontWeight: "normal",
  color: "gray.300",
  _hover: {
    color: "pink.500"
  },
}

export function Lesson({
  isCurrentLesson = false,
  lesson,
}: LessonProps) {
  const lessonStyle = isCurrentLesson ? currentLessonStyle : defaultLessonStyle;

  const router = useRouter();
  const query = router.query;

  const trailSlug = query?.trailSlug;
  const [
    playlistSlug, 

    blockText,
    blockSlug, 

    lessonText, 
    lessonSlug
  ] = query?.slug || [] as string[];

  return (
    <>
      <Flex>
        <NextLink href={`/trail/${trailSlug}/playlist/${playlistSlug}/block/${blockSlug}/lesson/${lessonSlug}`} passHref>
          <ChakraLink 
            cursor= "pointer"
            display="flex"
            alignItems="center"
            gap="1"
            {...lessonStyle}
          >
            <Lordicon
              icon='play'
              trigger='morph'
              size={20}
            />
            {lesson.name}
          </ChakraLink>
        </NextLink>
      </Flex>
    </>
  )
}