import { Box, useBreakpointValue } from '@chakra-ui/react';
import { DiscordComunityInfo } from '../DiscordComunityInfo';
import { DividerLine } from '../../../../components/DividerLine';
import { OtherInfoFromTrailHeader } from './Header';
import { TrailStudentsCount } from './TrailStudensCount';

export function OtherInfoFromTrail() {
  const isWideVersion = useBreakpointValue({ 
    base: false,
    "lg": true
  });

  return (
    <>
      <Box
        bg="blackAlpha.800"
        p={["4", "6", "8"]}
        mt={["0", "8"]}
        mb={isWideVersion ? "12": "0"}
        maxW="max"
        h="max"
      >
        <OtherInfoFromTrailHeader />
        <TrailStudentsCount />

        <DividerLine />
        
        <DiscordComunityInfo />
      </Box>
    </>
  )
}