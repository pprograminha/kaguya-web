import NextLink from 'next/link';
import { 
  Button, 
  Flex, 
  Text,
  Link as ChakraLink
} from '@chakra-ui/react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export interface BlockProps {
  isCurrentBlock?: boolean;
}

export function BlockInfo({
  isCurrentBlock
}: BlockProps) {
  return (
    <>
      <NextLink href={`/trail/html/playlist/introducao-html5`}>
        <ChakraLink
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
            flexDirection="column"
            alignItems="flex-start"
            gap="1"
          >
            <Text
              fontWeight="bold"
              fontSize={["sm", "md", "lg"]}
            >
              Conceitos
            </Text>
            <Text
              color="gray.300"
              fontSize={["sm"]}
              fontWeight="normal"
            >
              2 aulas
            </Text>
          </Flex>
          {isCurrentBlock ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
        </ChakraLink>
      </NextLink>
    </>
  )
}