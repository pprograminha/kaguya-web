import { Box, Flex, Grid, Heading } from '@chakra-ui/react';

// import { OthersTrailsNoContent } from './OthersTrailsNoContent';
import { Trail } from './Trail';

export function OthersTrails() {
  return (
    <>
      <Flex
        bg="linear-gradient(to right, rgb(15, 16, 20), #0F0F11)"
        flexDirection="column"
        flex="1"
        // calc(tela - tamanho do header)
        h="calc(100vh - 80px)"
        p="8"
      >
        <Heading
          fontSize={["md", "lg", "2xl"]}
          mb="4"
        >
          Outras trilhas
        </Heading>

        <Box
          bg="-webkit-gradient(linear, 0 0, 100% 0, from(rgb(24, 26, 33)), to(rgb(24, 26, 33)), color-stop(0.5, rgb(72, 74, 79)))"
          w="100%"
          h="1px"
        />
        {/* <OthersTrailsNoContent /> */}
        <Flex
          flexDirection="column"
          gap="4"
          w="100%"
          mt="8"
          overflowY="auto"
          pr="2"
          pb="8"
        >
          <Trail />
        </Flex>
      </Flex>
    </>
  );
}