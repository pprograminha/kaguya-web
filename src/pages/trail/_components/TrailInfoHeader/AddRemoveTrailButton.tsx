import {
  Box,
  Button as ChakraButton, 
  ChakraProps, 
  useDisclosure, 
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import Lordicon from '@/components/ReactLordicon';
import { Tooltip } from '@/components/Tooltip';

import { ConfirmRemoveTrailModal } from './ConfirmRemoveTrailModal';

import { apiError } from '@/utils/apiFormatError';

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { queryClient } from '@/services/reactQueryClient';
import { PlaylistData } from '../Playlists';

interface TrailData {
  id: string;
  name: string;
  slug: string;

  _count: {
    lessons: number;
    playlists: number;
    users: number;
  };

  user_trail: {
    progress: number;
    enabled: boolean;
  } | null;
}

export interface AddRemoveTrailButtonProps {
  isMdVersion?: boolean;
  trail: TrailData | undefined;
}

export function AddRemoveTrailButton({
  isMdVersion,
  trail
}: AddRemoveTrailButtonProps) {
  const propsEquals: ChakraProps = !isMdVersion ? {
    position: 'absolute',
    top: "-5",
    right: "0",
  } : {};

  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const confirmRemoveTrailModal = useDisclosure();

  async function addUserTrail() {
    setLoading(true);

    try {
      await kaguyaApi.post('/user-trails', {
        trail_id: trail?.id
      });

      queryClient.setQueryData<TrailData | undefined>(['uniqueTrail', trail?.slug], (data) => {
        if(data) {
          return {
            ...data,
            user_trail: {
              progress: data?.user_trail?.progress as number,
              enabled: true,
            },
            _count: {
              ...data._count,
              users: data._count.users + 1,
            },
          }
        }
      });

      queryClient.setQueryData<PlaylistData[] | undefined>(['playlistsFromTrail', trail?.slug], (data) => {
        if(data) {
          return data.map(playlist => {
            return {
              ...playlist,
            }
          })
        }
      });

      toast({
        title: 'Trilha adicionada',
        description: `Você adicionou a trilha de ${trail?.name} na sua conta.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error: any) {
      const errors = apiError(error);

      errors.messages.forEach(messageError => {
        toast({
          title: 'Erro na adição da trilha na conta',
          description: messageError,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      })
    }

    setLoading(false);
  }

  async function handleRemoveUserTrail() {
    confirmRemoveTrailModal.onOpen();    
  }

  if(trail?.user_trail) {
    return (
      <>
        <ChakraButton
          bg="#a90f6478"
          color="white"
          transition="all 0.2s"
          fontWeight="normal"
          fontSize={["xs", "sm", "md"]}
          px="6"
          gap="2"
          _hover={{
            bg:"normal",
            filter: "brightness(120%)"
          }}
          disabled={loading}
          onClick={handleRemoveUserTrail}
          {...propsEquals}
        >
          <Lordicon 
            trigger='hover'
            icon='trash'
            size={20}
          />
          {isMdVersion && 'Remover trilha'}
        </ChakraButton>

        <ConfirmRemoveTrailModal 
          modal={confirmRemoveTrailModal} 
          trail={trail}
          setLoading={setLoading}
        />
      </>
    )
  }

  return (
    <>
      <ChakraButton
        bg="#a90f6478"
        color="white"
        transition="all 0.2s"
        fontWeight="normal"
        position="relative"
        fontSize={["xs", "sm", "md"]}
        px="6"
        gap="2"
        _hover={{
          bg:"normal",
          filter: "brightness(120%)"
        }}
        disabled={loading}
        onClick={addUserTrail}
        {...propsEquals}
      >
        <Lordicon icon="addCard" size={20}/>
        {isMdVersion && 'Adicionar trilha'}
        <Box
          mb="10"
          mr="-8"
          p="1"
          bg="pink.800"
          borderRadius="full"
          borderColor="pink.800"
        >
          <Tooltip
            placement="right-start"
            hasArrow
            label="Adicione esta trilha antes de acessar as playlists"
          >
            <Lordicon
              icon="error"
              size={50}
              delay={1000}
              trigger='loop'  
              colors={{
                primary: 'white',
                secondary: 'white',
              }}
            />
          </Tooltip>
        </Box>
      </ChakraButton>
    </>
  )
}