import { Flex, Heading, keyframes,useToken } from '@chakra-ui/react';
import { DividerLine } from '../../../../components/DividerLine';
import { useRef } from 'react';

// import { OthersTrailsNoContent } from './OthersTrailsNoContent';
import { Trail } from './Trail';

const animate = keyframes`
  from {  
    opacity: 0;
    transform: translateX(100px);
  }
  to {  
    opacity: 1;
    transform: translateX(0);
  }
`

export function OthersTrails() {
  const [blackAlpha900, blackAlpha850] = useToken('colors', ['blackAlpha.900','blackAlpha.850'])
  
  return (
    <>
      <Flex
        animation={`${animate} 0.6s ease`}
        borderRadius={'lg'}
        bg={`linear-gradient(to right, ${blackAlpha850}, ${blackAlpha900})`}
        flexDirection="column"
        flex="1"
        // calc(tela - tamanho do header)
        h="calc(100vh - 80px)"
        p={["4", "6", "8"]}
      >
        <Heading
          fontSize={["md", "lg", "2xl"]}
          mb="4"
        >
          Outras trilhas
        </Heading>

        <DividerLine />
        {/* <OthersTrailsNoContent /> */}
        <Flex
          flexDirection="column"
          gap="4"
          w="100%"
          mt="8"
          overflowY="auto"
          px="2"
          pb="8"
        >
          <Trail />
        </Flex>
      </Flex>
    </>
  );
}