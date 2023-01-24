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
  return (
    <Flex
      gridColumn={{ lg: "1" }}
      paddingBlock={{ lg: "30%", xl: "25%", "2xl": "29.165%" }}
      gap="8%"
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      height={{ base: "100%", lg: "90%" }}
      width={{ base: "95%", lg: "100%" }}
      margin={{ base: "0 auto", lg: "unset" }}
      borderRadius={{ base: "0.625rem", lg: "1.25rem" }}
      bgColor="brand.semiDarkBlue"
      direction="column"
      alignItems="center"
    >
      <Box></Box>
      {/* <Logo />
      <NavLinks />
      <ProfileAvatar /> */}
    </Flex>
  );
};

export default NavBar;
