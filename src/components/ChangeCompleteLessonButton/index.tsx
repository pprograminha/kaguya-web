import { Box } from '@chakra-ui/react';
// import { useState } from 'react';
import { IsCurrentLessonItem } from './IsCurrentLessonItem';
import { IsNotCurrentLessonItem } from './IsNotCurrentLessonItem';
import { ChangeCompleteLessonButtonLineSeparator } from './LineSeparate';

interface Lesson {
  id: string;
  name: string;
}

export interface ChangeCompleteLessonButtonProps {
  isCurrent?: boolean;
  hasNextItem?: boolean;
  isCompleted?: boolean;
  lesson: Lesson;
}

export function ChangeCompleteLessonButton({
  isCurrent = false,
  hasNextItem = false,
  isCompleted = false,
  lesson,
}: ChangeCompleteLessonButtonProps) {
  // const [completedLesson, setCompletedLesson] = useState(isCompleted);

  if(isCurrent) {
    return (
      <>
        <Box
          position="absolute"
          height="100%"
        >
          <IsCurrentLessonItem
            isCompleted={isCompleted}
            // setCompletedLesson={setCompletedLesson}
            lesson={lesson}
          />
          <ChangeCompleteLessonButtonLineSeparator
            isShow={hasNextItem}
            isCompleted={isCompleted}
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
          isCompleted={isCompleted}
          lesson={lesson}
          // setCompletedLesson={setCompletedLesson}
        />
        <ChangeCompleteLessonButtonLineSeparator
          isShow={hasNextItem}
          isCompleted={isCompleted}
        />
      </Box>
    </>
  )
}