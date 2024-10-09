import { Box, WrapItem, Avatar, Text, Wrap, Image } from "@chakra-ui/react";
import React from "react";

function DevDesc() {
  return (
    <>
      <Box
        width="400px"
        padding="4"
        borderRadius="lg"
        bg="gray.900"
        boxShadow="lg"
        position="relative"
        mt={10}
      >
        <Wrap>
          <WrapItem>
            <Text color={"white"} fontWeight="500" fontSize="small ">
              Developed By Farhan Pratama
            </Text>
          </WrapItem>
          <WrapItem mt="2">
            <Box
              width="7px"
              height="7px"
              bg="white"
              borderRadius="50%"
              border="none"
            />
          </WrapItem>
          <Wrap pl={6} display={"flex"} justifyContent={"space-evenly"}>
            <WrapItem>
              <Avatar
                size={"xs"}
                name="github"
                boxSize={5}
                border="2px solid #0d0f14"
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                size={"xs"}
                name="linkedIn"
                boxSize={5}
                bg={"black"}
                border="2px solid #0d0f14"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                size={"xs"}
                name="fb"
                boxSize={5}
                border="2px solid #0d0f14"
                src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-FB-Hitam-Putih.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                size={"xs"}
                name="ig"
                bg={"white"}
                boxSize={5}
                border="2px solid #0d0f14"
                src="https://banner2.cleanpng.com/20190612/tpw/kisspng-scalable-vector-graphics-portable-network-graphics-instagram-logo-transparent-background-1713887074484.webp"
              />
            </WrapItem>
          </Wrap>
        </Wrap>
        <Wrap mt={2}>
          <WrapItem>
            <Text fontWeight="small" fontSize={"10px"} color={"grey"}>
              Power by
            </Text>
          </WrapItem>
          <WrapItem>
            <Image
              boxSize="10px"
              bg="none"
              display={"flex"}
              alignContent={"center"}
              mt={"4px"}
              w={"15px"}
              src="https://dumbways.id/assets/images/brandred.png"
            />
          </WrapItem>
          <WrapItem>
            <Text color={"gray"} fontSize={"10px"}>
              Dumbways Indonesia
            </Text>
          </WrapItem>
          <WrapItem mt="5px">
            <Box
              width="6px"
              height="6px"
              display={"flex"}
              alignContent={"center"}
              bg="gray"
              borderRadius="50%"
              border="none"
            />
          </WrapItem>
          <WrapItem>
            <Text color={"grey"} fontSize={"10px"}>
              #1 Coding Bootcamp
            </Text>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
}

export default DevDesc;
