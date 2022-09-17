import { 
  Flex, 
  Text,
  AccordionButton,
  AccordionIcon,
  CircularProgressLabel,
  CircularProgress
} from '@chakra-ui/react';

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

  lessons: Lesson[];
}

export interface BlockProps {
  block?: Block
}

export function BlockInfo({
  block
}: BlockProps) {
  const lessonsCount = block?.lessons.length;
  const lessonsCountText = lessonsCount === 1 ? `${lessonsCount} aulas` : `${lessonsCount} aulas`;

  return (
    <>
      <AccordionButton
        bg="blackAlpha.800"
        p="6"
        borderRadius="md"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        
        _hover={{
          bg:"normal"
        }}
      >
        <Flex
          gap="4"
          alignItems="center"
        >
          {block?.user_block && (
            <CircularProgress
              value={block.user_block?.progress}
              thickness="8"
              color="pink.500"
              trackColor="blackAlpha.600"
              size="16"
            >
              <CircularProgressLabel fontSize={["sm"]}>{block.user_block?.progress}%</CircularProgressLabel>
            </CircularProgress>
          )}

          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap="1"
          >
            <Text
              fontWeight="bold"
              fontSize={["sm", "md", "lg"]}
            >
              {block?.name}
            </Text>
            <Text
              color="gray.300"
              fontSize={["sm"]}
              fontWeight="normal"
            >
              {lessonsCountText}
            </Text>
          </Flex>
        </Flex>
        
        <AccordionIcon fontSize="3xl"/>
      </AccordionButton>
    </>
  )
}