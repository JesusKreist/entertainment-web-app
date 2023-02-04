import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface TopTextProps {
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
}

const GalleryItemTextDot = () => (
  <Box
    height="10%"
    rounded="full"
    sx={{
      aspectRatio: "1",
    }}
    bgColor="white"
  ></Box>
);

const TopText: React.FC<TopTextProps> = ({
  year,
  category,
  parentalRating,
}) => {
  const categoryIcon =
    category === "Movie"
      ? "assets/icon-category-movie.svg"
      : "assets/icon-category-tv.svg";
  return (
    <Flex
      // border="1px solid white"
      gridRow="1 / span 3"
      gridColumn="1 / -1"
      gap={{ md: "0.5rem", "2xl": "0.4vw" }}
      textStyle="paragraphSmall"
      alignItems="center"
      opacity={0.75}
      zIndex={1}
      paddingTop="2%"
    >
      <Text>{year}</Text>

      <GalleryItemTextDot />

      <Box
        height={{ base: "50", md: "50%" }}
        sx={{
          aspectRatio: "1",
        }}
        // border="1px solid red"
        marginRight={{
          md: "-0.2rem",
          "2xl": "-0.1vw",
        }}
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

      <GalleryItemTextDot />

      <Text>{parentalRating}</Text>
    </Flex>
  );
};

export default TopText;
