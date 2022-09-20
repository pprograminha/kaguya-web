import { Box } from '@chakra-ui/react';
// import { useState } from 'react';
import { IsCurrentLessonItem } from './IsCurrentLessonItem';
import { IsNotCurrentLessonItem } from './IsNotCurrentLessonItem';
import { ChangeCompleteLessonButtonLineSeparator } from './LineSeparate';

interface Lesson {
  id: string;
  name: string;
  completed: boolean;
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
  // const [completedLesson, setCompletedLesson] = useState(isCompleted);

  if(isCurrent) {
    return (
      <>
        <Box
          position="absolute"
          height="100%"
        >
          <IsCurrentLessonItem
            isCompleted={lesson.completed}
            // setCompletedLesson={setCompletedLesson}
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