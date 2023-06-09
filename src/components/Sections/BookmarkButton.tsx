import { Flex, Box, Image, Tooltip, useToast } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { usePageStore } from "../../data/appState";
import {
  addShowToUserBookmarks,
  removeShowFromUserBookmarks,
} from "../../data/data";

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
  const { data: session } = useSession();
  const isBookmarked = usePageStore(
    (state) => state.showBookmarksState[showId] || false
  );
  const updateShowBookmarkedState = usePageStore(
    (state) => state.updateOneShowBookmarkState
  );

  const toast = useToast();

  const handleAddBookmark = async () => {
    if (!session) {
      toast({
        title: "You need to be logged in to bookmark a show.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    updateShowBookmarkedState(showId, true);
    const isSuccess = await addShowToUserBookmarks(showId);

    if (!isSuccess) {
      updateShowBookmarkedState(showId, false);
    }
    toast({
      title: "Show added to bookmarks.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const handleRemoveBookmark = async () => {
    if (!session) {
      toast({
        title: "You need to be logged in to bookmark a show.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    const isSuccess = await removeShowFromUserBookmarks(showId);
    console.log("Removing show from bookmarks", showId);
    if (isSuccess) {
      updateShowBookmarkedState(showId, false);
    }

    toast({
      title: "Show removed from bookmarks.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
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
      onClick={isBookmarked ? handleRemoveBookmark : handleAddBookmark}
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
