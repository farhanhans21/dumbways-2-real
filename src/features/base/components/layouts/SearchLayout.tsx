import { Box, Input, FormLabel, FormControl } from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchLayout() {
  return (
    <Box
      width={"70%"}
      mt={3}
      mx={"auto"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      borderRadius={"30px"}
      border={"2px solid"}
      borderColor={"white"}
      padding={2}
      
    >
      <FormControl>
        <FormLabel
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="white"
            style={{ fontSize: "25px", marginTop: "8" }}
          />
          <Input
            width={"100%"}
            bg={"none"}
            placeholder="Search for posts"
            borderColor={"none"}
          />
        </FormLabel>
      </FormControl>
    </Box>
  );
}

export default SearchLayout;
