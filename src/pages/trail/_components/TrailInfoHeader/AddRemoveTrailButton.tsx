import {
  Button as ChakraButton,
} from '@chakra-ui/react';
import Lordicon from '../../../../components/ReactLordicon';

export function AddRemoveTrailButton() {
  return (
    <>
      <ChakraButton
        bg="#a90f6478"
        color="white"
        transition="all 0.2s"
        fontWeight="normal"
        fontSize={["xs", "sm", "md"]}
        px="6"
        gap="2"
        _hover={{
          bg:"normal",
          filter: "brightness(120%)"
        }}
      >
        <Lordicon icon="addCard" size={24}/>
        Adicionar trilha
      </ChakraButton>
    </>
  )
}