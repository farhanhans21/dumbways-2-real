import { Grid, GridItem, Text } from "@chakra-ui/react";
import HomeItem from "../page/home/HomeItem";
import HomePost from "../page/home/HomePost";

function HomeLayout() {
  return (
    <>
      <Text
          fontSize="3xl"
          color="white"
          fontWeight="bold"
          textAlign="start"
          as="h1"
          pl={4}
          
        >
          Home
        </Text>
        <Grid>
          <GridItem>
            <HomePost/>
          </GridItem>
          <GridItem>
            <HomeItem/>
            <HomeItem/>
          </GridItem>
        </Grid>
    </>
  );
}

export default HomeLayout;
