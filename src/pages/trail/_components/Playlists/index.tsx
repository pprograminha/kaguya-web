import { 
  Box, 
  CircularProgress, 
  Flex, 
  Heading,
 } from '@chakra-ui/react';
import { PlaylistItem } from './PlaylistItem';
import { PlaylistsNoContent } from './PlaylistsNoContent';

interface Playlist {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar_url: null;
  
  created_at: string;
  updated_at: string;
  
  user_playlist: {
    progress: number;
  } | null;

  trail_id: string;
}

interface TrailData {
  slug: string;
}

export interface PlaylistsContainerProps {
  is2xlVersion?: boolean;
  playlists?: Playlist[];
  isFetching?: boolean;
  trail?: TrailData;
}

export function PLaylistsContainer({
  is2xlVersion,
  playlists,
  trail,
  isFetching
}: PlaylistsContainerProps) {
  return (
    <>
      <Box
        maxWidth={900}
        p={!is2xlVersion ? "4" : "8"}
        pr="4"
        pl="0"
        w="100%"
      >
        <Heading
          fontSize={["lg", "2xl"]}
          gap="2"
          display="flex"
          alignItems="center"
        >
          Playlists
          {isFetching && (
            <CircularProgress
              isIndeterminate
              color='pink.800'
              size={8}
            />
          )}
        </Heading>
        {!playlists?.length ? (
          <PlaylistsNoContent />
        ) : (
          <Flex
            mt="12"
            flexDirection="column"
            gap="8"
          >
            {playlists && playlists.map((playlist, index) => (
              <PlaylistItem
                key={playlist.id}
                playlist={playlist}
                index={index}
                trail={trail}
              />
            ))}
          </Flex>
        )}
      </Box>
    </>
  );
}