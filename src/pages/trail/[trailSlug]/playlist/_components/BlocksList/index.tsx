import { 
  Accordion,
  Flex,
} from '@chakra-ui/react';
import { Block } from './Block';

interface Lesson {
  id: string;
  name: string;
  slug: string;
}

interface BlockData {
  id: string;
  name: string;
  slug: string;

  user_block: {
    progress: number;
  } | null;
  
  lessons: Lesson[]
}

export interface BlocksListProps {
  blocks: BlockData[];
}

export function BlocksList({
  blocks
}: BlocksListProps) {
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
        {blocks?.length && blocks.map((block) => (
          <Block
            key={block.id}
            block={block}
          />
        ))}
      </Accordion>
    </Flex>
  )
}