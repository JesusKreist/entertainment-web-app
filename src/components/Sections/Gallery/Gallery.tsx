import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import { AnyShow } from "../../../data/data";
import GalleryItem from "./GalleryItem/GalleryItem";

interface GalleryProps {
  mediaToDisplay: AnyShow[];
}

const Gallery: React.FC<GalleryProps> = ({ mediaToDisplay }) => {
  return (
    <Grid
      className="gallery"
      // width="100%"
      gap={{ base: "1.25rem", "2xl": "1.5vw" }}
      // overflow="scroll"
      // gridAutoFlow="column"
      // gridAutoColumns="repeat(auto-fit, minmax(250px, 500px))"
      gridTemplateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      // border="1px solid white"
      // height="3vh"
      // paddingRight={{ lg: "3vw" }}
      marginRight={{ base: "1.25rem", lg: "3vw" }}
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
            isBookmarked={item.isBookmarked}
          />
        );
      })}
    </Grid>
  );
};

export default Gallery;
