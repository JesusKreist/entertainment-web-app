import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { usePageStore } from "../../data/appState";
import {
  allBookmarkedShows,
  bookmarkedMovies,
  bookmarkedSeries,
} from "../../data/data";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";

const Bookmarks = () => {
  const setPageCategory = usePageStore((state) => state.setPageCategory);
  useEffect(() => {
    setPageCategory("bookmarks");
  }, [setPageCategory]);

  const defaultContent = (
    <>
      <Section title="Bookmarked Movies">
        <Gallery mediaToDisplay={bookmarkedMovies} />
      </Section>

      <Section title="Bookmarked TV Series">
        <Gallery mediaToDisplay={bookmarkedSeries} />
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
      // overflowY="hidden"
    >
      <MainContent
        mediaToDisplay={allBookmarkedShows}
        defaultContent={defaultContent}
      />
      {/* <MainContent
        mediaToDisplay={bookmarkedSeries}
        defaultContent={defaultContentForSeries}
      /> */}

      {/* <Section title="Bookmarked Movies">
        <Gallery mediaToDisplay={bookmarkedMovies} />
      </Section>

      <Section title="Bookmarked TV Series">
        <Gallery mediaToDisplay={bookmarkedSeries} />
      </Section> */}
    </Grid>
  );
};

export default Bookmarks;
