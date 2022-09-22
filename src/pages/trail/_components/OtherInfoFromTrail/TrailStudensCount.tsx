import { trailCount } from '@/utils/format/trailCount';
import { Box, Text } from '@chakra-ui/react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

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

export interface TrailStudentsCountProps {
  trail?: TrailData;
}

export function TrailStudentsCount({
  trail
}: TrailStudentsCountProps) {

  const trailCountTexts = trailCount(trail);

  return (
    <>
      <Box
        mt="8"
        mb="6"
      >
        <Text
          display="flex"
          alignItems="center"
          gap="2"
          color="gray.300"
          fontSize={["sm", "md"]}
        >
          <HiOutlineArrowNarrowRight />
          Contém {trailCountTexts.playlists} e {trailCountTexts.lessons} no total.
        </Text>
        <Text
          display="flex"
          alignItems="center"
          gap="2"
          color="gray.300"
          fontSize={["sm", "md"]}
        >
          <HiOutlineArrowNarrowRight /> 
          Atualmente {trailCountTexts.users} {trail?._count.users === 1 ? 'faz' : 'fazem'} esta trilha
        </Text>
      </Box>
    </>
  )
}