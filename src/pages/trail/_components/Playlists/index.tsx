import { 
  Box, 
  Flex, 
  Heading,
 } from '@chakra-ui/react';
import { PlaylistItem } from './PlaylistItem';

export function PLaylistsContainer() {
  return (
    <>
      <Box
        maxWidth={890}
        p={["0", "0", "0", "0", "6", "8"]}
        w="100%"
      >
        <Heading
          fontSize={["lg", "2xl"]}
        >
          Playlists
        </Heading>
        <Flex
          mt="12"
          flexDirection="column"
          gap="8"
        >
          <PlaylistItem />
        </Flex>
      </Box>
    </>
  );
}