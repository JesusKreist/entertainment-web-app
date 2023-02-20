import { Flex, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { usePageStore } from "../../data/appState";
import NavLinkButton from "../Icons/NavLinkButton";

type NavLinksProps = {
  isLoggedin: boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({ isLoggedin }) => {
  const currentPageCategory = usePageStore((state) => state.pageCategory);

  return (
    <Grid
      className="nav-links"
      gridRow={{ lg: "5 / span 5" }}
      gap={{ base: "2rem", lg: "1vh" }}
      templateRows={{ lg: "repeat(4, 1fr)" }}
      width="100%"
      gridAutoFlow={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", lg: "unset" }}
    >
      <NavLinkButton
        imageName="icon-nav-home.svg"
        altText="home icon"
        linkLocation="/"
        pageCategory="home"
        currentPageCategory={currentPageCategory}
      />
      <NavLinkButton
        imageName="icon-nav-movies.svg"
        altText="movies icon"
        linkLocation="movies"
        pageCategory="movies"
        currentPageCategory={currentPageCategory}
      />
      <NavLinkButton
        imageName="icon-nav-tv-series.svg"
        altText="tv series icon"
        linkLocation="tv-series"
        pageCategory="series"
        currentPageCategory={currentPageCategory}
      />

      {isLoggedin && (
        <NavLinkButton
          imageName="icon-nav-bookmark.svg"
          altText="bookmark icon"
          linkLocation="bookmarks"
          pageCategory="bookmarks"
          currentPageCategory={currentPageCategory}
        />
      )}
    </Grid>
  );
};

export default NavLinks;
