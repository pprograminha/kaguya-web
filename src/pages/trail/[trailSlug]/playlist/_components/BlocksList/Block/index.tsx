import { AccordionItem } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { LessonListFromBlock } from '../LessonsListFromBlock';
import { BlockInfo } from './BlockInfo';

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

export interface BlockProps {
  block: Block;
}

export function Block({
  block,
}: BlockProps) {
  const router = useRouter();
  const query = router.query;

  const [
    playlistSlug, 

    blockText, 
    blockSlug, 

    lessonText, 
    lessonSlug
  ] = query?.slug || [] as string[];

  return (
    <>
      <AccordionItem border="none">
        <BlockInfo block={block} />
        <LessonListFromBlock
          block={block}
          lessons={block.lessons}
          currentLessonSlug={lessonSlug}
        />
      </AccordionItem>
    </>
  )
}