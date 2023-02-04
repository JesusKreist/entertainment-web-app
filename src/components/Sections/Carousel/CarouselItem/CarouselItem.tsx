import { Grid, Flex, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import BookmarkButton from "./BookmarkButton";
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
      // width="22.46vw"
      minW={{ base: "240px", md: "470px" }}
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

      <Image
        src={src}
        alt={title}
        width="100%"
        height="100%"
        gridColumn="1 / -1"
        gridRow="1 / -1"
        borderRadius="1vw"
        zIndex={0}
      />
    </Grid>
  );
};

export default CarouselItem;
