import { 
  Flex,
} from '@chakra-ui/react';
import { Block } from './Block';

export interface BlocksListProps {
  blockSlug?: string;
}

export function BlocksList({
  blockSlug
}: BlocksListProps) {
  return (
    <>
      <Flex
        w="100%"
        flexDirection="column"
        gap="4"
        maxH="600px"
        overflowY="auto"
        position="relative"
      >
        <Block isActive={blockSlug === 'introducao-html5'}/>
        <Block isActive={blockSlug === 'introducao-html1'}/>
      </Flex>
    </>
  )
}