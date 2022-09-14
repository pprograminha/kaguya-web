import { useAuth } from '@/hooks/useAuth';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { ProfilePopover } from './ProfilePopover';

export interface UserProfileProps {
  isWideVersion?: boolean;
}

export function UserProfile({
  isWideVersion
}: UserProfileProps) {
  const { user } = useAuth();

  return (
      <Flex
        ml="auto"
        alignItems="center"
        gap="4"
      >
        {isWideVersion && (
          <Text color="gray.300">{user?.name || user?.username}</Text>
        )}
        <ProfilePopover isWideVersion={isWideVersion}>
          <Avatar
            src={user?.avatar_url || 'logo.png'}
            name={user?.name || user?.username}
            bg="pink.500"

            size={["sm", "md"]}
            cursor="pointer"
          />
      </ProfilePopover>
    </Flex>
  );
}