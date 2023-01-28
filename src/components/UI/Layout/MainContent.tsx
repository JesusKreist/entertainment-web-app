import { Box } from "@chakra-ui/react";
import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box
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
      gridRow={{ lg: "3 / -1" }}
      height="100%"
    >
      {children}
    </Box>
  );
};

export default MainContent;
