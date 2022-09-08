import { Box, ChakraProps, Flex } from '@chakra-ui/react';
import { BlockInfo } from './BlockInfo';
import { LessonListFromBlock } from '../LessonsListFromBlock';

export interface BlockProps {
  isActive?: boolean;
}

const hiddenLessonsListStyle: ChakraProps = {
  overflow: 'hidden',
  height: '0'
};

const showLessonsListStyle: ChakraProps = {
  overflow: 'visible',
  height: 'auto'
};

export function Block({
  isActive = false
}: BlockProps) {
  const containerLessonsListStyle = isActive ? showLessonsListStyle : hiddenLessonsListStyle;

  return (
    <>
      <Flex
        flexDirection="column"
        w="100%"
      >
        <BlockInfo isCurrentBlock={isActive} />
        <Box {...containerLessonsListStyle} >
          <LessonListFromBlock />
        </Box>
      </Flex>
    </>
  )
}