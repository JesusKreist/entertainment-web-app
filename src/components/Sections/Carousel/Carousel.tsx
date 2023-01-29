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
      templateRows=""
    >
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
