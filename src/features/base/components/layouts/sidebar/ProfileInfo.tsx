import { Box, Flex, Text, Avatar, Button } from "@chakra-ui/react";
import DevDesc from "../../../../ui/DevDesc";
import Followers from "../../../../ui/Followers";

function ProfileInfo() {
  return (
    <>
      <Flex direction={"column"} justify={"center"} align={"center"} mt={6}>
        <Box
          width="400px"
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
          |
          <Text color={"white"} fontWeight={"light"} fontSize={"sm"}>
            @munarr_
          </Text>
        </Box>
        <Followers />
        <DevDesc />
      </Flex>
    </>
  );
}

export default ProfileInfo;
