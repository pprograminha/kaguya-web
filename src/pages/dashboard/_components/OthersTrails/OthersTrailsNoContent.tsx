import { Flex, Text } from '@chakra-ui/react';
import Lordicon from '../../../../components/ReactLordicon';

export function OthersTrailsNoContent() {
  return (
    <>
      <Flex
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Lordicon
          size={80}
          icon='clock'
          delay={3000}
          colors={{
            primary: "#9a9ea3",
            secondary: "#9a9ea3",
          }}
        />
        <Text
          color="gray.300"
          mt="4"
        >
          Aguarde a criação de novas trilhas
        </Text>
      </Flex>
    </>
  );
}