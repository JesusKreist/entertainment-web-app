import { Grid, Box, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";
import GalleryItemImage from "./GalleryItemImage";
import GalleryItemText from "./GalleryItemText/GalleryItemText";
import ReactPlayer from "react-player/youtube";

interface GalleryItemProps {
  showId: string;
  src: string;
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
  youtubeUrl: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  showId,
  year,
  src,
  category,
  parentalRating,
  title,
  youtubeUrl,
}) => {
  return (
    <Grid
      templateRows={{ base: "71.43% 1fr", md: "77% 1fr" }}
      sx={{
        aspectRatio: { base: "164/154", md: "280/226" },
      }}
    >
      <GalleryItemImage
        src={src}
        title={title}
        showId={showId}
        youtubeUrl={youtubeUrl}
      />
      <GalleryItemText
        year={year}
        category={category}
        parentalRating={parentalRating}
        title={title}
      />
    </Grid>
  );
};

export default GalleryItem;
