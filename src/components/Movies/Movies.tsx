import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { usePageStore } from "../../data/appState";
import { movies } from "../../data/data";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";

const Movies = () => {
  const { setPageCategory, setSearchQuery } = usePageStore();

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  useEffect(() => {
    setPageCategory("movies");
  }, [setPageCategory]);

  const defaultContent = (
    <Section title="Movies" overflowX="hidden">
      <Gallery mediaToDisplay={movies} />
    </Section>
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
      <MainContent mediaToDisplay={movies} defaultContent={defaultContent} />
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
