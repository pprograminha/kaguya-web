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

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { apiError } from '@/utils/apiFormatError';
import { queryClient } from '@/services/reactQueryClient';

interface UserTrail {
  id: string;
  name: string;
}

interface ConfirmRemoveTrailModalProps {
  trail: UserTrail;
  modal: {
    isOpen: boolean;
    onClose: () => void;
  }
}

export function ConfirmRemoveTrailModal({
  trail,
  modal
}: ConfirmRemoveTrailModalProps) {
  const toast = useToast();
  
  async function removeUserTrail() {
    try {
      await kaguyaApi.delete('/user-trails', {
        params: {
          trail_id: trail.id
        }
      });

      await queryClient.invalidateQueries('userTrails');

      toast({
        title: 'Trilha removida',
        description: `Você removeu a trilha de ${trail.name} de sua conta.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      const errors = apiError(error);

      errors.messages.forEach(messageError => {
        toast({
          title: 'Erro na remoção de trilha',
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
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.onClose} isCentered>
        <ModalOverlay
          bg="blackAlpha.700"
          opacity="0.6 !important"
        />
        <ModalContent
          bg="blackAlpha.700"
          alignItems="flex-start"
          pt="4"
          pb="4"
        >
          <ModalHeader>Remoção de trilha</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              A remoção desta trilha é totalmente reversível e a qualquer momento você poderá reativar e continuar estudando.
            </Text>
            <br/>
            <Text>
              Você tem certeza que quer remover a trilha de 
              <Text
                color="pink.500"
                display="inline"
                fontWeight="bold"
              > {trail.name} </Text> 
              da sua conta?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='pink' mr={3} onClick={modal.onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme='ghost'
              onClick={removeUserTrail}
            >
              Sim, quero remover
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}