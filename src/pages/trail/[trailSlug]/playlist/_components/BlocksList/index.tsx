import { kaguyaApi } from '@/services/kaguya/apiClient';
import { findLastIndex } from '@/utils/findLastIndex';
import { 
  Accordion,
  Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { BlocksSkeletonLoading } from '../BlocksListSkeletonLoading';

import { Block } from './Block';

interface Lesson {
  id: string;
  name: string;
  slug: string;
  completed: boolean;

  block_id: string;
}

interface BlockData {
  id: string;
  name: string;
  slug: string;

  user_block: {
    progress: number;
  } | null;
  
  lessons: Lesson[];
}

export interface BlocksListProps {
  playlistSlug: string;
  trailSlug: string;
}

export function BlocksList({
  playlistSlug,
  trailSlug
}: BlocksListProps) {
  const router = useRouter();

  const blocks = useQuery<BlockData[]>(['blocksFromPlaylist', playlistSlug], async () => {
    const response = await kaguyaApi.get<BlockData[]>('/blocks/playlist-list-all', {
      params: {
        playlist_slug: playlistSlug,
        trail_slug: trailSlug,
      }
    });

    return response.data;
  }, {
    staleTime: 1000 * 60 * 10, // 60 minutes,
    enabled: !!playlistSlug && !!trailSlug
  });

  useEffect(() => {
    function getCurrentLesson() {
      const blocksData = blocks.data
    
      if(blocksData && blocksData.length && trailSlug && playlistSlug) {
        const lessons = blocksData.map(block => block.lessons).flat();

        if(lessons) {
          const lastLessonIndex = findLastIndex(lessons, lesson => lesson.completed);
          
          const lastLesson = lessons[lastLessonIndex + 1] || lessons[lastLessonIndex];
          
          if(lastLesson) {
            const lastBlock = blocksData.find((block) => block.id === lastLesson.block_id);
            
            if(lastBlock) {
              router.push(`/trail/${trailSlug}/playlist/${playlistSlug}/block/${lastBlock.slug}/lesson/${lastLesson.slug}`);
            }
          }
        }
      }
    }
    getCurrentLesson()
  }, [blocks.isFetched]);

  if(blocks.isLoading) {
    return <BlocksSkeletonLoading />
  }

  return (
    <Flex flexDirection="column" w="100%">
      <Accordion
        defaultIndex={[0]}
        allowToggle

        w="100%"
        flexDirection="column"
        display="flex"
        gap="4"
        maxH="600px"
        overflowY="auto"
      >
        {blocks.data && blocks.data.map((block) => (
          <Block
            key={block.id}
            block={block}
          />
        ))}
      </Accordion>
    </Flex>
  )
}