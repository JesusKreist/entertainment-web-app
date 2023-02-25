import { Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePageStore } from "../../data/appState";
import {
  dataFetcher,
  mapShowArrayToIsBookmarkedObject,
  Movie,
} from "../../data/data";
import { scrollBarReset } from "../misc";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";
import useSWR from "swr";
import { InfinitySpin } from "react-loader-spinner";

const Movies = () => {
  const { setPageCategory, setSearchQuery, updateShowBookmarksState } =
    usePageStore();
  const [moviesToDisplay, setMoviesToDisplay] = useState<Movie[]>([]);

  const { data, isLoading } = useSWR<Movie[]>(
    "/api/shows?category=Movie",
    dataFetcher
  );

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  useEffect(() => {
    setPageCategory("movies");
  }, [setPageCategory]);

  useEffect(() => {
    if (data) {
      setMoviesToDisplay(data);
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
      <Section title="Movies" overflowX="hidden">
        <Gallery mediaToDisplay={moviesToDisplay} />
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
        mediaToDisplay={moviesToDisplay}
        defaultContent={defaultContent}
      />
      {/* {!!searchQuery ? (
        <Section
          title={`Found ${filteredMovies.length} result${
            filteredMovies.length > 1 ? "s" : ""
          } for '${searchQuery}'`}
          overflowX="hidden"
        >
          <Gallery mediaToDisplay={filteredMovies} />
        </Section>
      ) : (
        <Section title="Movies" overflowX="hidden">
          <Gallery mediaToDisplay={movies} />
        </Section>
      )} */}
    </Grid>
  );
};

export default Movies;
