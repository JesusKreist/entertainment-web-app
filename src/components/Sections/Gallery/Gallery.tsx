import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import { AnyMovieOrShow } from "../../../data/data";
import GalleryItem from "./GalleryItem/GalleryItem";

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
      gridTemplateColumns={{ md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
      // border="1px solid white"
      // height="3vh"
      // paddingRight={{ lg: "3vw" }}
      marginRight={{ md: "1.25rem", lg: "3vw" }}
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
