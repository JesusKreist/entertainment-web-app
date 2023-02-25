import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import PlayButton from "./PlayButton";
import cssClasses from "./GalleryItem.module.css";
import BookmarkButton from "../../BookmarkButton";

interface GalleryItemImageProps {
  src: string;
  title: string;
  showId: string;
}
const GalleryItemImage: React.FC<GalleryItemImageProps> = ({
  src,
  title,
  showId,
}) => {
  return (
    <Grid
      width="100%"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
      className={cssClasses.container}

      // border="1px solid yellow"
    >
      <BookmarkButton showId={showId} gridRow="2 / 6" gridColumn="13 / 16" />
      <PlayButton />
      <Image
        gridRow="1 / -1"
        gridColumn="1 / -1"
        src={src}
        alt={title}
        width="100%"
        height="100%"
        className={cssClasses.image}
        borderRadius={{ base: "1vw", "2xl": "1vw" }}
      />
    </Grid>
  );
};

export default GalleryItemImage;
