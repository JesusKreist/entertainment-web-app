import { Grid, IconButton, Image } from "@chakra-ui/react";
import NavLinkButton from "../Icons/NavLinkButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ProfileAvatar from "./ProfileAvatar";

const NavBar = () => {
  return (
    <Grid
      as="nav"
      className="nav-bar"
      gridColumn={{ lg: "1" }}
      gridRow={{ lg: "3 / -3" }}
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      paddingInline={{ base: "1.25rem", lg: "unset" }}
      height={{ base: "100%", lg: "100%" }}
      width={{ base: "100%", md: "95%", lg: "100%" }}
      borderRadius={{ md: "0.625rem", lg: "1.25rem" }}
      bgColor="brand.semiDarkBlue"
      justifyContent={{ base: "space-between", lg: "unset" }}
      templateRows={{ lg: "repeat(20, 1fr)" }}
      gridAutoFlow={{ base: "column", lg: "row" }}
      margin={{ base: "0 auto", lg: "unset" }}
    >
      <Logo />
      <NavLinks />
      <ProfileAvatar />
    </Grid>
  );
};

export default NavBar;
