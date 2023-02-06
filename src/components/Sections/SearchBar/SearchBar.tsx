import { Box, Flex, Grid, Image, Input } from "@chakra-ui/react";
import React from "react";
import { usePageStore } from "../../../data/appState";

const SearchBar = () => {
  const { searchBarPlaceHolder, setSearchQuery } = usePageStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Flex
      className="search-bar"
      gridRow={{ lg: "4 / span 2" }}
      gridColumn={{ lg: "2" }}
      // overflow="hidden"
      gridAutoFlow="column"
      // border="2px solid white"
      gap={{ base: "1.5rem", md: "1rem", lg: "1vw" }}
      justifyContent={{ base: "start", lg: "start" }}
      paddingTop={{ base: "0.5rem", md: "0.5625rem", lg: "unset" }}
      paddingInline={{ base: "1.25rem", lg: "unset" }}
      paddingLeft={{ lg: "3vw" }}
      paddingRight={{ lg: "3vw" }}
      height="100%"
    >
      <Box
        // minH={0}
        // minW={0}
        height={{ base: "100%", lg: "50%" }}
        // width="100%"
        // border="1px solid white"
        sx={{
          aspectRatio: { base: "1", lg: "1" },
        }}
      >
        <Image
          src="/assets/icon-search.svg"
          alt="search icon"
          objectFit="contain"
          height={{ lg: "100%" }}
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
          textStyle="headingM"
          height={{ lg: "50%" }}
          variant="unstyled"
          // border="none"
          // border="2px solid white"
          borderRadius="0"
          // borderBottom="1px solid transparent"
          _focus={{ borderBottom: "1px solid #979797" }}
          placeholder={searchBarPlaceHolder}
          onChange={handleSearch}
        />
      </Box>
    </Flex>
  );
};

export default SearchBar;
