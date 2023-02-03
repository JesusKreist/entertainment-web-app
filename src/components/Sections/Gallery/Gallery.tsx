import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import { AnyMovieOrShow } from "../../../data/data";

interface GalleryItemTextProps {
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
}

const GalleryItemTextDot = () => (
  <Box
    height="10%"
    rounded="full"
    sx={{
      aspectRatio: "1",
    }}
    bgColor="white"
  ></Box>
);

const GalleryItemText: React.FC<GalleryItemTextProps> = ({
  year,
  category,
  parentalRating,
  title,
}) => {
  const categoryIcon =
    category === "Movie"
      ? "assets/icon-category-movie.svg"
      : "assets/icon-category-tv.svg";

  return (
    <>
      <Flex
        // border="1px solid white"
        gridRow="1 / span 3"
        gridColumn="1 / -1"
        gap="0.4vw"
        textStyle="paragraphSmall"
        alignItems="center"
        opacity={0.75}
        zIndex={1}
        paddingTop="2%"
      >
        <Text>{year}</Text>

        <GalleryItemTextDot />

        <Box
          height={{ base: "1rem", md: "1.25rem", lg: "50%" }}
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

        <GalleryItemTextDot />

        <Text>{parentalRating}</Text>
      </Flex>

      <Box
        // border="1px solid white"
        gridRow="4 / span 4"
        gridColumn="1 / -1"
        zIndex={1}
      >
        <Text textStyle="headingXS">{title}</Text>
      </Box>
    </>
  );
};

interface GalleryItemProps {
  src: string;
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  year,
  src,
  category,
  parentalRating,
  title,
}) => {
  return (
    <Grid
      templateRows="77% 1fr"
      // border="1px solid red"
      sx={{
        aspectRatio: { base: "24/14", md: "280/226" },
      }}
    >
      <Box
        width="100%"
        // border="1px solid yellow"
      >
        <Image
          src={src}
          alt={title}
          width="100%"
          height="100%"
          borderRadius="1vw"
        />
      </Box>
      <Grid
        // border="1px solid white"
        templateRows="repeat(7, minmax(0, 1fr))"
        templateColumns="repeat(16, minmax(0, 1fr))"
      >
        <GalleryItemText
          year={year}
          category={category}
          parentalRating={parentalRating}
          title={title}
        />
      </Grid>
    </Grid>
  );
};

interface GalleryProps {
  mediaToDisplay: AnyMovieOrShow[];
}

const Gallery: React.FC<GalleryProps> = ({ mediaToDisplay }) => {
  return (
    <Grid
      className="carousel"
      // width="100%"
      gap="1.5vw"
      // overflow="scroll"
      // gridAutoFlow="column"
      // gridAutoColumns="repeat(auto-fit, minmax(250px, 500px))"
      gridTemplateColumns="repeat(4, 1fr)"
      // border="1px solid white"
      // height="3vh"
      // paddingRight={{ lg: "3vw" }}
      marginRight="3vw"
    >
      {/* <GalleryItem /> */}
      {mediaToDisplay.map((item) => {
        return (
          <GalleryItem
            key={item.title}
            src={item.thumbnail.regular.large}
            title={item.title}
            year={item.year}
            category={item.category === "Movie" ? "Movie" : "TV Series"}
            parentalRating={item.rating}
          />
        );
      })}
    </Grid>
  );
};

export default Gallery;
