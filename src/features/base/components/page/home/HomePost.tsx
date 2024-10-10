import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
} from "@chakra-ui/react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePost } from "../../../hooks/use-post";

function HomePost() {
  const { register, handleSubmit, onSubmit } =
    usePost();

  return (
    <Grid>
      <GridItem>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box borderBottom="1px solid grey" display="flex" flexDirection="row">
            <Avatar
              m={6}
              boxSize="70px"
              src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/660a367675d862001d56d107.jpg"
            />
            <Input
              placeholder="What is happening?!"
              variant="unstyled"
              {...register("content")}
              _placeholder={{ color: "gray.400" }}
              mr="4"
              color="white"
            />
            <Stack direction="row" spacing={1} m="3rem">
              <FormControl>
                <FormLabel>
                  <FontAwesomeIcon
                    style={{ fontSize: "30px", color: "#04A51E" }}
                    icon={faImage}
                  />
                </FormLabel>
                <Input hidden type="file" {...register("image")} />
              </FormControl>

              <Button
                type="submit"
                border={"none"}
                height={"30px"}
                fontSize={"14px"}
                cursor={"pointer"}
                fontWeight={"bold"}
                transition={"0.3s"}
                padding={"5px 30px"}
                borderRadius={"15px"}
                color={"home.button.text"}
                backgroundColor={"#04A51E"}
                _hover={{
                  backgroundColor: "home.button.hoverBackground",
                  color: "home.button.hoverText",
                }}
              >
                Post
              </Button>
            </Stack>
          </Box>
        </form>
      </GridItem>
    </Grid>
  );
}

export default HomePost;
