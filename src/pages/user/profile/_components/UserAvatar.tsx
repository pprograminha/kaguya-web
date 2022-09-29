import { Avatar, Box, useToast, useToken } from '@chakra-ui/react';
import { MdPhotoCamera } from 'react-icons/md';

import { Input } from '@/components/Form/Input';

import { useAuth } from '@/hooks/useAuth';

import { kaguyaApi } from '@/services/kaguya/apiClient';

import { apiError } from '@/utils/apiFormatError';

export function UserAvatar() {
  const { user, setUser } = useAuth();
  
  const [blackAlpha700]= useToken("colors", [
    'blackAlpha.700'
  ]);
  const toast = useToast();

  async function handleUpdateUserAvatar(avatar: File | null | undefined) {
    try {
      const fileTypeAccepted = ['image/png', 'image/svg' ,'image/jpeg', 'image/gif'];

      if(!avatar) {
        throw new Error('Escolha uma avatar para atualiza-lo.')
      }
      
      if(!fileTypeAccepted.includes(avatar.type)) {
        throw new Error('Tipos de arquivo válido são: .png | .gif | .svg | .jpeg')
      }

      const formData = new FormData();
      formData.append('avatar', avatar);

      const response = await kaguyaApi.patch('/users/avatar', formData);

      setUser((prevState) => {
        if(prevState) {
          return {
            ...prevState,   
            avatar_url: response.data.avatar_url
          }
        }

        return prevState;
      });

      toast({
        title: 'Atualização da foto de perfil',
        description: 'Sucesso! Sua foto de perfil foi atualizada.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error: any) {
      if(error instanceof Error) {
        return toast({
          title: 'Erro na atualização do avatar',
          description: error.message,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      }

      const errors = apiError(error);

      errors.messages.forEach(messageError => {
        toast({
          title: 'Erro na atualização do avatar',
          description: messageError,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      });
    }
  };

  return (
    <>
      <Box
        as="label"
        
        cursor="pointer"
        position="relative"
        border="3px solid"
        borderColor="pink.500"
        borderRadius="50%"
        p="2"
      >
        <Input
          type="file"
          name="avatar"
          display="none"
          position="absolute"
          zIndex="10"
          w="100%"
          h="100%"
          onChange={(e) => handleUpdateUserAvatar(e.target.files?.item(0))}
        />
        <Box
          h={180}
          w={180}
        >
          <Avatar
            w="100%"
            h="100%"
            bg="blackAlpha.600"
            src={user?.avatar_url || '/assets/gifs/defaultAvatar.gif'}
          />
        </Box>
        <MdPhotoCamera
          size="40"
          style={{
            position: 'absolute',
            right: '4px',
            bottom: '4px',
            background: blackAlpha700,
            borderRadius: "50%",
            padding: '4px',
          }}
        />
      </Box>
    </>
  )
}