import {
  Box,
  Container,
  Avatar,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as filledHeart,
  faHeart as regularHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { LabelName } from '../../../../ui/LabelAuth'


function ProfileItem() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  // Framer Motion animation for the button
  const MotionIconButton = motion(IconButton);
  return (
    
    <>
    <Box borderBottom="1px solid grey" display="flex" flexDirection="row">
      <Avatar
        m={6}
        boxSize="70px"
        src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/660a367675d862001d56d107.jpg"
      />
      <div style={{ margin: "5px" }}>
        <LabelName
          children="Munaroh"
          fontColor="white"
          tag="@munaroh_"
          hour="4h"
        />
        <Container maxW="100%" color="white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text,
        </Container>

        <MotionIconButton
          aria-label="Like"
          icon={<FontAwesomeIcon icon={isLiked ? filledHeart : regularHeart} />}
          color={
            isLiked ? "red.500" : useColorModeValue("gray.600", "gray.300")
          }
          variant="ghost"
          fontSize="24px"
          onClick={handleLikeToggle}
          // Scale animation when the button is clicked
          whileTap={{ scale: 0.8 }}
          // Simple transition
          transition={{ duration: 0.2 }}
        />
        <MotionIconButton
          icon={<FontAwesomeIcon icon={faComment} color={useColorModeValue("gray.600", "gray.300")} size="lg" />}
          fontSize="24px"
          background={"none"}
        />
      </div>
    </Box>
    </>
    
  )
}

export default ProfileItem