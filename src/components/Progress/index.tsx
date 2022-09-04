import { Box } from '@chakra-ui/react';
import { CurrentProgress } from './CurrentProgress';
import { FinalProgressIcon } from './FinalProgressIcon';

type ProgressProps = {
  percent: number;
};

export function Progress({
  percent
}: ProgressProps) {
  return (
    <Box 
      mt="7"
      bg="blackAlpha.800"
      pos="relative"
      borderRadius="full"
      h='2'
      w="full"
    >
      <CurrentProgress percentage={percent} />

      <FinalProgressIcon percentage={percent} />
    </Box>
  );
}
