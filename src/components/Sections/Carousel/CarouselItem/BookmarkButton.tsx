import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const BookmarkButton = () => {
  return (
    <Flex
      // border="1px solid white"
      gridRow="2 / 5"
      gridColumn="14 / 16"
      justifyContent="center"
      zIndex={1}
    >
      <Box
        as="button"
        // border="1px solid red"
        height={{ base: "1.6875rem", md: "2.7rem", "2xl": "3vw" }}
        sx={{
          aspectRatio: "1",
        }}
        rounded="full"
        bgColor="rgb(151, 151, 151, 0.5)"
      >
        <Image
          src="assets/figma-bookmark-icon.svg"
          alt="bookmark icon"
          height="50%"
          margin="0 auto"
        />
      </Box>
    </Flex>
  );
};

export default BookmarkButton;
