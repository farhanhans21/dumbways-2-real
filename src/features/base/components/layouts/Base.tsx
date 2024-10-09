import React from "react";
import SideBars from "./sidebar/SideBars";
import ProfileInfo from "./sidebar/ProfileInfo";
import {
  Flex,
  Box,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
function Base() {
  return (
    <Flex minWidth="max-content">
      <Box w="20vw" h="100vh" bg="black" borderRight="1px solid grey">
        <SideBars />
      </Box>
      <Box h="100vh" w="50vw" bg="black" borderRight="1px solid grey" overflowY={"auto"}>
        <Outlet />
      </Box>
      <Box w="30vw" h="100vh" bg="black" borderRight="1px solid grey">
        <ProfileInfo />
      </Box>
    </Flex>
  );
}

export default Base;
