import React from "react";

import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faHeart,
  faUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ButtonLink from "../../../buttons/LinkButton";
function SideBars() {
  return (
    <>
      {/* <Flex align="start" justify="start"> */}

      <Text
        fontSize="5xl"
        color="#04A51E"
        fontWeight="bold"
        textAlign="start"
        as="h1"
        pl="10%"
        pt={2}
      >
        Circle
      </Text>

      <Box ml="80px">
        <ButtonLink
          to={"/"}
          background={"none"}
          display={"flex"}
          marginTop={"10px"}
          alignItems={"center"}
          padding={"10px"}
          cursor={"pointer"}
        >
          <FontAwesomeIcon icon={faHouse} size="xl" color="white" />
          <Text fontSize="l" color="white" ml={2}>
            Dashboard
          </Text>
        </ButtonLink>

        <ButtonLink
          to={"/search"}
          background={"none"}
          display={"flex"}
          marginTop={"10px"}
          alignItems={"center"}
          padding={"10px"}
          cursor={"pointer"}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" color="white" />
          <Text fontSize="l" color="white" ml={2}>
            Search
          </Text>
        </ButtonLink>

        <ButtonLink
          to={"/follow"}
          background={"none"}
          display={"flex"}
          marginTop={"10px"}
          alignItems={"center"}
          padding={"10px"}
          cursor={"pointer"}
        >
          <FontAwesomeIcon icon={faHeart} size="xl" color="white" />
          <Text fontSize="l" color="white" ml={2}>
            Follow
          </Text>
        </ButtonLink>

        <ButtonLink
          to={"/profile"}
          background={"none"}
          display={"flex"}
          marginTop={"10px"}
          alignItems={"center"}
          padding={"10px"}
          cursor={"pointer"}
        >
          <FontAwesomeIcon icon={faUser} size="xl" color="white" />
          <Text fontSize="l" color="white" ml={2}>
            Profile
          </Text>
        </ButtonLink>

        
        <Button
          mt={9}
          w="80%"
          h="40px"
          background="#04A51E"
          rounded="30"
          display="flex"
          justifyContent="center"
          color="white"
          fontSize="l"
          fontWeight="semibold"
        >
          Create Post
        </Button>
      </Box>
      <ButtonLink
      
          display= {"flex"}
          ml= {"1px"}
          mt= {"19rem"}
          justifyContent= {"center"}
          alignContent= {"flex-end"}
          padding= {"10px"}
          background= {"none"}
          cursor= {"pointer"}
          to={"/login"}
      >
        <FontAwesomeIcon icon={faDoorOpen} size="xl" color="white" />
        <Text fontSize="l" color="white" ml={2}>
          Logout
        </Text>
      </ButtonLink>

      {/* </Flex> */}
    </>
  );
}

export default SideBars;
