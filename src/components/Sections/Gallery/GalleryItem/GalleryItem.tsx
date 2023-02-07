import { Grid, Box, Image, Flex } from "@chakra-ui/react";
import GalleryItemImage from "./GalleryItemImage";
import GalleryItemText from "./GalleryItemText/GalleryItemText";

interface GalleryItemProps {
  src: string;
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
  isBookmarked: boolean;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  year,
  src,
  category,
  parentalRating,
  title,
  isBookmarked,
}) => {
  return (
    <Grid
      templateRows={{ base: "71.43% 1fr", md: "77% 1fr" }}
      // border="1px solid red"
      sx={{
        aspectRatio: { base: "164/154", md: "280/226" },
      }}
    >
      <GalleryItemImage src={src} title={title} isBookmarked={isBookmarked} />
      <GalleryItemText
        year={year}
        category={category}
        parentalRating={parentalRating}
        title={title}
      />
    </Grid>
  );
};

export default GalleryItem;
