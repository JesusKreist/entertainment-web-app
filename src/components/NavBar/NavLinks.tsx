import { Flex } from "@chakra-ui/react";
import React from "react";
import NavLinkButton from "../Icons/NavLinkButton";

const NavLinks = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      className="nav-links"
      border="1px solid white"
      height={{ xl: "200px", "2xl": "26%" }}
      justifyContent="space-between"
      style={{ aspectRatio: "0.1" }}
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
    </Flex>
  );
};

export default NavLinks;
