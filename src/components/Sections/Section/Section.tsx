import { Box, BoxProps, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

interface SectionProps extends BoxProps {
  children: React.ReactNode;
  title: string;
}
const Section: React.FC<SectionProps> = (props) => {
  const { title, children, ...styleProps } = props;
  return (
    <Flex {...styleProps} direction="column" gap="1vh" flexShrink={0}>
      <Text textStyle="headingL">{title}</Text>
      {children}
    </Flex>
  );
};

export default Section;
