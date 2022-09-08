import { useRouter } from 'next/router';
import Head from 'next/head';
import { 
  Flex, 
} from '@chakra-ui/react';

import { Header } from '@/components/Header';
import { BreadCrumbContainer } from '@/components/BreadCrumb/Container';

import { LessonVideo } from './_components/LessonVideo';
import { LessonInfo } from './_components/LessonInfo';
import { BlocksList } from './_components/BlocksList';

export default function PlaylistPage() {
  const router = useRouter()
  const query = router.query;

  console.log(query);

  return (
    <>
      <Head>
        <title>Kaguya - Playlist Introdução ao HTML 5</title>
      </Head>

      <Flex
        flexDirection="column"
      >
        <Header headerType={'has-user-profile'}/>

        <Flex
          flexDirection="column"
          maxWidth={1480}
          w="100%"
          
          mt="16"
          mx={["0", "auto"]}
        >
          <BreadCrumbContainer 
            items={[
              {link: '/dashboard', title: 'Dashboard'},
              {link: `/trail/html`, title: 'HTML'},
            ]}
            currentItem={{ link: `/trail/html/playlist/introducao-html5`, title: 'Introdução Html 5'}}
          />

          <Flex
            gap="8"
            mt="8"
          >
            <Flex
              flexDirection="column"
              maxWidth={880}
              w="100%"
            >
              <LessonVideo />
              <LessonInfo />
            </Flex>
            <BlocksList blockSlug={'introducao-html1'} />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}