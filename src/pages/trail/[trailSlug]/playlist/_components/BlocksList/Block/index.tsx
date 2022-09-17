import { AccordionItem } from '@chakra-ui/react';

import { BlockInfo } from './BlockInfo';
import { LessonListFromBlock } from '../LessonsListFromBlock';
import { useRouter } from 'next/router';

interface Lesson {
  id: string;
  name: string;
  slug: string;
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
  block
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
          lessons={block.lessons}
          currentLessonSlug={lessonSlug}
        />
      </AccordionItem>
    </>
  )
}