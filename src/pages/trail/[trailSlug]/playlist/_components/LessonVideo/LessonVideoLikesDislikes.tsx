import { Button } from '@/components/Button';
import { Flex, Text } from '@chakra-ui/react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

export function LessonVideoLikesDislikes() {
  return (
    <>
      <Flex>
        <Button
          bg="none"
          _hover={{
            bg: "none",
          }}
          fontSize={["md"]}
          fontWeight="normal"
          p="0"
        >
          <AiOutlineLike size={20}/>
          <Text>10</Text>
        </Button>
        
        <Button
          bg="none"
          _hover={{
            bg: "none"
          }}
          fontSize={["md"]}
          fontWeight="normal"
          p="0"
        >
          <AiOutlineDislike size={20}/>
          <Text>5</Text>
        </Button>
      </Flex>
    </>
  )
}