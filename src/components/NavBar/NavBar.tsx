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
      gridColumn="1"
      paddingBlock={{ lg: "30%", xl: "25%", "2xl": "29.165%" }}
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
      <Logo />
      <NavLinks />
      <ProfileAvatar />
    </Flex>
  );
};

export default NavBar;
