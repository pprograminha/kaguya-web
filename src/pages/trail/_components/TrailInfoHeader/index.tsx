import { 
  CircularProgress,
  Flex, 
  useBreakpointValue,
  useToken
} from '@chakra-ui/react';
import { TrailDescription } from '../TrailDescription';

import { AddRemoveTrailButton } from './AddRemoveTrailButton';
import { TrailTitle } from './TrailTitle';

interface TrailData {
  id: string;
  name: string;
  description: string;
  slug: string;
  
  _count: {
    lessons: number;
    playlists: number;
    users: number;
  };

  user_trail: {
    progress: number;
    enabled: boolean;
  } | null;
}

interface TrailInfoHeaderProps {
  trail: TrailData | undefined;
  isFetching?: boolean;
}

export function TrailInfoHeader({
  trail,
  isFetching
}: TrailInfoHeaderProps) {
  const [blackAlpha900, blackAlpha700, pink800] = useToken("colors", ['blackAlpha.900', 'blackAlpha.700', 'pink.800'])
  const isMdVersion = useBreakpointValue({ 
    base: false,
    "md": true
  });

  return (
    <>
      <Flex
        borderRadius="md"
        flexDirection="column"
        alignItems="flex-start"
        bg={`linear-gradient(90deg, 
          ${blackAlpha900} 0%, 
          ${blackAlpha700} 32%, 
          ${pink800} 300%
        )`}
        pt={["4", "6", "8"]}
        px={["4", "6", "8"]}
        pb={["10", "16"]}
        mt="12"
        mx={["4"]}
        position="relative"
      >
        {isFetching && (
          <CircularProgress
            isIndeterminate
            color='pink.800'
            size={6}
            position="absolute"
            top="4"
          />
        )}
        <Flex
          flexDirection="column"
          alignItems="center"
        >
          <Flex
            w="100%"
            flexDirection="column"
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mt="8"
            >
              <TrailTitle
                trailName={trail?.name || ''}
              />
              <AddRemoveTrailButton 
                isMdVersion={isMdVersion}
                trail={trail}
              />
            </Flex>
            <TrailDescription
              description={trail?.description || ''}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}