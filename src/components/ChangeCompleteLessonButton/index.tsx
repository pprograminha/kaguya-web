import { Box } from '@chakra-ui/react';
import { IsCurrentLessonItem } from './IsCurrentLessonItem';
import { IsNotCurrentLessonItem } from './IsNotCurrentLessonItem';
import { ChangeCompleteLessonButtonLineSeparator } from './LineSeparate';

interface Lesson {
  id: string;
  name: string;
  slug: string;
  completed: boolean;
  block_id: string;
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
        />
        <ChangeCompleteLessonButtonLineSeparator
          isShow={hasNextItem}
          isCompleted={lesson.completed}
        />
      </Box>
    </>
  )
}