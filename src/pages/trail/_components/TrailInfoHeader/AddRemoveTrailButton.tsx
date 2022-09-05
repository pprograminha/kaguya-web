import {
  Button as ChakraButton, ChakraProps,
} from '@chakra-ui/react';
import Lordicon from '../../../../components/ReactLordicon';

export interface AddRemoveTrailButtonProps {
  isMdVersion?: boolean;
  trailActived: boolean;
}

export function AddRemoveTrailButton({
  isMdVersion,
  trailActived
}: AddRemoveTrailButtonProps) {
  const propsEquals: ChakraProps = !isMdVersion ? {
    position: 'absolute',
    top: "-5",
    right: "0",
  } : {};

  if(trailActived) {
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
          {...propsEquals}
        >
          <Lordicon 
            trigger='hover'
            icon='trash'
            size={20}
          />
          {isMdVersion && 'Remover trilha'}
        </ChakraButton>
      </>
    )
  }

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
        {...propsEquals}
      >
        <Lordicon icon="addCard" size={20}/>
        {isMdVersion && 'Adicionar trilha'}
      </ChakraButton>
    </>
  )
}