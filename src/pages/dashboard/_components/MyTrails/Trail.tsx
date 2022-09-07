import { GridItem, Button, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Lordicon from '../../ReactLordicon';
import { Progress } from '../../Progress';

export function Trail() {
  return (
    <>
      <NextLink href="/trail/html">
        <GridItem
          as="a"
          bg="blackAlpha.700"
          py="8"
          px="6"
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
          <Progress percent={79} />
        </GridItem>
      </NextLink>
    </>
  );
}