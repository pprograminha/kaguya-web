import { useRouter } from 'next/router';
import Head from 'next/head';
import { 
  Flex, 
  useToast, 
} from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { Header } from '@/components/Header';
import { BreadCrumbContainer } from '@/components/BreadCrumb/Container';

import { LessonVideo } from './_components/LessonVideo';
import { LessonInfo } from './_components/LessonInfo';
import { BlocksList } from './_components/BlocksList';
import { kaguyaApi } from '@/services/kaguya/apiClient';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '@/utils/withSSRAuth';

interface TrailData {
  id: string;
  name: string;
  slug: string;
  user_trail: {
    progress: number;
    enabled: boolean;
  } | null;
}

interface Lesson {
  id: string;
  name: string;
  slug: string;

  completed: boolean;
  block_id: string;
}

interface Block {
  id: string;
  name: string;
  slug: string;

  user_block: {
    progress: number;
  } | null;

  lessons: Lesson[]
}

export default function PlaylistPage() {

  const toast = useToast();

  const router = useRouter();
  const query = router.query;

  const trailSlug = query?.trailSlug;
  const [
    playlistSlug, 

    blockText, 
    blockSlug, 

    lessonText, 
    lessonSlug
  ] = query?.slug || [] as string[];

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

  const playlist = useQuery<TrailData | undefined>(['uniquePlaylist', playlistSlug], async () => {
    const response = await kaguyaApi.get<TrailData>('/playlists/show', {
      params: {
        playlist_slug: playlistSlug,
        trail_slug: trailSlug
      }
    });

    return response.data;
  }, {
    staleTime: 1000 * 60 * 10, // 60 minutes
    enabled: !!trailSlug && !!playlistSlug,
  });
  
  const blocks = useQuery<Block[] | undefined>(['blocksFromPlaylist', playlistSlug], async () => {
    const response = await kaguyaApi.get<Block[]>('/blocks/playlist-list-all', {
      params: {
        playlist_slug: playlistSlug,
        trail_slug: trailSlug,
      }
    });

    return response.data;
  }, {
    staleTime: 1000 * 60 * 10, // 60 minutes
    enabled: !!playlistSlug && !!trailSlug
  });

  return (
    <>
      <Head>
        <title>Kaguya - Playlist Introdução ao HTML 5</title>
      </Head>

      <Flex
        flexDirection="column"
      >
        <Header headerType={'has-user-profile'}/>

        <Flex
          flexDirection="column"
          maxWidth={1480}
          w="100%"
          
          mt="16"
          mx={["0", "auto"]}
        >
          <BreadCrumbContainer 
            items={[
              {link: '/dashboard', title: 'Dashboard'},
              {link: `/trail/${trail.data?.slug}`, title: trail.data?.name},
            ]}
            currentItem={{ link: `/trail/${trailSlug}/playlist/${playlistSlug}`, title: playlist.data?.name}}
          />

          <Flex
            gap="8"
            mt="8"
          >
            <Flex
              flexDirection="column"
              maxWidth={880}
              w="100%"
            >
              <LessonVideo />
              <LessonInfo />
            </Flex>
            <BlocksList blocks={blocks.data || []} />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})