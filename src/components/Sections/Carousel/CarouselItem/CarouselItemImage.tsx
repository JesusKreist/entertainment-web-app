import { Image, Flex, Grid, Box, Text } from "@chakra-ui/react";
import cssClasses from "./CarouselItemImage.module.css";

interface CarouselItemImageProps {
  src: string;
  title: string;
}

const CarouselItemImage: React.FC<CarouselItemImageProps> = ({
  src,
  title,
}) => {
  return (
    <Flex
      gridColumn={"1 / -1"}
      gridRow="1 / -1"
      // border="1px solid red"
      alignItems={"center"}
      justifyContent={"center"}

      // zIndex={1}
    >
      <Image
        src={src}
        alt={title}
        width="100%"
        height="100%"
        borderRadius="1vw"
        // zIndex={0}
        opacity="1"
        className={cssClasses.image}
      />
    </Flex>
  );
};

export default CarouselItemImage;
