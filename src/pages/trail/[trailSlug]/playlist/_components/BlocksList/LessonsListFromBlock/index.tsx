import { AccordionPanel } from '@chakra-ui/react';
import { Lesson } from './Lesson';

interface LessonData {
  id: string;
  name: string;
  slug: string;
  completed: boolean;
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
        as="ul"
        py="4"
        px="6"
        display="flex"
        flexDirection="column"
      >
        {lessons && lessons.map((lesson, index) => (
          <Lesson
            key={lesson.id}
            lesson={lesson}

            isCurrentLesson={index === 0}
            hasNextLesson={index !== lessons?.length - 1}
            isCompleted={lesson.completed}
          />
        ))}
      </AccordionPanel>
    </>
  )
}