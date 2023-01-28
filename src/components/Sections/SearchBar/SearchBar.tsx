import { Box, Flex, Grid, Image, Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = () => {
  return (
    <Flex
      className="search-bar"
      gridRow={{ lg: "2 / span 2" }}
      paddingInline={{ base: "1.25rem", lg: "unset" }}
      // overflow="hidden"
      gridAutoFlow="column"
      // border="2px solid white"
      gap={{ base: "1.5rem", md: "1.5rem", lg: "1vw" }}
      justifyContent={{ base: "start", lg: "start" }}
      paddingRight={{ lg: "3vw" }}
    >
      <Box
        minH={0}
        minW={0}
        height="100%"
        // border="1px solid white"
        sx={{
          aspectRatio: "0.5",
        }}
      >
        <Image
          src="/assets/icon-search.svg"
          alt="search icon"
          objectFit="contain"
          // width={{ lg: "100%" }}
          height={{ lg: "50%" }}
          width="100%"
          margin="0 auto"
          // border="2px solid white"
          // rounded={"full"}
        />
      </Box>
      <Box
        sx={{ caretColor: "#FC4747" }}
        width="100%"
        alignSelf={{ base: "end", lg: "unset" }}
      >
        <Input
          textStyle="h3"
          height={{ lg: "50%" }}
          variant="unstyled"
          border="none"
          // border="2px solid white"
          borderRadius="0"
          borderBottom="1px solid transparent"
          _focus={{ borderBottom: "1px solid #979797" }}
          placeholder="Search for Movies or TV series"
        />
      </Box>
    </Flex>
  );
};

export default SearchBar;
