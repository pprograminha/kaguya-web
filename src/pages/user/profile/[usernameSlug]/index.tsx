import Head from 'next/head';

import { Header } from '@/components/Header';

import { useAuth } from '@/hooks/useAuth';
import { Avatar, Box, Editable, EditableInput, EditablePreview, Flex, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { kaguyaApi } from '@/services/kaguya/apiClient';
import { useRouter } from 'next/router';
import Lordicon from '@/components/ReactLordicon';

type Role = {
  id: string,
  name: string,
  permission: number,
  created_at: Date,
  updated_at: Date
}

type UserRole = {
  id: string,
  user_id: string,
  role_id: string,
  created_at: Date,
  updated_at: Date
  role: Role
}

type User = {
  id: string,
	name: string,
	email: string,
	avatar: string,
	username: string,
	enabled: boolean,
  created_at: Date,
  updated_at: Date
	user_roles: UserRole[]
	avatar_url: string | null
}

export default function UserProfile() {
  const { isAuthenticated } = useAuth();
  const router = useRouter()
  const { usernameSlug } = router.query;

  const user = useQuery<User | undefined>(['userProfile', usernameSlug], async () => {
    const { data: user } = await kaguyaApi.get('/profile', {
      params: {
        username: String(usernameSlug)
      }
    })

    return user
  }, {
    staleTime: 1000 * 60 * 10,
    enabled: !!usernameSlug
  })

  if(user.isLoading) {
    return <h1>Carregando...</h1>
  }

  if(!user.data) {
    return <h1>Usuário não existe</h1>
  }

  return (
    <>
      <Head>
        <title>Kaguya - Perfil</title>
      </Head>

      <Header
        headerType={isAuthenticated ? 'has-user-profile' : 'has-sign-log-buttons'}
      />
      
      <Box
        maxW={1480}
        mx="auto"
        py="16"
        px={["6", "8"]}
      >
        <Flex
          w="100%"
          py="8"
          alignItems="center"
          flexDir="column"
          borderRadius="md"
          maxW="500px"
          height="500px"
          bg="blackAlpha.700"
        >
          <Avatar size="xl" {...(user.data.avatar_url ? { src: user.data.avatar_url} : {})} />
          <Box w="100px" transform="rotateZ(45deg)">
            <Lordicon
              size="100%"
              icon="edit"
            />

          </Box>
          <Editable cursor="pointer" as="h1" defaultValue={user.data.name}>
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Editable cursor="pointer" as="h1" defaultValue={user.data.email}>
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Editable cursor="pointer" as="h1" defaultValue={user.data.username}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        
        </Flex>
      </Box>
    </>
  )
}
