import { Box, BoxProps, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

interface SectionProps extends BoxProps {
  children: React.ReactNode;
  title: string;
}
const Section: React.FC<SectionProps> = (props) => {
  const { title, children, ...styleProps } = props;
  // return <Box>No section</Box>;
  return (
    <>
      <Text
        textStyle="headingL"
        marginTop={{ base: "1rem", lg: "1vw", xl: "" }}
        marginBottom={{
          base: "-0.5rem",
          md: "-0.5rem",
          lg: "-0.5vw",
          xl: "-0.9vw",
        }}
      >
        {title}
      </Text>
      <Box {...styleProps}>{children}</Box>
    </>
  );
};

export default Section;
