import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { PlaylistDescription } from "./Description";
import { PlaylistIndex } from "./PlaylistIndex";
import { PlaylistTitle } from "./Title";
import { Progress } from "../../../../../components/Progress";

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

interface PlaylistItemProps {
  playlist: Playlist;
  index: number;

  trail?: TrailData;
}

export function PlaylistItem({ playlist, index, trail }: PlaylistItemProps) {
  return (
    <>
      <NextLink
        href={`/trail/${trail?.slug}/playlist/${playlist.slug}`}
        passHref
      >
        <ChakraLink
          display="flex"
          flexDirection="column"
          bg="blackAlpha.500"
          pt="12"
          px={["4", "8"]}
          pb={playlist.user_playlist ? "8" : "12"}
          position="relative"
          transition="all 0.3s"
          border="1px solid transparent"
          borderRadius="md"
          _hover={{
            border: "1px solid",
            borderColor: "pink.500",
          }}
        >
          <PlaylistIndex value={index} />
          <PlaylistTitle title={playlist.name} />
          <PlaylistDescription description={playlist.description} />

          {trail && trail.user_trail?.enabled && (
            <>
              {playlist.user_playlist && (
                <Progress percent={playlist.user_playlist.progress} mt="12" />
              )}
            </>
          )}
        </ChakraLink>
      </NextLink>
    </>
  );
}
