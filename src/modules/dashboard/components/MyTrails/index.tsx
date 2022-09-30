import { useAuth } from '@/hooks/useAuth';
import { kaguyaApi } from '@/services/kaguya/apiClient';
import { Box, CircularProgress, Grid, Heading, keyframes } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { MyTrailsNoContent } from './MyTrailsNoContent';
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

interface UserTrail {
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
  }
}

export function MyTrails() {
  const { user } = useAuth();

  const { data, isFetching } = useQuery<UserTrail[]>('userTrails', async () => {
    const response = await kaguyaApi.get<UserTrail[]>('/user-trails/list-all', {
      params: {
        user_id: user?.id,
        take: 3,
      }
    });

    return response.data;
  }, {
    staleTime: 1000 * 60 * 10 , // 60 minutes
    
  });

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
          gap="2"
          display="flex"
          alignItems="center"
        >
          Minhas trilhas
          {isFetching && (
            <CircularProgress
              isIndeterminate
              color='pink.800'
              size={6}
            />
          )}
        </Heading>

        {!data?.length ? (
          <MyTrailsNoContent />
        ) : (
          <Grid
            gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            gap="4"
            overflowY="auto"
            maxH={400}
          >
            {data && data.map(trail => (
              <Trail key={trail.id} trail={trail} />
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}