import { ChakraProps, Text } from '@chakra-ui/react';

export interface PlaylistTitleProps extends ChakraProps {
  title: string;
}

export function PlaylistTitle({
  title,
  ...rest
}: PlaylistTitleProps) {
  return (
    <>
      <Text
        fontWeight="bold"
        mb="4"
        fontSize={["sm", "md", "lg"]}
        {...rest}
      >
        Introdução ao HTML 5
      </Text>
    </>
  );
}