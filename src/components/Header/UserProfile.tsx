import { Avatar, Flex, Text } from '@chakra-ui/react';
import { ProfilePopover } from './ProfilePopover';

export interface UserProfileProps {
  isWideVersion?: boolean;
}

export function UserProfile({
  isWideVersion
}: UserProfileProps) {
  return (
      <Flex
        ml="auto"
        alignItems="center"
        gap="4"
      >
        {isWideVersion && (
          <Text color="gray.300">Gotim</Text>
        )}
        <ProfilePopover isWideVersion={isWideVersion}>
          <Avatar
            src=""
            name="Tiago Gonçalves"

            size={["sm", "md"]}
            cursor="pointer"
          />
      </ProfilePopover>
    </Flex>
  );
}