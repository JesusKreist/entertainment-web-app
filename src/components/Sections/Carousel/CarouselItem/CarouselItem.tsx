import { Grid, Flex, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import BookmarkButton from "./BookmarkButton";
import CarouselItemImage from "./CarouselItemImage";
import CarouselItemText from "./CarouselItemText/CarouselItemText";

interface CarouselItemProps {
  src: string;

  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  src,
  year,
  category,
  parentalRating,
  title,
}) => {
  return (
    <Grid
      className="carousel-image"
      //   width="22.46vw"
      minW={{ base: "max(240px, 64vw)", md: "max(470px, 22.46vw)" }}
      sx={{
        aspectRatio: { base: "24/14", md: "47/23" },
      }}
      // border="1px solid red"
      borderRadius="1vw"
      // border="2px solid white"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
    >
      <BookmarkButton />
      <Box className="play-button"></Box>

      <CarouselItemText
        year={year}
        category={category}
        parentalRating={parentalRating}
        title={title}
      />

      <CarouselItemImage src={src} title={title} />
    </Grid>
  );
};

export default CarouselItem;
