import { Avatar, Flex, Text } from '@chakra-ui/react';

export interface UserProfileProps {
  showProfileData?: boolean;
}

export function UserProfile({
  showProfileData
}: UserProfileProps) {
  return (
    <>
      <Flex
        ml="auto"
        alignItems="center"
        gap="4"
      >
        {showProfileData && (
          <Text color="gray.300">Gotim</Text>
        )}
        <Avatar
          src=""
          name="Tiago Gonçalves"

          size={["sm", "md"]}
        />
      </Flex>
    </>
  );
}