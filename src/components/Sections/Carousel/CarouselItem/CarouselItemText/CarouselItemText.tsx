import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import BottomText from "./BottomText";
import TopText from "./TopText";

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
  return (
    <>
      <TopText
        year={year}
        category={category}
        parentalRating={parentalRating}
      />
      <BottomText title={title} />
    </>
  );
};

export default CarouselItemText;
