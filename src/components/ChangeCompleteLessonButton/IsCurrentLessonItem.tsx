import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { apiError } from '@/utils/apiFormatError';

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { queryClient } from '@/services/reactQueryClient';

interface Lesson {
  id: string;
  name: string;
}

export interface IsCurrentLessonItemProps {
  isCompleted?: boolean;
  // setCompletedLesson: (fn: () => boolean | boolean) => void;
  lesson: Lesson;
}

export function IsCurrentLessonItem({
  isCompleted = false,
  lesson,
  // setCompletedLesson,
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

      // setCompletedLesson(completed);

      await queryClient.invalidateQueries(['blocksFromPlaylist', playlistSlug]);

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