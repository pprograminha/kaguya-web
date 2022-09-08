import { DividerLine } from '@/components/DividerLine';
import { Box, Text } from '@chakra-ui/react';

export function LessonDescription() {
  return (
    <>
      <Box>
        <Text
          color="gray.300"
          fontSize={["sm", "md"]}
          mb="1"
        >
          Descrição
        </Text>
        <DividerLine />
        <Text
          mt="4"
          color="gray.300"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor cum voluptatem fugit corporis explicabo. Nihil harum porro illo, aspernatur, tempora laudantium quasi qui sequi ullam, animi dolorem odio omnis rem?
        </Text>
      </Box>
    </>
  )
}