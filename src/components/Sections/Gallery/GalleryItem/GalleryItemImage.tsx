import { Box, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import PlayButton from "./PlayButton";
import cssClasses from "./GalleryItem.module.css";
import BookmarkButton from "../../BookmarkButton";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";
import Image from "next/image";

interface GalleryItemImageProps {
  src: string;
  title: string;
  showId: string;
  youtubeUrl: string;
}
const GalleryItemImage: React.FC<GalleryItemImageProps> = ({
  src,
  title,
  showId,
  youtubeUrl,
}) => {
  const srcWithStrippedDot = src.replace("./assets", "/assets");

  return (
    <Grid
      width="100%"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
      className={cssClasses.container}
      position="relative"
      // border={{
      //   base: "2px solid purple",
      //   sm: "2px solid pink",

      //   md: "2px solid yellow",
      //   lg: "2px solid red",
      //   xl: "2px solid blue",
      //   "2xl": "2px solid green",
      // }}
    >
      <>
        <BookmarkButton showId={showId} gridRow="2 / 6" gridColumn="13 / 16" />
        <Box gridRow="1 / -1" gridColumn="1 / -1">
          <Image
            src={srcWithStrippedDot}
            alt={title}
            fill={true}
            className={cssClasses.image}
          />
        </Box>
      </>

      <PlayButton />
    </Grid>
  );
};

export default GalleryItemImage;
