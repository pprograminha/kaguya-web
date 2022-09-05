import { 
  Box, 
  Flex, 
  Heading,
 } from '@chakra-ui/react';
import { PlaylistItem } from './PlaylistItem';

export interface PlaylistsContainerProps {
  is2xlVersion?: boolean;
}

export function PLaylistsContainer({
  is2xlVersion
}: PlaylistsContainerProps) {
  return (
    <>
      <Box
        maxWidth={900}
        p={!is2xlVersion ? "4" : "8"}
        pr={["4", "0"]}
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