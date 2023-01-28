import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  IconButton,
  Image,
} from "@chakra-ui/react";
import NavLinkButton from "../Icons/NavLinkButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ProfileAvatar from "./ProfileAvatar";

const NavBar = () => {
  // return <Box></Box>;
  return (
    <Grid
      as="nav"
      className="nav-bar"
      gridColumn={{ lg: "1" }}
      gridRow={{ lg: "3 / -3" }}
      // paddingBlock={{ lg: "30%", xl: "25%", "2xl": "29.165%" }}
      paddingInline={{ base: "2rem", lg: "unset" }}
      // gap="8%"
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      height={{ base: "100%", lg: "100%" }}
      // width={{ base: "100%", md: "95%", lg: "100%" }}
      margin={{ base: "0 auto", lg: "unset" }}
      borderRadius={{ md: "0.625rem", lg: "1.25rem" }}
      bgColor="brand.semiDarkBlue"
      // direction={{ lg: "column" }}
      // alignItems="center"
      // justifyContent={{ base: "space-between", lg: "unset" }}
      justifyItems="center"
      templateRows="repeat(20, 1fr)"
    >
      {/* <Box></Box> */}
      <Logo />
      <NavLinks />
      <ProfileAvatar />
    </Grid>
  );
};

export default NavBar;
