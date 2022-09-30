import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import { UserHistoryShow } from './index';

interface UserHistoryInfoProps {
  info: UserHistoryShow | undefined;
}

export function LessonHistoryInfo({
  info
}: UserHistoryInfoProps) {
  return (
    <Flex>
      <Image
        src={info?.trail.avatar_url}
        alt="html"

        w="16"
        h="16"
      />
      <HStack
        flexDirection="column"
        alignItems="flex-start"
        ml="4"
      >
        <Text
          fontWeight="bold"
          fontSize={["sm", "md", "lg"]}
        >
          {info?.lesson.name}
        </Text>
        <Text
          ml="0 !important"
          color="gray.300"
          fontSize={["sm"]}
        >
          {info?.playlist.name}
        </Text>
      </HStack>
    </Flex>
  );
}