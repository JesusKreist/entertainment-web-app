import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { usePageStore } from "../../data/appState";
import { Series } from "../../data/data";
import { scrollBarReset } from "../misc";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";

type TVSeriesProps = {
  tvSeriesToDisplay: Series[];
};
const TVSeries: React.FC<TVSeriesProps> = ({ tvSeriesToDisplay }) => {
  const { setPageCategory, setSearchQuery } = usePageStore();

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  useEffect(() => {
    setPageCategory("series");
  }, [setPageCategory]);

  const defaultContent = (
    <Section title="TV Series" overflowX="hidden">
      <Gallery mediaToDisplay={tvSeriesToDisplay} />
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
