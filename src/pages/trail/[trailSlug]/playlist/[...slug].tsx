import {
  Flex,
  Skeleton,
  useToast
} from '@chakra-ui/react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { BreadCrumbContainer } from '@/components/BreadCrumb/Container';
import { Header } from '@/components/Header';

import { BlocksList } from './_components/BlocksList';
import { LessonInfo } from './_components/LessonInfo';
import { LessonVideo } from './_components/LessonVideo';

import { kaguyaApi } from '@/services/kaguya/apiClient';

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
  link: string;
  description: string;
  slug: string;

  completed: boolean;
  state: 'none' | 'liked' | 'disliked';

  _count: {
		dislikes: number;
		likes: number;
		views: number;
	},
  block_id: string;
}

export default function PlaylistPage() {
  const toast = useToast();

  const router = useRouter();
  const query = router.query;

  const trailSlug = query?.trailSlug as string;
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

  const lesson = useQuery<Lesson>(['showLesson', lessonSlug], async () => {
    const response = await kaguyaApi.get<Lesson>('/lessons/show', {
      params: {
        block_slug: blockSlug,
        lesson_slug: lessonSlug,
      }
    });

    return response.data;
  }, {
    staleTime: 1000 * 60 * 10, // 60 minutes,
    enabled: !!lessonSlug && !!blockSlug
  });

  const isFetching = playlist.isFetching || trail.isFetching;
  const isLoading = playlist.isLoading || trail.isLoading || isFetching;

  if(!isLoading && !lesson) {
    router.push('/dashboard');

    return;
  }
  
  return (
    <>
      <Head>
        <title>Kaguya - {isLoading ? '...Carregando' : lesson.data?.name} </title>
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
          {isLoading ? (
            <Skeleton  
              borderRadius="md"                    
              height= "16px"
              maxW="md"
              endColor="blackAlpha.700" 
              startColor="blackAlpha.600" 
            />
          ) : (
            <BreadCrumbContainer 
              items={[
                {link: '/dashboard', title: 'Dashboard'},
                {link: `/trail/${trail.data?.slug}`, title: trail.data?.name},
              ]}
              currentItem={{ link: `/trail/${trailSlug}/playlist/${playlistSlug}`, title: playlist.data?.name}}
            />
          )}


          <Flex
            gap="8"
            mt="8"
          >
            <Flex
              flexDirection="column"
              maxWidth={880}
              w="100%"
            >
              <LessonVideo isLoadingLesson={lesson.isLoading} lesson={lesson.data} />
              <LessonInfo isLoadingLesson={lesson.isLoading} lesson={lesson.data} />
            </Flex>
            
            <BlocksList playlistSlug={playlistSlug} trailSlug={trailSlug} />
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