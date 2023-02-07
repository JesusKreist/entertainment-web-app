import { Flex, Image, Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { TrendingShow } from "../../../data/data";
import CarouselItem from "./CarouselItem/CarouselItem";

interface CarouselProps {
  carouselItems: TrendingShow[];
}
const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  return (
    <Grid
      className="carousel"
      width="100%"
      gap={{ base: "1.25rem", lg: "1.5vw" }}
      // overflow="scroll"
      gridAutoFlow="column"
      // border="1px solid white"
    >
      {carouselItems.map((item) => {
        return (
          <CarouselItem
            key={item.title}
            src={item.thumbnail.trending.large}
            title={item.title}
            year={item.year}
            category={item.category === "Movie" ? "Movie" : "TV Series"}
            parentalRating={item.rating}
          />
        );
      })}
    </Grid>
  );
};

export default Carousel;
