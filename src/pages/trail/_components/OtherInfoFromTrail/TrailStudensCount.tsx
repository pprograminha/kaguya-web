import { Box, Text } from '@chakra-ui/react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export function TrailStudentsCount() {
  return (
    <>
      <Box
        mt="8"
        mb="6"
      >
        <Text
          display="flex"
          alignItems="center"
          gap="2"
          color="gray.300"
          fontSize={["sm", "md"]}
        >
          <HiOutlineArrowNarrowRight /> 
          Contém 1 playlist e 2 aulas no total.
        </Text>
        <Text
          display="flex"
          alignItems="center"
          gap="2"
          color="gray.300"
          fontSize={["sm", "md"]}
        >
          <HiOutlineArrowNarrowRight /> 
          Atualmente 1 aluno faz esta trilha
        </Text>
      </Box>
    </>
  )
}