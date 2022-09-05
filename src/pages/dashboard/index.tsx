import { Box, Flex, HStack, keyframes, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';

import { LastLessonViewed } from './_components/LastLessonViewed';
import { MyTrails } from './_components/MyTrails';
import { OthersTrails } from './_components/OthersTrails';
import { Welcome } from './_components/Welcome';

import { Header } from '../../components/Header';

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

export default function Dashboard() {
  const isWideVersion = useBreakpointValue({ 
    base: false,
    "2xl": true
  });

  return (
    <>
      <Head>
        <title>Kaguya | Dashboard</title>
      </Head>

      <HStack flexDirection="column">
        <Header
          headerType={{
            hasUserProfile: true
          }}
        />

        <Box
          maxW={1480}
          w="100%"
          ml="0 !important"

          display="flex"
          flexDirection={!isWideVersion ? "column" : "row"}
          px={["0", "2", "8"]}
        >
          <Box
            w="100%"
            maxW={[480, 860]}
          >
            <Flex
              animation={`${animate} 0.5s ease`}
              as="section"
              flexDirection="column"
              alignItems="flex-start"

              mt="8"
              py={["8"]}
              px={["4", "6", "8"]}
              w="100%"
            >
              <Welcome />
              
              <LastLessonViewed />
            </Flex>
            
            <MyTrails />
          </Box>

          <OthersTrails />
        </Box>
      </HStack>
    </>
  )
}