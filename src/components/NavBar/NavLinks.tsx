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
      <NavLinkButton imageName="icon-nav-home.svg" altText="home icon" />
      <NavLinkButton imageName="icon-nav-movies.svg" altText="movies icon" />
      <NavLinkButton
        imageName="icon-nav-tv-series.svg"
        altText="tv series icon"
      />
      <NavLinkButton
        imageName="icon-nav-bookmark.svg"
        altText="bookmark icon"
      />
    </Grid>
  );
};

export default NavLinks;
