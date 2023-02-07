import { Flex, Box, Image } from "@chakra-ui/react";
import React from "react";

interface BookmarkButtonProps {
  isBookmarked: boolean;
}
const BookmarkButton: React.FC<BookmarkButtonProps> = ({ isBookmarked }) => {
  const iconToDisplay = isBookmarked
    ? "assets/icon-bookmark-full.svg"
    : "assets/figma-bookmark-icon.svg";

  return (
    <Flex
      // border="1px solid white"
      gridRow="2 / 6"
      gridColumn="13 / 16"
      justifyContent="center"
      zIndex={1}
    >
      <Box
        as="button"
        height={{ base: "2.5rem", md: "2.7rem", "2xl": "3vw" }}
        // border="1px solid red"
        sx={{
          aspectRatio: "1",
        }}
        rounded="full"
        bgColor="rgb(151, 151, 151, 0.5)"
      >
        <Image
          src={iconToDisplay}
          alt="bookmark icon"
          height="50%"
          margin="0 auto"
        />
      </Box>
    </Flex>
  );
};

export default BookmarkButton;
