import { GridItem, Button, Image, Text } from '@chakra-ui/react';
import Lordicon from '../../ReactLordicon';

export function Trail() {
  return (
    <>
      <GridItem
        bg="blackAlpha.700"
        p="8"
        display="flex"
        alignItems="center"
        flexDirection="column"
        position="relative"
        borderRadius="md"
        cursor="pointer"
      >
        <Button
          position="absolute"
          top="2"
          right="2"
          bg="blackAlpha.600"
          _hover={{
            bg:"normal",
            opacity: "0.7"
          }}
        >
          <Lordicon icon="trash"/>
        </Button>
        <Image 
          src="https://app-kaguya.s3.amazonaws.com/1096b9782cc48ca7b1b19422cfe39f-html5.png"
          alt="html"

          w={["14","16"]}
          h={["14","16"]}
        />
        <Text
          fontSize={["sm", "md", "xl"]}
          fontWeight="bold"
          letterSpacing="wider"
          mt="3"
        >
          HTML
        </Text>
      </GridItem>
    </>
  );
}