import { Flex, Text } from '@chakra-ui/react';
import Lordicon from '../../../../components/ReactLordicon';
export function MyTrailsNoContent() {
  return (
    <>
      <Flex
        mt="16"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Lordicon
          size={80}
          icon='spaFlower'
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
          Você não pussuí nenhuma trilha em sua conta
        </Text>
      </Flex>
    </>
  );
}
