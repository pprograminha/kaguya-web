import { ChakraProps, Flex, Text, useToast, useToken } from '@chakra-ui/react';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import { Button } from '@/components/Button';

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { queryClient } from '@/services/reactQueryClient';

import { apiError } from '@/utils/apiFormatError';
import { changeLikeDislikeState, LikeDislikeState } from '@/utils/changeLikeDislikeState';

interface Lesson {
  id: string;
  slug: string;
  state: 'none' | 'liked' | 'disliked';

  _count: {
		dislikes: number;
		likes: number;
		views: number;
	},
}

type LessonVideoLikesDislikesProps = {
  lesson?: Lesson;
}

export function LessonVideoLikesDislikes({
  lesson,
}: LessonVideoLikesDislikesProps) {
  const toast = useToast();
  const [pink500]= useToken("colors", ['pink.500'])

  const commonButtonStyle: ChakraProps = {
    bg:"none",
    _hover:{
      bg: "none",
    },
    fontSize: ["md"],
    fontWeight:"normal",
    py: ["0"],
    _active: {
      bg: 'blackAlpha.600',
    }
  };

  async function changeLikeDislikeStateLesson(state: 'none' | 'like' | 'dislike') {
    const states: Record<string, LikeDislikeState> = {
      like: 'liked',
      dislike: 'disliked',
      none: 'none'
    };

    try {
      queryClient.setQueryData<Lesson | undefined>(['showLesson', lesson?.slug], (data) => {
        if(data) {
          const newCountValues = changeLikeDislikeState({
            prevState: data.state,
            nextState: states[state],
            dislikes: data._count.dislikes,
            likes: data._count.likes,
          });
      
          return {
            ...data,
            state: states[state],
            _count: {
              ...data._count,
              ...newCountValues,
            }
          }
        }
      });

      await kaguyaApi.post('/likes', {
        lesson_id: lesson?.id,
        state
      });
    } catch (error: any) {
      const errors = apiError(error);

      errors.messages.forEach(messageError => {
        toast({
          title: 'Erro ao reagir à aula',
          description: messageError,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      });
    }
  }

  return (
    <>
      <Flex>
        {lesson?.state === 'liked' ? (
          <Button
            {...commonButtonStyle}

            onClick={() => changeLikeDislikeStateLesson('none')}
          >
            <AiFillLike size={20} color={pink500} />
            <Text>{lesson?._count.likes}</Text>
          </Button>
        ) : (
          <Button
            {...commonButtonStyle}

            onClick={() => changeLikeDislikeStateLesson('like')}
          >
            <AiOutlineLike size={20}/>
            <Text>{lesson?._count.likes}</Text>
          </Button>
        )}

        {lesson?.state === 'disliked' ? (
          <Button
            {...commonButtonStyle}

            onClick={() => changeLikeDislikeStateLesson('none')}
          >
            <AiFillDislike size={20} color={pink500} />
            <Text>{lesson?._count.dislikes}</Text>
          </Button>
        ) : (
          <Button
            {...commonButtonStyle}

            onClick={() => changeLikeDislikeStateLesson('dislike')}
          >
            <AiOutlineDislike size={20}/>
            <Text>{lesson?._count.dislikes}</Text>
          </Button>
        )}
      </Flex>
    </>
  )
}
