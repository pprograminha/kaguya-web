import { Box } from '@chakra-ui/react';
import { IsCurrentLessonItem } from './IsCurrentLessonItem';
import { IsNotCurrentLessonItem } from './IsNotCurrentLessonItem';
import { ChangeCompleteLessonButtonLineSeparator } from './LineSeparate';

interface Lesson {
  id: string;
  name: string;
  slug: string;
  completed: boolean;
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

export interface ChangeCompleteLessonButtonProps {
  isCurrent?: boolean;
  hasNextItem?: boolean;
  lesson: Lesson;
}

export function ChangeCompleteLessonButton({
  isCurrent = false,
  hasNextItem = false,
  lesson,
}: ChangeCompleteLessonButtonProps) {
  if(isCurrent) {
    return (
      <>
        <Box
          position="absolute"
          height="100%"
        >
          <IsCurrentLessonItem
            isCompleted={lesson.completed}
            lesson={lesson}
          />
          <ChangeCompleteLessonButtonLineSeparator
            isShow={hasNextItem}
            isCompleted={lesson.completed}
          />
        </Box>
      </>
    )
  }

  return (
    <>
      <Box
        position="absolute"
        height="100%"
      >
        <IsNotCurrentLessonItem
          isCompleted={lesson.completed}
          lesson={lesson}
          // setCompletedLesson={setCompletedLesson}
        />
        <ChangeCompleteLessonButtonLineSeparator
          isShow={hasNextItem}
          isCompleted={lesson.completed}
        />
      </Box>
    </>
  )
}