import { Flex, Text } from '@chakra-ui/react';
import Lordicon from '../../../../components/ReactLordicon';

export interface AddTrailAlertProps {
  isSmVersion?: boolean;
}

export function AddTrailAlert({
  isSmVersion
}: AddTrailAlertProps) {
  return (
    <>
     <Flex>
      <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection={!isSmVersion ? "column": "row"}
          gap={["0", "6"]}
          mb="6"
        >
          <Lordicon
            icon="error"
            size={!isSmVersion ? 48 : 70}
            delay={1000}
            trigger='loop'  
            colors={{
              primary: "#c93464",
              secondary: "#c93464",
            }}
          />
          <Text
            color="pink.700"
            letterSpacing="wider"
            fontSize={["xs", "sm", "md"]}
            fontWeight="bold"
          >
            Adicione esta trilha antes de acessar as playlists
          </Text>
        </Flex>
      </Flex>
    </>
  );
}