// import { useRouter } from 'next/router';

import { 
  Flex, 
} from '@chakra-ui/react';

import Head from 'next/head';

import { DividerLine } from '../../components/DividerLine';
import { Header } from '../../components/Header';
import { BreadCrumbContainer } from '../../components/BreadCrumb/Container';
import { TrailInfoHeader } from './_components/TrailInfoHeader';
import { Quotes } from './_components/Quotes';
import { PLaylistsContainer } from './_components/Playlists';
import { OtherInfoFromTrail } from './_components/OtherInfoFromTrail';

export default function Trail() {
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
        <Header headerType={{ hasUserProfile: true }}/>

        <Flex
          maxW={1480}

          display="flex"
          flexDirection={"column"}
          
          mt="16"
          mx={["0", "2", "auto"]}
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
            mt={["6", "6", "6", "6", "18"]}
            mx={["4", "4", "4", "6"]}
            gap="8"
            flexDirection={["column-reverse", "column-reverse", "column-reverse", "column-reverse", "row"]}
          >
            <PLaylistsContainer />
            <OtherInfoFromTrail />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}