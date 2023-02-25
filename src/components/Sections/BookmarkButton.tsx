import { Flex, Box, Image, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { usePageStore } from "../../data/appState";
import { addShowToUserBookmarks } from "../../data/data";

interface BookmarkButtonProps {
  showId: string;
  gridRow: string;
  gridColumn: string;
}
const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  showId,
  gridRow,
  gridColumn,
}) => {
  const isBookmarked = usePageStore(
    (state) => state.showBookmarksState[showId] || false
  );

  const handleAddBookmark = async () => {
    const addBookmarkToDb = await addShowToUserBookmarks(showId);
    console.log("Adding show to bookmarks", showId);
    console.log(addBookmarkToDb);
  };

  const iconToDisplay = isBookmarked
    ? "assets/icon-bookmark-full.svg"
    : "assets/figma-bookmark-icon.svg";

  return (
    <Flex
      // border="1px solid white"
      gridRow={gridRow}
      gridColumn={gridColumn}
      justifyContent="center"
      zIndex={1}
      onClick={handleAddBookmark}
    >
      <Tooltip
        label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
        placement="top-end"
        fontSize="md"
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
      </Tooltip>
    </Flex>
  );
};

export default BookmarkButton;
