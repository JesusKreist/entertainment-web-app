import { Flex, Image, Box, Grid } from "@chakra-ui/react";
import React from "react";
import { MovieOrShow } from "../../../data/data";

interface CarouselImageProps {
  src: string;
  alt: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
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
        border="1px solid white"
        gridRow="2 / 5"
        gridColumn="14 / 16"
        // gridRow="2 / 9"
        // gridColumn="2 / 16"
        justifyContent="center"
      >
        <Box
          as="button"
          border="1px solid red"
          sx={{
            aspectRatio: "1",
          }}
          rounded="full"
          bgColor="rgb(151, 151, 151, 0.5)"
        >
          <Image
            src="assets/figma-bookmark-icon.svg"
            alt="bookmark icon"
            // objectFit="fill"
            // maxWidth="100%"
            // width="100%"
            height="50%"
            margin="0 auto"
          />
        </Box>
      </Flex>
      <Box border="1px solid white" gridRow="" gridColumn=""></Box>
      <Box border="1px solid white" gridRow="" gridColumn=""></Box>
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
            alt={item.title}
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
