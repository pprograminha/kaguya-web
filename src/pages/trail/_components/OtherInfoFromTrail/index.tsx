import { Box, useBreakpointValue } from '@chakra-ui/react';
import { DiscordComunityInfo } from '../DiscordComunityInfo';
import { DividerLine } from '../../../../components/DividerLine';
import { OtherInfoFromTrailHeader } from './Header';
import { TrailStudentsCount } from './TrailStudensCount';

interface TrailData {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar_url: string;
  
  created_at: string;
  updated_at: string;

  _count: {
    playlists: number;
    users: number;
    lessons: number;
  };

  user_trail: {
    progress: number;
    enabled: boolean;
  } | null;
}

export interface OtherTrailInfoProps {
  trail?: TrailData;
}

export function OtherInfoFromTrail({
  trail
}: OtherTrailInfoProps) {
  const isWideVersion = useBreakpointValue({ 
    base: false,
    "lg": true
  });

  return (
    <>
      <Box
        bg="blackAlpha.800"
        p={["4", "6", "8"]}
        borderRadius="md"
        mt={["0", "8"]}
        mb={isWideVersion ? "12": "0"}
        maxW="max"
        h="max"
      >
        <OtherInfoFromTrailHeader trail={trail} />
        <TrailStudentsCount trail={trail} />

        <DividerLine />
        
        <DiscordComunityInfo />
      </Box>
    </>
  )
}