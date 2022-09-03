import { Box, Flex, Text, useToken } from '@chakra-ui/react';
import Lordicon from '../ReactLordicon';

type ProgressProps = {
  percent: number;
};

export function Progress({ percent }: ProgressProps): JSX.Element {
  const [pink600] = useToken(
    'colors',
    ['pink.600'],
  )
  
  return (
    <Box 
      mt="7"
      bg="blackAlpha.800"
      pos="relative"
      borderRadius="full"
      h={'7px'}
      w="full"
    >
      <Box 
        pos="absolute"
        borderRadius="full"
        top={0}
        left={0}
        bg="pink.600"
        boxShadow={`0 0 0 1px ${pink600}`}
        w={`${percent}%`}
        h="full"
      >
        <Text 
          fontSize={'xs'}
          whiteSpace="nowrap"
          right="-15px"
          top="-29px"
          pos="absolute"
          as="span"
        >{percent}%</Text>
          <Flex 
            top="50%"
            right={'-12px'}
            zIndex={1}
            borderRadius="full"
            border="2px solid"
            borderColor="pink.600"
            bg="blackAlpha.700"
            transform="translate(0, -50%)" 
            pos="absolute"
            minWidth="23px"
            height="23px"
            alignItems="center"
            justifyContent="center"
            as="span"
          >
          {percent === 100 && (
            <Lordicon size={16} icon="checkInBox" colors={{
              primary: pink600, 
              secondary: pink600, 
            }} />
          )}
        </Flex>
      </Box>


      {percent < 80 && (
        <Flex 
          as="span"
          bg="blackAlpha.800"
          transform="translate(0, -50%)"
          pos="absolute"
          alignItems="center"
          justifyContent="center"
          zIndex={0}
          top="50%"
          right="-12.5px"
          w="25px"
          h="25px"
          borderRadius="full"
        >
          <Lordicon size={20} icon="checkInBox" colors={{
            primary: pink600, 
            secondary: pink600, 
          }} />
        </Flex>
      )}
    </Box>
  );
}
