import { Box } from "@chakra-ui/react";
import React from "react";
import { trendingMoviesAndShows } from "../../data/data";
import Carousel from "../Sections/Carousel/Carousel";
import Section from "../Sections/Section/Section";

const Homepage = () => {
  const allTrendingMoviesAndShows = trendingMoviesAndShows;

  return (
    <>
      <Section
        title="Trending"
        // gridRow={{ lg: "4 / span 6", xl: "4 / span 9", "2xl": "4 / span 9" }}
        overflowX="scroll"
      >
        <Carousel carouselItems={allTrendingMoviesAndShows} />
      </Section>
      <Box>dfiff</Box>
    </>
  );
};

export default Homepage;
