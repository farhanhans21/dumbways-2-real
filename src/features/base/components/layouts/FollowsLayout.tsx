import {
  Box,
  Center,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  useColorModeValue,
} from "@chakra-ui/react";
import ButtonLink from "../../buttons/LinkButton";
import { Outlet } from "react-router";
import FollowItem from "../page/follows/FollowerItem";
import FollowingItem from "../page/follows/FollowerItem";
import { useState } from "react";
function FollowsLayout() {
  
  return (
    <Tabs>
      <TabList>
        <Tab w="100%" color="white" _selected={{ color: 'white'  }}>Follower</Tab>
        <Tab w="100%" color={"white"} _selected={{ color: 'white'  }}>Following</Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='#04A51E' borderRadius='1px' />
      <TabPanels>
        <TabPanel>
          <FollowItem/>
        </TabPanel>
        <TabPanel>
          <FollowingItem/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default FollowsLayout;
