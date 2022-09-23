import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { apiError } from '@/utils/apiFormatError';

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { queryClient } from '@/services/reactQueryClient';

export interface BlockData {
  id: string;
  name: string;
  slug: string;
  user_block: {
    progress: number;
  } | null;

  lessons: Lesson[]
}

interface Lesson {
  id: string;
  name: string;
  completed: boolean;
  block_id: string;
}

export interface IsCurrentLessonItemProps {
  isCompleted?: boolean;
  lesson: Lesson;
}

export function IsCurrentLessonItem({
  isCompleted = false,
  lesson,
}: IsCurrentLessonItemProps) {
  const toast = useToast();

  const router = useRouter();
  const query = router.query;

  const [ playlistSlug ] = query?.slug || [] as string[];

  async function changeCompletedLesson() {
    try {
      const response = await kaguyaApi.post('/lessons/change-complete-lesson', {
        lesson_id: lesson.id,
      });

      const completed = response.data.completed;

      queryClient.setQueryData<BlockData[] | undefined>(['blocksFromPlaylist', playlistSlug], (data) => {
        if(data) {
          return data.map(block => {
            if(block.id === lesson.block_id) {
              const blockUpdated = {
                ...block,
                lessons: block.lessons.map(prevLesson => {
                  if(prevLesson.id === lesson.id) {
                    return {
                      ...prevLesson,
                      completed,
                    }
                  }

                  return prevLesson;
                })
              };

              const userLessonsCompleted = blockUpdated.lessons.filter(
                user_lesson => user_lesson.completed,
              );
        
              const userBlockProgressPercentage = (userLessonsCompleted.length / blockUpdated.lessons.length) * 100
        
              return {
                ...blockUpdated,
                user_block: {
                  progress: Number(userBlockProgressPercentage.toFixed(0))
                },
              }
            }

            return block;
          })
        }
      });

      if(completed) {
        toast({
          title: 'Aula concluída',
          description: `Você concluiu a aula ${lesson.name}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch (error: any) {
      const errors = apiError(error);

      errors.messages.forEach(messageError => {
        toast({
          title: 'Erro ao mudar progresso da aula',
          description: messageError,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      })
    }
  }

  return (
    <Box
      as="button"
      position="relative"
      cursor="pointer"
      borderRadius="50%"
      zIndex="2"
      width="10px"
      height="10px"

      onClick={changeCompletedLesson}

      _before={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: "translate(-50%, -50%)",
        zIndex: '2',

        width: "6",
        height: "6",
        borderRadius: "50%",
        border: "2px solid",
        borderColor: 'pink.500',
        background: "blackAlpha.800",
      }}

      _after={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: "translate(-50%, -50%)",
        zIndex: '2',

        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: isCompleted ? 'pink.500' : 'white',
      }}
    />
  )
}