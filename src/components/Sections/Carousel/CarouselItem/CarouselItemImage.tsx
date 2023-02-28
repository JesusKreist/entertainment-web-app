import { Flex, Grid, Box, Text } from "@chakra-ui/react";
import cssClasses from "./CarouselItemImage.module.css";
import Image from "next/image";

interface CarouselItemImageProps {
  src: string;
  title: string;
}

const CarouselItemImage: React.FC<CarouselItemImageProps> = ({
  src,
  title,
}) => {
  const srcWithStrippedDot = src.replace("./assets", "/assets");

  return (
    <Flex
      gridColumn={"1 / -1"}
      gridRow="1 / -1"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        src={srcWithStrippedDot}
        alt={title}
        fill={true}
        className={cssClasses.image}
      />
    </Flex>
  );
};

export default CarouselItemImage;
