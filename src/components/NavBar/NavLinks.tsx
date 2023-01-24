import { Flex } from "@chakra-ui/react";
import React from "react";
import NavLinkButton from "../Icons/NavLinkButton";

const NavLinks = () => {
  return (
    <>
      <Flex
        display={{ base: "none", lg: "flex" }}
        direction="column"
        alignItems="center"
        className="nav-links-xl"
        //   border="1px solid white"
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

      <Flex
        // direction="column"
        alignItems="center"
        className="nav-links-base-to-lg"
        //   border="1px solid white"
        height={{ lg: "12.5rem" }}
        width={{ lg: "1rem" }}
        justifyContent="space-between"
        display={{ base: "flex", xl: "none" }}
        gap={{ base: "1.5rem", md: "2rem" }}
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
    </>
  );
};

export default NavLinks;
