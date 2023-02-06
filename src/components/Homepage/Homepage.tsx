import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { usePageStore } from "../../data/appState";
import { allShows, trendingShows } from "../../data/data";
import Carousel from "../Sections/Carousel/Carousel";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";

const Homepage = () => {
  const setPageCategory = usePageStore((state) => state.setPageCategory);
  useEffect(() => {
    setPageCategory("home");
  }, [setPageCategory]);

  const defaultContent = (
    <>
      <Section title="Trending" overflowX="scroll">
        <Carousel carouselItems={trendingShows} />
      </Section>

      <Section title="Recommended for you" overflowX="hidden">
        <Gallery mediaToDisplay={allShows} />
      </Section>
    </>
  );
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
      <MainContent mediaToDisplay={allShows} defaultContent={defaultContent} />
    </Grid>
  );
};

export default Homepage;
