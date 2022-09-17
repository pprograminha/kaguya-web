import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Head from 'next/head';

import { 
  CircularProgress,
  Flex, useBreakpointValue, useToast, 
} from '@chakra-ui/react';

import { TrailInfoHeader } from '../_components/TrailInfoHeader';
import { Quotes } from '../_components/Quotes';
import { PLaylistsContainer } from '../_components/Playlists';
import { OtherInfoFromTrail } from '../_components/OtherInfoFromTrail';

import { DividerLine } from '@/components/DividerLine';
import { Header } from '@/components/Header';
import { BreadCrumbContainer } from '@/components/BreadCrumb/Container';
import { AppLogo } from '@/components/AppLogo';

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { withSSRAuth } from '@/utils/withSSRAuth';

interface TrailData {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar_url: string;
  
  created_at: string;
  updated_at: string;

  _count: {
    playlists: number;
    users: number;
    lessons: number;
  };

  user_trail: {
    progress: number;
    enabled: boolean;
  } | null;
}

interface Playlist {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar_url: null;
  
  created_at: string;
  updated_at: string;
  
  user_playlist: {
    progress: number;
  } | null;

  trail_id: string;
}

export default function Trail() {
  const toast = useToast();

  const is2xlVersion = useBreakpointValue({ 
    base: false,
    "2xl": true
  });

  const router = useRouter()
  const { trailSlug } = router.query;
  
  const trail = useQuery<TrailData | undefined>(['uniqueTrail', trailSlug], async () => {
    try {
      const response = await kaguyaApi.get<TrailData>('/trails/show', {
        params: {
          slug: trailSlug,
        }
      });
  
      return response.data;
    } catch (error) {  
      toast({
        title: 'Erro na listagem da trilha',
        description: 'Possivelmente esta trilha não existe ou ocorreu um erro interno.',
        status: 'error',
        duration: 6000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }
  }, {
    staleTime: 1000 * 60 * 10, // 60 minutes
    enabled: !!trailSlug,
  });
  
  const playlists = useQuery<Playlist[] | undefined>(['playlistsFromTrail', trailSlug], async () => {
    const response = await kaguyaApi.get<Playlist[]>('/playlists/trail-list-all', {
      params: {
        trail_id: trail?.data?.id,
      }
    });

    return response.data;
  }, {
    staleTime: 1000 * 60 * 10, // 60 minutes
    enabled: !!trail.data
  });

  if(trail.isLoading || trail.isFetching) {
    return (
      <>
        <Head>
          <title>Kaguya | Carregando...</title>
        </Head>

        <Flex
          h="100vh"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <AppLogo 
            lordiconSize={["20", "24"]}
            fontSize={["3xl", "4xl"]}
          />
          <CircularProgress
            isIndeterminate
            color='pink.800'
            size={8}
            opacity="0.6"
            mt="4"
          />
        </Flex>
      </>
    )
  }

  if(!trail.isLoading && !trail.isFetching && !trail.data) {
    router.push('/dashboard');
    return;
  }

  return (
    <>
      <Head>
        <title>Kaguya | {trail?.data?.name}</title>
      </Head>

      <Flex
        flexDirection="column"
      >
        <Header headerType={'has-user-profile'}/>

        <Flex
          maxW={1480}
          w="100%"

          flexDirection={"column"}

          mt="16"
          mx={["0", "auto"]}
        >
          <BreadCrumbContainer 
            currentItem={{
              link: `/trail/${trail?.data?.slug}`,
              title: trail?.data?.name
            }}
            items={[
              {
                link: '/dashboard',
                title: 'Dashboard'
              }
            ]}
          />

          <TrailInfoHeader trail={trail.data}/>
          <Quotes />

          <DividerLine />

          <Flex
            mt={is2xlVersion ? "8" : "10"}
            gap="4"
            mx={"4"}
            justifyContent="space-between"
            flexDirection={is2xlVersion ? "row" : "column-reverse"}
          >
            <PLaylistsContainer
              is2xlVersion={is2xlVersion}
              playlists={playlists.data}
              trail={trail.data}
            />
            <OtherInfoFromTrail trail={trail?.data} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}



export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
    
  }
});