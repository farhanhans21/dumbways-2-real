import {
  Avatar,
  Box,
  Container,
  Image,
  Text
} from "@chakra-ui/react";
import ButtonLink from "../../../buttons/LinkButton";
import { userAllPosts } from "../../../hooks/use-all";

function HomeItem() {


  const { data } = userAllPosts();

  return (
    <>
      {data?.map((post) => {
        <Box
          borderBottom="1px solid grey"
          display="flex"
          key={post.id}
          flexDirection="row"
        >
          <Avatar
            m={6}
            boxSize="70px"
            src="https://media.suara.com/pictures/653x366/2018/03/04/88826-mia-khalifa-instagram.jpg"
          />
          <div style={{ margin: "5px" }}>
            <Text fontSize={"12px"} fontWeight={"bold"}>
              {post.author.fullName}
              <Text as={"span"} color={"home.link"} ms={"3px"}>
                @{post.author.userName} • {post.timeAgo}
              </Text>
            </Text>
            <Box
              display={"flex"}
              justifyContent={"center"}
              width={"90%"}
              mb={4}
            >
              {post.image !== null && (
                <Image src={post.image} boxSize={"300px"} />
              )}
            </Box>
            <Container maxW="100%" color="white">
              <Text color="white">{post.content}</Text>
            </Container>
            <ButtonLink
              state={post.id}
              to={`/status/${post.id}`}
              display={"flex"}
            >
              <Text
                ms={"5px"}
                as={"span"}
                color={"home.link"}
                fontSize={"12px"}
              >
                {post.repliesCount} Replies
              </Text>
            </ButtonLink>
          </div>
        </Box>;
      })}
    </>
  );
}

export default HomeItem;
