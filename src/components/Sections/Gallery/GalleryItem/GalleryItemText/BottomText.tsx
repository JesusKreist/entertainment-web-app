import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface BottomTextProps {
  title: string;
}

const BottomText: React.FC<BottomTextProps> = ({ title }) => {
  return (
    <Box
      // border="1px solid white"
      gridRow="4 / span 4"
      gridColumn="1 / -1"
      zIndex={1}
    >
      <Text textStyle="headingXS">{title}</Text>
    </Box>
  );
};

export default BottomText;
