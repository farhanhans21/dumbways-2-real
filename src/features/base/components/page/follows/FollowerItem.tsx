import {
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";

function FollowItem() {
  
    const users = [
      {
        name: "Shakia Kimathi",
        username: "@shakiakim",
        avatarUrl: "https://media.muckrack.com/profile/images/15626118/eva-elfie_01.jpg.256x256_q100_crop-smart.jpg",
      },
      {
        name: "Naveen Singh",
        username: "@naveeeen",
        avatarUrl: "https://i.pinimg.com/originals/9e/90/56/9e9056bbcc2a4a6de19b70c318275f65.jpg",
      },
    ];
  
    return (
      <>
        <Box
          width="100%"
          padding="4"
          borderRadius="lg"
          bg="black"
          boxShadow="lg"
          mt={4}
          position="relative"
        >
          <VStack align="start" spacing={4}>
            {users.map((user, index) => (
              <HStack key={index} spacing={4} w="full" justify="space-between">
                <HStack spacing={3}>
                  <Avatar src={user.avatarUrl} name={user.name} />
                  <VStack align="start" spacing={0}>
                    <Text color="white" fontWeight="bold">
                      {user.name}
                    </Text>
                    <Text color="gray.400">{user.username}</Text>
                  </VStack>
                </HStack>
                <Button colorScheme="green" rounded={30} variant="outline">
                  Follow
                </Button>
              </HStack>
            ))}
          </VStack>
        </Box>
      </>
    );
  
}

export default FollowItem