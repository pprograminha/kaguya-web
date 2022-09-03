import { Box, Grid, Heading } from '@chakra-ui/react';
// import { MyTrailsNoContent } from './MyTrailsNoContent';
import { Trail } from './Trail';

export function MyTrails() {
  return (
    <>
      <Box
        as="section"
        p={["8"]}
      >
        <Heading
          fontSize={["md", "lg", "2xl"]}
          mb="4"
        >
          Minhas trilhas
        </Heading>

        {/* <MyTrailsNoContent /> */}
        
        <Grid
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap="4"
        >
          <Trail />
          <Trail />
          <Trail />
        </Grid>
      </Box>
    </>
  );
}