import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";
import { default as FollowingItem, default as FollowItem } from "../page/follows/FollowerItem";
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
