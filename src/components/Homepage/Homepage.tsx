import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePageStore } from "../../data/appState";
import { AnyShow, dataFetcher, mapShowArrayToIsBookmarkedObject, TrendingShow } from "../../data/data";
import { scrollBarReset } from "../misc";
import Carousel from "../Sections/Carousel/Carousel";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";
import useSWR from "swr";
import { InfinitySpin } from "react-loader-spinner";

const Homepage = () => {
  const { setPageCategory, setSearchQuery, updateShowBookmarksState } = usePageStore();

  const { data: trendingShowsResponse, isLoading: isTrendingShowsLoading } =
    useSWR<TrendingShow[]>("/api/shows?isTrending=true", dataFetcher);

  const { data: allShowsResponse, isLoading: isAllShowsLoading } = useSWR<AnyShow[]>(
    "/api/shows",
    dataFetcher
  );

  const [trendingShows, setTrendingShows] = useState<TrendingShow[]>([]);
  const [allShows, setAllShows] = useState<AnyShow[]>([]);

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  useEffect(() => {
    setPageCategory("home");
  }, [setPageCategory]);

  useEffect(() => {
    if (trendingShowsResponse) {
      setTrendingShows(trendingShowsResponse);
      updateShowBookmarksState(mapShowArrayToIsBookmarkedObject(trendingShowsResponse));
    }
  }, [trendingShowsResponse, updateShowBookmarksState]);

  useEffect(() => {
    if (allShowsResponse) {
      setAllShows(allShowsResponse);
      updateShowBookmarksState(mapShowArrayToIsBookmarkedObject(allShowsResponse));
    }
    
  }, [allShowsResponse, updateShowBookmarksState]);

  let defaultContent: JSX.Element;
  if (isTrendingShowsLoading || isAllShowsLoading) {
    defaultContent = (
      <Flex
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <InfinitySpin width="200" color="#FC4747" />
      </Flex>
    );
  } else {
    defaultContent = (
      <>
        <Section
          title="Trending"
          overflowX="scroll"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
              display: "none",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "red",
              borderRadius: "24px",
              display: "none",
            },
            "scrollbar-width": "none" /* Firefox */,
          }}
        >
          <Carousel carouselItems={trendingShows} />
        </Section>

        <Section title="Recommended for you" overflowX="hidden">
          <Gallery mediaToDisplay={allShows} />
        </Section>
      </>
    );
  }

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
      sx={scrollBarReset}
    >
      <MainContent mediaToDisplay={allShows} defaultContent={defaultContent} />
    </Grid>
  );
};

export default Homepage;
