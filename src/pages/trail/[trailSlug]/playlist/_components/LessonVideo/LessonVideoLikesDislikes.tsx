import { Button } from '@/components/Button';
import { Flex, Text } from '@chakra-ui/react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

type LessonVideoLikesDislikesProps = {
  likes: number
  dislikes: number
}

export function LessonVideoLikesDislikes({
  dislikes,
  likes
}: LessonVideoLikesDislikesProps) {
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
          <Text>{likes}</Text>
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
          <Text>{dislikes}</Text>
        </Button>
      </Flex>
    </>
  )
}