import { Grid, Image, Box, Text } from "@chakra-ui/react";
import cssClasses from "./GalleryItem.module.css";

import React from "react";

const PlayButton = () => {
  return (
    <Grid
      width={{ base: "4.5rem", md: "7.31rem", "2xl": "7vw" }}
      sx={{ aspectRatio: "117/48" }}
      // border="1px solid yellow"
      gridColumn="1 / -1"
      gridRow="1 / -1"
      templateColumns="30% 1fr"
      alignItems="center"
      //   gap={{ base: "", lg: "0rem", "2xl": "1.3vw" }}
      paddingLeft={{ base: "0.5rem", md: "0.5rem", "2xl": "0.4vw" }}
      borderRadius={{ base: "2rem", md: "2rem", "2xl": "2vw" }}
      bgColor="rgb(151, 151, 151, 0.25)"
      //   border="1px solid red"
      justifySelf={"center"}
      alignSelf={"center"}
      zIndex={1}
      opacity={0}
      className={cssClasses.play_button}
      as="button"
    >
      <Box
      // border="1px solid yellow"
      >
        <Image
          src="/assets/icon-play.svg"
          alt="play icon"
          width="100%"
          // height="100%"
          borderRadius="1vw"
          zIndex={0}
        />
      </Box>
      <Text
        // border="1px solid blue"
        textStyle="headingXS"
      >
        Play
      </Text>
    </Grid>
  );
};

export default PlayButton;
