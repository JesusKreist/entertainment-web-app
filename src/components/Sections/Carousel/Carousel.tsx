import { Flex, Image, Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { MovieOrShow } from "../../../data/data";

interface CarouselItemTextProps {
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
}

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
      >
        <Text>{year}</Text>

        <Box
          height="10%"
          rounded="full"
          sx={{
            aspectRatio: "1",
          }}
          bgColor="white"
        ></Box>

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
            alt="bookmark icon"
            margin="0 auto"
            // border="1px solid white"
            height="100%"
            objectFit="contain"
          />
        </Box>

        <Text whiteSpace="nowrap">{category}</Text>

        <Box
          height="10%"
          rounded="full"
          sx={{
            aspectRatio: "1",
          }}
          bgColor="white"
        ></Box>

        <Text>{parentalRating}</Text>
      </Flex>
      <Box
        // border="1px solid white"
        gridRow="12 / span 3"
        gridColumn="2 / -2"
      >
        <Text textStyle="h4">{title}</Text>
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
      width="22.46vw"
      sx={{
        aspectRatio: { base: "1", lg: "47/23" },
      }}
      borderRadius="1vw"
      border="2px solid white"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
    >
      <Flex
        // border="1px solid white"
        gridRow="2 / 5"
        gridColumn="14 / 16"
        justifyContent="center"
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

      {/* <Image
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        
      >
        CarouselImage
      </Image> */}
    </Grid>
  );
};

interface CarouselProps {
  carouselItems: MovieOrShow[];
}
const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  return (
    <Grid
      className="carousel"
      width="100%"
      gap="1.5vw"
      // overflow="scroll"
      gridAutoFlow="column"
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
      {/* <CarouselImage src="/assets/image-1.png" alt="image 1" />
      <CarouselImage src="/assets/image-2.png" alt="image 2" />
      <CarouselImage src="/assets/image-3.png" alt="image 3" />
      <CarouselImage src="/assets/image-4.png" alt="image 4" />
      <CarouselImage src="/assets/image-5.png" alt="image 5" />
      <CarouselImage src="/assets/image-6.png" alt="image 6" />
      <CarouselImage src="/assets/image-7.png" alt="image 7" />
      <CarouselImage src="/assets/image-8.png" alt="image 8" /> */}
    </Grid>
  );
};

export default Carousel;
