import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import {
  Flex, useBreakpointValue, useToast
} from '@chakra-ui/react';

import { OtherInfoFromTrail, PlaylistsContainer, Quotes, TrailInfoHeader, TrailSkeletonLoading } from '@/modules/trail/components';

import { BreadCrumbContainer } from '@/components/BreadCrumb/Container';
import { DividerLine } from '@/components/DividerLine';
import { Header } from '@/components/Header';

import { kaguyaApi } from '@/services/kaguya/apiClient';
import { withSSRAuth } from '@/utils/withSSRAuth';
import { Quote, quotes } from '@/services/quotes';

export interface TrailData {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar_url: string;
  
  created_at: string;
  updated_at: string;

  _count: {
    playlists: number;
    users: number;
    lessons: number;
  };

  user_trail: {
    progress: number;
    enabled: boolean;
  } | null;
}

type TrailProps = {
  quote: Quote
}

export default function Trail({ quote }: TrailProps) {
  const toast = useToast();

  const is2xlVersion = useBreakpointValue({ 
    base: false,
    "2xl": true
  });

  const router = useRouter()
  const { trailSlug } = router.query;
  
  const trail = useQuery<TrailData | undefined>(['uniqueTrail', trailSlug], async () => {
    try {
      const response = await kaguyaApi.get<TrailData>('/trails/show', {
        params: {
          slug: trailSlug,
        }
      });
  
      return response.data;
    } catch (error) {  
      toast({
        title: 'Erro na listagem da trilha',
        description: 'Possivelmente esta trilha não existe ou ocorreu um erro interno.',
        status: 'error',
        duration: 6000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }
  }, {
    staleTime: 1000 * 60 * 10, // 60 minutes
    enabled: !!trailSlug,
  });

  if(trail.isLoading) {
    return (
      <>
        <Head>
          <title>Kaguya | ...Carregando</title>
        </Head>

        <TrailSkeletonLoading />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Kaguya | {trail?.data?.name}</title>
      </Head>

      <Flex
        flexDirection="column"
      >
        <Header headerType={'has-user-profile'}/>

        <Flex
          maxW={1480}
          w="100%"

          flexDirection={"column"}

          mt="16"
          mx={["0", "auto"]}
        >
          <BreadCrumbContainer 
            currentItem={{
              link: `/trail/${trail?.data?.slug}`,
              title: trail?.data?.name
            }}
            items={[
              {
                link: '/dashboard',
                title: 'Dashboard'
              }
            ]}
          />

          <TrailInfoHeader trail={trail.data} isFetching={trail.isFetching} />
          <Quotes quote={quote} />

          <DividerLine />

          <Flex
            mt={is2xlVersion ? "8" : "10"}
            gap="4"
            mx={"4"}
            justifyContent="space-between"
            flexDirection={is2xlVersion ? "row" : "column-reverse"}
          >
            <PlaylistsContainer
              is2xlVersion={is2xlVersion}
              trail={trail.data}
            />
            <OtherInfoFromTrail trail={trail?.data} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}



export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  const min = 0;
  const max = quotes.length - 1;
  
  const quoteIndex = Math.floor(min + (Math.random() * (max - min)));

  const quote = quotes[quoteIndex]

  return {
    props: {
      quote
    },
  }
});