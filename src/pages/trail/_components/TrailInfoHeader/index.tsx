import { 
  Flex, 
  useBreakpointValue
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
  const isMdVersion = useBreakpointValue({ 
    base: false,
    "md": true
  });

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        bg="linear-gradient(90deg, 
          #0d0e12 0%, 
          #181a2159 32%, 
          #a90f64 300%
        )"
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