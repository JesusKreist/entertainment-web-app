import { Box } from "@chakra-ui/react";
import React from "react";
import { trendingMoviesAndShows } from "../../data/data";
import Carousel from "../Sections/Carousel/Carousel";
import Section from "../Sections/Section/Section";

const Homepage = () => {
  const allTrendingMoviesAndShows = trendingMoviesAndShows;

  return (
    <Section title="Trending" gridRow="4 / span 9" overflowX="scroll">
      <Carousel carouselItems={allTrendingMoviesAndShows} />
    </Section>
  );
  return (
    <Box
      height="200vh"
      // overflow="scroll"
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
    >
      Homepage
    </Box>
  );
  return (
    <Box
      border="2px solid white"
      marginTop="5vh"
      // paddingTop={{ xl: "25%", "2xl": "29.165%" }}
    >
      Iono
    </Box>
  );
};

export default Homepage;
