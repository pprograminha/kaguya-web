import { 
  Box,
  ChakraProps,
  Flex,
  Link as ChakraLink
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Lordicon from '@/components/ReactLordicon';
import { useRouter } from 'next/router';
import { ChangeCompleteLessonButton } from '@/components/ChangeCompleteLessonButton';

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

interface Lesson {
  id: string;
  name: string;
  slug: string;
  completed: boolean;
  block_id: string;
}

export interface Block {
  id: string;
  name: string;
  slug: string;
  user_block: {
    progress: number;
  } | null;

  lessons: Lesson[]
}

export interface LessonProps {
  isCurrentLesson?: boolean;
  lesson: Lesson;
  block: Block;
  hasNextLesson?: boolean;
}

export function Lesson({
  isCurrentLesson = false,
  hasNextLesson = false,
  lesson,
  block,
}: LessonProps) {
  const lessonStyle = isCurrentLesson ? currentLessonStyle : defaultLessonStyle;

  const router = useRouter();
  const query = router.query;
  const slugs = query?.slug || [] as string[];

  const trailSlug = query?.trailSlug;
  const playlistSlug = slugs[0] as string;

  return (
    <Box
      pb="4"
      position="relative"
    >
      <Flex
        as="li"
      >
        <ChangeCompleteLessonButton
          isCurrent={isCurrentLesson}
          hasNextItem={hasNextLesson}
          lesson={lesson}
        />
        <NextLink
          href={`/trail/${trailSlug}/playlist/${playlistSlug}/block/${block.slug}/lesson/${lesson.slug}`}
          passHref
        >
          <ChakraLink 
            cursor= "pointer"
            display="flex"
            alignItems="center"
            gap="1"
            ml="4"
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
    </Box>
  )
}