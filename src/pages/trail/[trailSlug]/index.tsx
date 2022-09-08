// import { useRouter } from 'next/router';

import { 
  Flex, useBreakpointValue, 
} from '@chakra-ui/react';

import Head from 'next/head';

import { DividerLine } from '../../../components/DividerLine';
import { Header } from '../../../components/Header';
import { BreadCrumbContainer } from '../../../components/BreadCrumb/Container';
import { TrailInfoHeader } from '../_components/TrailInfoHeader';
import { Quotes } from '../_components/Quotes';
import { PLaylistsContainer } from '../_components/Playlists';
import { OtherInfoFromTrail } from '../_components/OtherInfoFromTrail';

export default function Trail() {
  const is2xlVersion = useBreakpointValue({ 
    base: false,
    "2xl": true
  });

  // const router = useRouter()
  // const trailSlug = router.query;

  return (
    <>
      <Head>
        <title>Kaguya | HTML</title>
      </Head>

      <Flex
        flexDirection="column"
      >
        <Header headerType={'has-user-profile'}/>

        <Flex
          maxW={1480}

          flexDirection={"column"}

          mt="16"
          mx={["0", "auto"]}
        >
          <BreadCrumbContainer 
            currentItem={{
              link: '/trail/html',
              title: 'HTML'
            }}
            items={[
              {
                link: '/dashboard',
                title: 'Dashboard'
              }
            ]}
          />

          <TrailInfoHeader />
          <Quotes />

          <DividerLine />

          <Flex
            mt={is2xlVersion ? "8" : "10"}
            gap="4"
            mx={"4"}
            justifyContent="space-between"
            flexDirection={is2xlVersion ? "row" : "column-reverse"}
          >
            <PLaylistsContainer 
              is2xlVersion={is2xlVersion}
            />
            <OtherInfoFromTrail />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}