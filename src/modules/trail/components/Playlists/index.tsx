import { Box, CircularProgress, Flex, Heading } from "@chakra-ui/react";

import { PlaylistItem } from "./PlaylistItem";
import { PlaylistsNoContent } from "./PlaylistsNoContent";
import { kaguyaApi } from "@/services/kaguya/apiClient";
import { useQuery } from "react-query";

export interface PlaylistData {
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
  id: string;
  name: string;
  slug: string;
  avatar_url: string;

  user_trail: {
    progress: number;
    enabled: boolean;
  };
}

export interface PlaylistsContainerProps {
  is2xlVersion?: boolean;
  trail?: TrailData;
}

export function PlaylistsContainer({
  is2xlVersion,
  trail,
}: PlaylistsContainerProps) {
  const playlists = useQuery<PlaylistData[] | undefined>(
    ["playlistsFromTrail", trail?.slug],
    async () => {
      const response = await kaguyaApi.get<PlaylistData[]>(
        "/playlists/trail-list-all",
        {
          params: {
            trail_id: trail?.id,
          },
        }
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60 * 10, // 60 minutes
      enabled: !!trail,
    }
  );

  return (
    <>
      <Box maxWidth={900} p={!is2xlVersion ? "4" : "8"} pr="4" pl="0" w="100%">
        <Heading
          fontSize={["lg", "2xl"]}
          gap="2"
          display="flex"
          alignItems="center"
        >
          Playlists
          {playlists.isFetching && (
            <CircularProgress isIndeterminate color="pink.800" size={8} />
          )}
        </Heading>
        {!playlists.data?.length ? (
          <PlaylistsNoContent />
        ) : (
          <Flex mt="12" flexDirection="column" gap="8">
            {playlists.data &&
              playlists.data.map((playlist, index) => (
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
