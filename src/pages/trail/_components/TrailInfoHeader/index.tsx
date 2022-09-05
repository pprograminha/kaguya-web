import { 
  Flex, 
  useBreakpointValue
} from '@chakra-ui/react';
import { AddTrailAlert } from '../AddTrailAlert';
import { TrailDescription } from '../TrailDescription';

import { AddRemoveTrailButton } from './AddRemoveTrailButton';
import { TrailTitle } from './TrailTitle';

export function TrailInfoHeader() {
  const isMdVersion = useBreakpointValue({ 
    base: false,
    "md": true
  });

  const isSmVersion = useBreakpointValue({ 
    base: false,
    "sm": true
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
        <AddTrailAlert isSmVersion={isSmVersion}/>


        <Flex
          flexDirection="column"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mt="8"
          >
            <TrailTitle
              trailName='HTML'
            />
            <AddRemoveTrailButton 
              isMdVersion={isMdVersion}
              trailActived={false}
            />
          </Flex>
          <TrailDescription
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem atque quis doloremque earum odio eum nulla? Sit, error molestias aliquid pariatur soluta provident dolores repudiandae est dignissimos quo cupiditate."
          />
        </Flex>
      </Flex>
    </>
  );
}