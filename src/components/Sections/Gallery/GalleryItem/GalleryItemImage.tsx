import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import PlayButton from "./PlayButton";
import cssClasses from "./GalleryItem.module.css";

interface GalleryItemImageProps {
  src: string;
  title: string;
}
const GalleryItemImage: React.FC<GalleryItemImageProps> = ({ src, title }) => {
  return (
    <Grid
      width="100%"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
      className={cssClasses.container}

      // border="1px solid yellow"
    >
      <Flex
        // border="1px solid white"
        gridRow="2 / 6"
        gridColumn="13 / 16"
        justifyContent="center"
        zIndex={1}
      >
        <Box
          as="button"
          height={{ base: "2.5rem", md: "2.7rem", "2xl": "3vw" }}
          // border="1px solid red"
          sx={{
            aspectRatio: "1",
          }}
          rounded="full"
          bgColor="rgb(151, 151, 151, 0.5)"
        >
          <Image
            src="assets/figma-bookmark-icon.svg"
            alt="bookmark icon"
            height="50%"
            margin="0 auto"
          />
        </Box>
      </Flex>
      <PlayButton />
      <Image
        gridRow="1 / -1"
        gridColumn="1 / -1"
        src={src}
        alt={title}
        width="100%"
        height="100%"
        className={cssClasses.image}
        borderRadius={{ base: "1vw", "2xl": "1vw" }}
      />
    </Grid>
  );
};

export default GalleryItemImage;
