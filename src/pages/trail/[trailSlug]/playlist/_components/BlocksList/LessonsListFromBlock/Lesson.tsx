import { 
  ChakraProps,
  Flex,
  Link as ChakraLink
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Lordicon from '@/components/ReactLordicon';

export interface LessonProps {
  isCurrentLesson?: boolean;
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
  isCurrentLesson = false
}: LessonProps) {
  const lessonStyle = isCurrentLesson ? currentLessonStyle : defaultLessonStyle;

  return (
    <>
      <Flex>
        <NextLink href="#" passHref>
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
            O que é HTML
          </ChakraLink>
        </NextLink>
      </Flex>
    </>
  )
}