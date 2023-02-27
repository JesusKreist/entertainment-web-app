import { Box, Flex, Grid, Image, useBreakpointValue } from "@chakra-ui/react";
import PlayButton from "./PlayButton";
import cssClasses from "./GalleryItem.module.css";
import BookmarkButton from "../../BookmarkButton";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";

interface GalleryItemImageProps {
  src: string;
  title: string;
  showId: string;
  youtubeUrl: string;
}
const GalleryItemImage: React.FC<GalleryItemImageProps> = ({
  src,
  title,
  showId,
  youtubeUrl,
}) => {
  const [isPreviewShowing, setIsPreviewShowing] = useState(false);
  const [timeOutVariable, setTimeOutVariable] = useState<NodeJS.Timeout>();
  const isAtleastMediumScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const setIsPreviewToTrueAfterDelay = () => {
    console.log(youtubeUrl);
    setTimeOutVariable(
      setTimeout(() => {
        setIsPreviewShowing(true);
      }, 2000)
    );
  };

  return (
    <Grid
      width="100%"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
      className={cssClasses.container}
      position="relative"
      onMouseOver={setIsPreviewToTrueAfterDelay}
      onMouseOut={() => {
        clearTimeout(timeOutVariable!);
        setIsPreviewShowing(false);
      }}
      // border={{
      //   base: "2px solid purple",
      //   sm: "2px solid pink",

      //   md: "2px solid yellow",
      //   lg: "2px solid red",
      //   xl: "2px solid blue",
      //   "2xl": "2px solid green",
      // }}
    >
      {isPreviewShowing && isAtleastMediumScreen && (
        <Box gridColumn="1 / -1" gridRow="1 / -1" position="relative">
          <ReactPlayer
            className="react-player"
            url={youtubeUrl}
            height="100%"
            width="100%"
            controls={false}
            playing={true}
            loop={true}
            volume={0}
            muted={true}
          />
        </Box>
      )}

      {(!isPreviewShowing || !isAtleastMediumScreen) && (
        <>
          <BookmarkButton
            showId={showId}
            gridRow="2 / 6"
            gridColumn="13 / 16"
          />

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
        </>
      )}

      <PlayButton />
    </Grid>
  );
};

export default GalleryItemImage;
