import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { allShows, trendingShows } from "../../data/data";
import Carousel from "../Sections/Carousel/Carousel";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";

const Homepage = () => {
  return (
    <Grid
      // border={{
      //   base: "2px solid purple",
      //   md: "2px solid yellow",
      //   lg: "2px solid red",
      //   xl: "2px solid blue",
      //   "2xl": "2px solid green",
      // }}
      gridColumn={{ lg: "2" }}
      gridRow={{ lg: "6 / -1" }}
      height="100%"
      alignContent="start"
      alignItems="start"
      paddingLeft={{ base: "1.25rem", lg: "3vw" }}
      rowGap={{ base: "1rem", md: "1rem", lg: "2vw" }}
      overflowY="scroll"
    >
      <Section title="Trending" overflowX="scroll">
        <Carousel carouselItems={trendingShows} />
      </Section>

      <Section title="Recommended for you" overflowX="hidden">
        <Gallery mediaToDisplay={allShows} />
      </Section>
    </Grid>
  );
};

export default Homepage;
