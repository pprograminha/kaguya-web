import { 
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
}

interface TrailInfoHeaderProps {
  trail?: TrailData;
}

export function TrailInfoHeader({
  trail
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
        alignItems="center"
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
              trailActived={false}
            />
          </Flex>
          <TrailDescription
            description={trail?.description || ''}
          />
        </Flex>
      </Flex>
    </>
  );
}