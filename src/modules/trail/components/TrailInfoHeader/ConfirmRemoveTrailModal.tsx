import { 
  Button, 
  Text,
  useToast, 

  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

import { apiError } from '@/utils/apiFormatError';

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { queryClient } from '@/services/reactQueryClient';

import { PlaylistData } from '../Playlists';
import { TrailData } from 'pages/trail/[trailSlug]';

interface UserTrail {
  id: string;
  name: string;
  slug: string;
}

interface ConfirmRemoveTrailModalProps {
  trail: UserTrail | undefined;
  modal: {
    isOpen: boolean;
    onClose: () => void;
  };
  setLoading: (fn: boolean) => void;
}

export function ConfirmRemoveTrailModal({
  trail,
  modal,
  setLoading
}: ConfirmRemoveTrailModalProps) {
  const toast = useToast();

  async function removeUserTrail() {
    try {
      setLoading(true);

      await kaguyaApi.patch('/user-trails/change-enabled', {
        trail_id: trail?.id
      });
      
      toast({
        title: 'Trilha removida',
        description: `Você removeu a trilha de ${trail?.name} de sua conta.`,
        status: 'info',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      queryClient.setQueryData<TrailData | undefined>(['uniqueTrail', trail?.slug], (data) => {
        if(data) {
          return {
            ...data,
            user_trail: null,
            _count: {
              ...data._count,
              users: data._count.users - 1,
            },
          }
        }
      });

      queryClient.setQueryData<PlaylistData[] | undefined>(['playlistsFromTrail', trail?.slug], (data) => {
        if(data) {
          return data.map(playlist => {
            return {
              ...playlist,
              user_playlist: null,
            }
          })
        }
      });

      setLoading(false);

      await queryClient.invalidateQueries('othersTrails');
      await queryClient.invalidateQueries('userTrails');
    } catch (error: any) {
      const errors = apiError(error);

      errors.messages.forEach(messageError => {
        toast({
          title: 'Erro na remoção da trilha da conta',
          description: messageError,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      });

      setLoading(false);
    }

    modal.onClose();
  }

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.onClose} isCentered>
        <ModalOverlay
          bg="blackAlpha.700"
          opacity="0.6 !important"
        />
        <ModalContent
          bg="blackAlpha.600"
          alignItems="flex-start"
          py="4"
          mx="4"
        >
          <ModalHeader fontSize={["md", "lg"]}>Remoção de trilha</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={["sm", "md"]}>
              A remoção desta trilha é totalmente reversível e a qualquer momento você poderá reativar e continuar estudando.
            </Text>
            <br/>
            <Text fontSize={["sm", "md"]}>
              Você tem certeza que quer remover a trilha de 
              <Text
                as="span"
                color="pink.500"
                display="inline"
                fontWeight="bold"
                fontSize={["sm", "md"]}
              > {trail?.name} </Text> 
              da sua conta?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='pink'
              mr={3}
              onClick={modal.onClose}
              fontSize={["sm", "md"]}
            >
              Cancelar
            </Button>
            <Button
              colorScheme='ghost'
              onClick={removeUserTrail}
              fontSize={["sm", "md"]}
            >
              Sim, quero remover
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}