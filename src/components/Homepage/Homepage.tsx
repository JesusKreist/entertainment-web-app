import { Box } from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  return null;
  return (
    <Box
      height="200vh"
      // overflow="scroll"
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
    >
      Homepage
    </Box>
  );
  return (
    <Box
      border="2px solid white"
      marginTop="5vh"
      // paddingTop={{ xl: "25%", "2xl": "29.165%" }}
    >
      Iono
    </Box>
  );
};

export default Homepage;
