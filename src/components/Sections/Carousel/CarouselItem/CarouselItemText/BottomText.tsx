import { Box, Text } from "@chakra-ui/react";

interface BottomTextProps {
  title: string;
}

const BottomText: React.FC<BottomTextProps> = ({ title }) => {
  return (
    <Box
      // border="1px solid white"
      gridRow="13 / span 3"
      gridColumn="2 / -2"
      zIndex={1}
    >
      <Text textStyle="headingS">{title}</Text>
    </Box>
  );
};

export default BottomText;
