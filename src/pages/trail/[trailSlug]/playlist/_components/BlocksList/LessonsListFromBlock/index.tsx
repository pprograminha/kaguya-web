import { AccordionPanel } from '@chakra-ui/react';
import { Lesson } from './Lesson';

interface LessonData {
  id: string;
  name: string;
  slug: string;
}

export interface LessonListFromBlocks {
  lessons?: LessonData[];
  currentLessonSlug?: string;
}

export function LessonListFromBlock({
  lessons,
  currentLessonSlug
}: LessonListFromBlocks) {
  return (
    <>
      <AccordionPanel
        py="4"
        px="6"
        display="flex"
        flexDirection="column"
        gap="4"
      >
        {lessons?.length && lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            isCurrentLesson={lesson.slug === currentLessonSlug}
            lesson={lesson}
          />
        ))}
      </AccordionPanel>
    </>
  )
}