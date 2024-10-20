import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useAllUsers } from "../base/hooks/use-all";
import { useState } from "react";
function Followers() {
  const { data } = useAllUsers();
  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <>
      <Box
        width="400px"
        padding="4"
        borderRadius="lg"
        bg="gray.900"
        boxShadow="lg"
        mt={4}
        position="relative"
      >
        <VStack align="start" spacing={4}>
          {data?.map((user) => (
            <HStack key={user.id} spacing={4} w="full" justify="space-between">
              <HStack spacing={3}>
                <Avatar src={""} name={user.userName} />
                <VStack align="start" spacing={0}>
                  <Text color="white" fontWeight="bold">
                    {user.fullName}
                  </Text>
                  <Text color="gray.400">{user.userName}</Text>
                </VStack>
              </HStack>
              <Button
                colorScheme={isFollowing ? "red" : "blue"}
                onClick={toggleFollow}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </HStack>
          ))}
        </VStack>
      </Box>
    </>
  );
}

export default Followers;
