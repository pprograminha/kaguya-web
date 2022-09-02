import { Box, Flex, Text } from '@chakra-ui/react';

export function HorizontalDividerLine() {
  return (
    <>
      <Flex
        gap="4"
        align="center"
        mt="6"
        mb="6"
      >
        <Box
          bg="-webkit-gradient(linear, 0 0, 100% 0, from(rgb(24, 26, 33)), to(rgb(24, 26, 33)), color-stop(0.5, rgb(72, 74, 79)))"
          w="100%"
          h="1px"
        />
        <Text
          color="gray.300"
          fontSize={["sm", "md"]}
        >
          ou
        </Text>
        <Box
          bg="-webkit-gradient(linear, 0 0, 100% 0, from(rgb(24, 26, 33)), to(rgb(24, 26, 33)), color-stop(0.5, rgb(72, 74, 79)))"
          w="100%"
          h="1px"
        />
      </Flex>
    </>
  );
}