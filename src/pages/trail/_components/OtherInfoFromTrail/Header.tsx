import { Flex, Heading, Image } from '@chakra-ui/react';

export function OtherInfoFromTrailHeader() {
  return (
    <>
      <Flex
        alignItems="center"
        gap="4"
      >
        <Image 
          src="https://app-kaguya.s3.amazonaws.com/1096b9782cc48ca7b1b19422cfe39f-html5.png"
          alt="html"

          w={["16", "20", "24"]}
          h={["16", "20", "24"]}
        />
        <Heading
          fontSize={["md", "lg", "2xl"]}
          letterSpacing="wider"
        >
          Informações da trilha
        </Heading>
      </Flex>
    </>
  );
}