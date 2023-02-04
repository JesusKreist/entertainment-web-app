import { Box, Text, Image, Flex, Grid } from "@chakra-ui/react";
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
    <Grid
      templateRows="repeat(7, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
      // border="1px solid white"
    >
      <TopText
        year={year}
        category={category}
        parentalRating={parentalRating}
      />
      <BottomText title={title} />
    </Grid>
  );
};

export default GalleryItemText;
