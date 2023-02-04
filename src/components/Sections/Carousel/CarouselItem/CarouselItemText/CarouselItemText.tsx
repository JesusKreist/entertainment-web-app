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
