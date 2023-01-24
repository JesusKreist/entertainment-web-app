import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  IconButton,
  Image,
} from "@chakra-ui/react";
import NavLinkButton from "../Icons/NavLinkButton";

const NavBar = () => {
  return (
    <Flex
      gridColumn="1"
      paddingBlock="29.165%"
      gap="8%"
      // border={{
      //   base: "2px solid purple",
      //   md: "2px solid yellow",
      //   lg: "2px solid red",
      //   xl: "2px solid blue",
      //   "2xl": "2px solid green",
      // }}
      height="90%"
      borderRadius="1.25rem"
      bgColor="brand.semiDarkBlue"
      direction="column"
      alignItems="center"
    >
      {/* <Box
        className="logo"
        border="1px solid white"
        width="2rem"
        height="1.63rem"
      ></Box> */}

      {/* <Box
        className="nav-links"
        border="1px solid white"
        width="1.25rem"
        height="12.5rem"
      ></Box> */}

      <AspectRatio
        className="logo"
        // border="1px solid white"
        width="33.33%"
        ratio={5 / 4}
        // height="1.63rem"
      >
        <Image src="/assets/logo.svg" alt="logo" objectFit="cover" />
      </AspectRatio>

      <Flex
        direction="column"
        alignItems="center"
        className="nav-links"
        // border="1px solid white"
        height="26%"
        justifyContent="space-between"
        style={{ aspectRatio: "0.1" }}
        // ratio={0.1}
      >
        {/* <Box border="1px solid white" width="1.5rem" height="1.5rem"></Box>
        <Box border="1px solid white" width="1.5rem" height="1.5rem"></Box>
        <Box border="1px solid white" width="1.5rem" height="1.5rem"></Box>
        <Box border="1px solid white" width="1.5rem" height="1.5rem"></Box> */}
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

      <AspectRatio
        width="41.67%"
        ratio={1 / 1}
        className="avatar"
        justifySelf="end"
        // border="1px solid white"
        marginTop="auto"
      >
        <Image src="/assets/image-avatar.png" alt="avatar" objectFit="cover" />
      </AspectRatio>
    </Flex>
  );
};

export default NavBar;
