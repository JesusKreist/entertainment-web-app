import { Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePageStore } from "../../data/appState";
import {
  dataFetcher,
  mapShowArrayToIsBookmarkedObject,
  Series,
} from "../../data/data";
import { scrollBarReset } from "../misc";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";
import useSWR from "swr";
import { InfinitySpin } from "react-loader-spinner";

const TVSeries: React.FC = () => {
  const { setPageCategory, setSearchQuery, updateShowBookmarksState } =
    usePageStore();

  const [tvSeriesToDisplay, setTVSeriesToDisplay] = useState<Series[]>([]);

  const { data, isLoading } = useSWR<Series[]>(
    "/api/shows?category=TV Series",
    dataFetcher
  );

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  useEffect(() => {
    setPageCategory("series");
  }, [setPageCategory]);

  useEffect(() => {
    if (data) {
      setTVSeriesToDisplay(data);
      updateShowBookmarksState(mapShowArrayToIsBookmarkedObject(data));
    }
  }, [data, updateShowBookmarksState]);

  let defaultContent: JSX.Element;
  if (isLoading) {
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
      <Section title="TV Series" overflowX="hidden">
        <Gallery mediaToDisplay={tvSeriesToDisplay} />
      </Section>
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
      <MainContent
        mediaToDisplay={tvSeriesToDisplay}
        defaultContent={defaultContent}
      />
    </Grid>
  );
};

export default TVSeries;
