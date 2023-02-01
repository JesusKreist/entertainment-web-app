import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../Sections/SearchBar/SearchBar";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Grid
      as="main"
      className="main-content"
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      gridColumn={{ lg: "2" }}
      gridRow={{ lg: "6 / -1" }}
      height="100%"
      // alignContent="start"
      // alignItems="start"
      paddingLeft={{ lg: "3vw" }}
      rowGap={{ md: "1rem", lg: "2vw" }}
    >
      {children}
    </Grid>
  );
};

export default MainContent;
