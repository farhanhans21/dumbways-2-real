import React, { useState } from "react";
import {
  Box,
  Container,
  Avatar,
  IconButton,
  Image,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LabelName } from "../../../../ui/LabelAuth";
import {
  faHeart as filledHeart,
  faHeart as regularHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { userAllPosts } from "../../../hooks/use-all";
import ButtonLink from "../../../buttons/LinkButton";

function HomeItem() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const { data } = userAllPosts();
  // Framer Motion animation for the button
  const MotionIconButton = motion(IconButton);

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
