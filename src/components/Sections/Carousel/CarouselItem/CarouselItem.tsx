import { Grid, Box, useBreakpointValue } from "@chakra-ui/react";
import CarouselItemImage from "./CarouselItemImage";
import CarouselItemText from "./CarouselItemText/CarouselItemText";
import PlayButton from "./PlayButton";
import cssClasses from "./CarouselItemImage.module.css";
import BookmarkButton from "../../BookmarkButton";

interface CarouselItemProps {
  src: string;
  showId: string;
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
  youtubeUrl: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  src,
  year,
  category,
  parentalRating,
  title,
  showId,
}) => {
  return (
    <Grid
      className={cssClasses.container}
      minW={{ base: "max(240px, 64vw)", md: "max(470px, 22.46vw)" }}
      sx={{
        aspectRatio: { base: "24/14", md: "47/23" },
      }}
      borderRadius="1vw"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
      position="relative"
    >
      <>
        <BookmarkButton showId={showId} gridRow="2 / 5" gridColumn="14 / 16" />

        <CarouselItemText
          year={year}
          category={category}
          parentalRating={parentalRating}
          title={title}
        />

        <CarouselItemImage src={src} title={title} />
      </>

      <PlayButton />
    </Grid>
  );
};

export default CarouselItem;
