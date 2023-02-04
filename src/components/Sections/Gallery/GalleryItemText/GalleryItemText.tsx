import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import TopText from "./TopText";

interface GalleryItemTextProps {
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
}

const GalleryItemText: React.FC<GalleryItemTextProps> = ({
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
      <Box
        // border="1px solid white"
        gridRow="4 / span 4"
        gridColumn="1 / -1"
        zIndex={1}
      >
        <Text textStyle="headingXS">{title}</Text>
      </Box>
    </>
  );
};

export default GalleryItemText;
