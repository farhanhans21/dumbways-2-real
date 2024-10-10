import {
  Box,
  Flex,
} from "@chakra-ui/react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ProfileInfo from "./sidebar/ProfileInfo";
import SideBars from "./sidebar/SideBars";
import { useAppSelector } from "../../../store/hooks/use-store";

function Base() {

  const user = useAppSelector((state)=> state.auth)
  const location = useLocation()

  if (!Object.keys(user).length) {
    return <Navigate to={"/login"}/>
  }

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
