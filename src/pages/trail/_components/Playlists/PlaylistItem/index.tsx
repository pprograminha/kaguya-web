import { 
  Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { PlaylistDescription } from './Description';
import { PlaylistIndex } from './PlaylistIndex';
import { PlaylistTitle } from './Title';

export function PlaylistItem() {
  return (
    <>
      <NextLink href="#">
        <ChakraLink
          display="flex"
          flexDirection="column"
          bg='blackAlpha.500'
          p={["4", "8", "10"]}
          pb="16"
          pt="10"
          position="relative"
          transition="all 0.3s"
          border="1px solid transparent"
          borderRadius="md"
          _hover={{
            border: '1px solid',
            borderColor: 'white',
          }}
        >
          <PlaylistIndex value={1}/>
          <PlaylistTitle title="Introdução ao HTML 5"/>
          <PlaylistDescription
            description="Nesta playlist, você começará a entender os primórdios da tecnologia HTML 5. Com esta introdução, esperamos que você saia daqui com conhecimento básico em estruturas, tags e conceitos sobre a tecnologia."
          />
        </ChakraLink>
      </NextLink>
    </>
  );
}