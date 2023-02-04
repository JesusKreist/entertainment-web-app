import { Grid } from "@chakra-ui/react";
import { movies } from "../../data/data";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";

const Movies = () => {
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
      // overflowY="hidden"
    >
      {/* <Section
        title="Movies"
        // paddingRight={{ base: "", md: "unset" }}
        overflowX="scroll"
        // gridRow={{ lg: "4 / span 6", xl: "4 / span 9", "2xl": "4 / span 9" }}
      >
        <Carousel carouselItems={allTrendingMoviesAndShows} />
      </Section> */}

      <Section
        title="Movies"
        // paddingRight={{ base: "", md: "unset" }}
        // overflowX="scroll"
        overflowX="hidden"

        // gridRow={{ lg: "4 / span 6", xl: "4 / span 9", "2xl": "4 / span 9" }}
      >
        <Gallery mediaToDisplay={movies} />
      </Section>
    </Grid>
  );
};

export default Movies;
