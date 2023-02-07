import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const CarouselItemTextDot = () => (
  <Box
    height="10%"
    rounded="full"
    sx={{
      aspectRatio: "1",
    }}
    bgColor="white"
  ></Box>
);

interface TopTextProps {
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
}

const TopText: React.FC<TopTextProps> = ({
  year,
  category,
  parentalRating,
}) => {
  const categoryIcon =
    category === "Movie"
      ? "assets/icon-category-movie.svg"
      : "assets/icon-category-tv.svg";

  return (
    <Flex
      // border="1px solid white"
      gridRow="11 / span 2"
      gridColumn="2 / -2"
      gap={{ base: "0.5rem", "2xl": "0.4vw" }}
      textStyle="paragraphMedium"
      alignItems="center"
      opacity={0.75}
      zIndex={1}
    >
      <Text>{year}</Text>

      <CarouselItemTextDot />

      <Box
        height={{ base: "0.7rem", md: "50%" }}
        sx={{
          aspectRatio: "1",
        }}
        // border="1px solid red"
        marginRight="-0.1vw"
      >
        <Image
          src={categoryIcon}
          alt="category icon"
          margin="0 auto"
          // border="1px solid white"
          height="100%"
          objectFit="contain"
        />
      </Box>

      <Text whiteSpace="nowrap">{category}</Text>

      <CarouselItemTextDot />

      <Text>{parentalRating}</Text>
    </Flex>
  );
};

export default TopText;
