import { 
  Box,
  Flex,
} from '@chakra-ui/react';
import { Lesson } from './Lesson';

export function LessonListFromBlock() {
  return (
    <>
      <Box
        py="4"
        px="6"
        display="flex"
        flexDirection="column"
        gap="4"
      >
        <Lesson isCurrentLesson/>
        <Lesson />
        <Lesson />
        <Lesson />
      </Box>
    </>
  )
}