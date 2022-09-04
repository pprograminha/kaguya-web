import { Box, Grid, Heading, keyframes } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MyTrailsNoContent } from './MyTrailsNoContent';
// import { MyTrailsNoContent } from './MyTrailsNoContent';
import { Trail } from './Trail';

const animate = keyframes`
  from {  
    opacity: 0;
    transform: translateX(-100px);
  }
  to {  
    opacity: 1;
    transform: translateX(0);
  }
`

export function MyTrails() {
  return (
    <>
      <Box
        as="section"
        p={["4", "6", "8"]}
        animation={`${animate} 0.8s ease-out`}
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
          overflowY="auto"
          maxH={400}
        >
          <Trail />
        </Grid>
      </Box>
    </>
  );
}