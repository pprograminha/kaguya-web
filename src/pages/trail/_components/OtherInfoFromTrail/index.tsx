import { Box } from '@chakra-ui/react';
import { DiscordComunityInfo } from '../DiscordComunityInfo';
import { DividerLine } from '../../../../components/DividerLine';
import { OtherInfoFromTrailHeader } from './Header';
import { TrailStudentsCount } from './TrailStudensCount';

export function OtherInfoFromTrail() {
  return (
    <>
      <Box
        bg="blackAlpha.800"
        p={["6", "8"]}
        mt={["0", "8"]}
        mb={["0", "0", "0", "0", "12"]}
        mx={["4", "6", "0"]}
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