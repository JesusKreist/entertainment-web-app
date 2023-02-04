import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import NavLinkButton from "../Icons/NavLinkButton";

const NavLinks = () => {
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
      />
      <NavLinkButton
        imageName="icon-nav-movies.svg"
        altText="movies icon"
        linkLocation="movies"
      />
      <NavLinkButton
        imageName="icon-nav-tv-series.svg"
        altText="tv series icon"
        linkLocation="tv-series"
      />
      <NavLinkButton
        imageName="icon-nav-bookmark.svg"
        altText="bookmark icon"
        linkLocation="bookmarks"
      />
    </Grid>
  );
};

export default NavLinks;
