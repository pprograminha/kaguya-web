import { Box, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';

import { LastLessonViewed } from '../../components/Dashboard/LastLessonViewed';
import { MyTrails } from '../../components/Dashboard/MyTrails';
import { OthersTrails } from '../../components/Dashboard/OthersTrails';
import { Welcome } from '../../components/Dashboard/Welcome';

import { Header } from '../../components/Header';

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