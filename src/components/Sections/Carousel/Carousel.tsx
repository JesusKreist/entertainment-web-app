import { Flex, Image, Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { TrendingMovieOrShow } from "../../../data/data";

interface CarouselItemTextProps {
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
}

const CarouselItemTextDot = () => (
  <Box
    height="10%"
    rounded="full"
    sx={{
      aspectRatio: "1",
    }}
    bgColor="white"
  ></Box>
);

const CarouselItemText: React.FC<CarouselItemTextProps> = ({
  year,
  category,
  parentalRating,
  title,
}) => {
  const categoryIcon =
    category === "Movie"
      ? "assets/icon-category-movie.svg"
      : "assets/icon-category-tv.svg";

  return (
    <>
      <Flex
        // border="1px solid white"
        gridRow="10 / span 2"
        gridColumn="2 / -2"
        gap="0.4vw"
        textStyle="paragraphMedium"
        alignItems="center"
        opacity={0.75}
        zIndex={1}
      >
        <Text>{year}</Text>

        <CarouselItemTextDot />

        <Box
          height={{ base: "1rem", md: "1.25rem", lg: "50%" }}
          sx={{
            aspectRatio: "1",
          }}
          // border="1px solid red"
          marginRight="-0.1vw"
        >
          <Image
            src={categoryIcon}
            alt="category icon"
            margin="0 auto"
            // border="1px solid white"
            height="100%"
            objectFit="contain"
          />
        </Box>

        <Text whiteSpace="nowrap">{category}</Text>

        <CarouselItemTextDot />

        <Text>{parentalRating}</Text>
      </Flex>
      <Box
        // border="1px solid white"
        gridRow="12 / span 3"
        gridColumn="2 / -2"
        zIndex={1}
      >
        <Text textStyle="headingS">{title}</Text>
      </Box>
    </>
  );
};

interface CarouselImageProps {
  src: string;

  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({
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

interface CarouselProps {
  carouselItems: TrendingMovieOrShow[];
}
const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  return (
    <Grid
      className="carousel"
      width="100%"
      gap="1.5vw"
      // overflow="scroll"
      gridAutoFlow="column"
      // border="1px solid white"
    >
      {carouselItems.map((item) => {
        return (
          <CarouselImage
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
