import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

function ProfileInfoThreads() {
  return (
    <Box
      width="95%"
      padding="4"
      borderRadius="lg"
      bg="gray.900"
      boxShadow="lg"
      position="relative"
    >
      <Text color="white" mb="2" fontSize="lg" fontWeight="bold">
        My Profile
      </Text>
      <Box
        bgGradient="linear(to-r, green.200, yellow.300, teal.300)"
        height="100px"
        borderRadius="lg"
      ></Box>
      <Avatar
        mt={16}
        ml={4}
        size="xl"
        src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/660a367675d862001d56d107.jpg"
        position="absolute"
        top="40px"
        left="20px"
        style={{ border: "4px solid gray.900" }}
      />
      {/* Edit Button */}
      <Flex justify="flex-end" mt="8">
        <Button
          colorScheme="gray"
          size="sm"
          color={"white"}
          _hover={{ bg: "white", color: "black" }}
          variant="outline"
        >
          Edit Profile
        </Button>
      </Flex>
      <Text color={"white"} fontWeight={"bold"} fontSize={"3xl"}>
        Munaroh
      </Text>
      <Text color={"white"} fontWeight={"light"} fontSize={"sm"}>
        @munarr_
      </Text>
      <Text color={"white"} fontWeight={"light"} mt={4}>
        I'm a software engineer, currently working remotely at a startup. I love
        exploring new technologies and learning about their potential impacts.
        I'm always open to discussing opportunities and collaborations.
      </Text>

      <Box mt={3} display={"flex"} flexDirection={"row"} gap={2}>
        <Box display={"flex"} flexDirection={"row"} gap={2}>
          <Text color={"white"} fontWeight={"light"}>
            770
          </Text>
          <Text color={"grey"} fontWeight={"light"}>
            Following
          </Text>
          <Box mt={0} display={"flex"} flexDirection={"row"} ml={2} gap={2}>
            <Text color={"white"} fontWeight={"light"}>
              780
            </Text>
            <Text color={"grey"} fontWeight={"light"}>
              Follower
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileInfoThreads;
