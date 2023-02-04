import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import BottomText from "./BottomText";
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
      <BottomText title={title} />
    </>
  );
};

export default GalleryItemText;
