import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { usePageStore } from "../../data/appState";
import { AnyShow, Movie, movies, Series } from "../../data/data";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";

interface MainContentProps {
  mediaToDisplay: AnyShow[];
  defaultContent: JSX.Element;
}
const MainContent: React.FC<MainContentProps> = ({
  mediaToDisplay,
  defaultContent,
}) => {
  const { searchQuery } = usePageStore();

  const filteredContent = mediaToDisplay.filter((media) =>
    media.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return !!searchQuery ? (
    <Section
      title={`Found ${filteredContent.length} result${
        filteredContent.length > 1 ? "s" : ""
      } for '${searchQuery}'`}
      overflowX="hidden"
    >
      <Gallery mediaToDisplay={filteredContent} />
    </Section>
  ) : (
    defaultContent
  );
};

const Movies = () => {
  const { setPageCategory } = usePageStore();

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
