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
      alignContent={{ base: "center", lg: "start" }}
      // templateRows={{
      //   base: "1.5rem 11.3125rem minmax(0, 1fr)",
      //   md: "2rem 18.4375rem minmax(0, 1fr)",
      //   lg: "repeat(22, minmax(0, 1fr))",
      // }}
      // overflow="scroll"
      paddingLeft={{ lg: "3vw" }}
      rowGap={{ lg: "3vw" }}
    >
      {children}
    </Grid>
  );
};

export default MainContent;
