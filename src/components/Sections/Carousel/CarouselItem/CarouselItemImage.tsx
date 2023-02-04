import { Image } from "@chakra-ui/react";
import React from "react";

interface CarouselItemImageProps {
  src: string;
  title: string;
}

const CarouselItemImage: React.FC<CarouselItemImageProps> = ({
  src,
  title,
}) => {
  return (
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
  );
};

export default CarouselItemImage;
