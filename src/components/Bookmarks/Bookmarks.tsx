import { Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePageStore } from "../../data/appState";
import {
  BookmarkedShow,
  dataFetcher,
  mapShowArrayToIsBookmarkedObject,
} from "../../data/data";
import { scrollBarReset } from "../misc";
import Gallery from "../Sections/Gallery/Gallery";
import Section from "../Sections/Section/Section";
import MainContent from "../UI/Layout/MainContent";
import useSWR from "swr";
import { InfinitySpin } from "react-loader-spinner";

const Bookmarks = () => {
  const { setPageCategory, setSearchQuery, updateShowBookmarksState } =
    usePageStore();
  const { data: session } = useSession();
  const [userBookmarks, setUserBookmarks] = useState<BookmarkedShow[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<BookmarkedShow[]>(
    []
  );
  const [bookmarkedSeries, setBookmarkedSeries] = useState<BookmarkedShow[]>(
    []
  );

  const { data, isLoading } = useSWR<BookmarkedShow[]>(
    "/api/shows?isBookmarked=true",
    dataFetcher
  );

  useEffect(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  useEffect(() => {
    setPageCategory("bookmarks");
  }, [setPageCategory]);

  useEffect(() => {
    if (session && data) {
      setUserBookmarks(data);
      updateShowBookmarksState(mapShowArrayToIsBookmarkedObject(data));
    }
  }, [session, data, updateShowBookmarksState]);

  useEffect(() => {
    if (userBookmarks.length > 0) {
      setBookmarkedMovies(
        userBookmarks.filter((show) => show.category === "Movie")
      );
      setBookmarkedSeries(
        userBookmarks.filter((show) => show.category === "TV Series")
      );
    }
  }, [userBookmarks]);

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
      <>
        {bookmarkedMovies.length > 0 && (
          <Section title="Bookmarked Movies">
            <Gallery mediaToDisplay={bookmarkedMovies} />
          </Section>
        )}

        {bookmarkedSeries.length > 0 && (
          <Section title="Bookmarked Series">
            <Gallery mediaToDisplay={bookmarkedSeries} />
          </Section>
        )}
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
      alignContent={isLoading ? "unset" : "start"}
      alignItems="start"
      paddingLeft={{
        base: isLoading ? "unset" : "1.25rem",
        lg: isLoading ? "unset" : "3vw",
      }}
      rowGap={{ base: "1rem", md: "1rem", lg: "2vw" }}
      overflowY="scroll"
      sx={scrollBarReset}
    >
      <MainContent
        mediaToDisplay={userBookmarks}
        defaultContent={defaultContent}
      />
    </Grid>
  );
};

export default Bookmarks;
