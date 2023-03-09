import { Grid, Box, useBreakpointValue } from "@chakra-ui/react";
import CarouselItemImage from "./CarouselItemImage";
import CarouselItemText from "./CarouselItemText/CarouselItemText";
import PlayButton from "./PlayButton";
import cssClasses from "./CarouselItemImage.module.css";
import BookmarkButton from "../../BookmarkButton";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";

interface CarouselItemProps {
  src: string;
  showId: string;
  year: number;
  category: "Movie" | "TV Series";
  parentalRating: string;
  title: string;
  youtubeUrl: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  src,
  year,
  category,
  parentalRating,
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
    setTimeOutVariable(
      setTimeout(() => {
        setIsPreviewShowing(true);
      }, 2000)
    );
  };

  return (
    <Grid
      className={cssClasses.container}
      minW={{ base: "max(240px, 64vw)", md: "max(470px, 22.46vw)" }}
      sx={{
        aspectRatio: { base: "24/14", md: "47/23" },
      }}
      borderRadius="1vw"
      templateRows="repeat(16, minmax(0, 1fr))"
      templateColumns="repeat(16, minmax(0, 1fr))"
      position="relative"
      onMouseEnter={setIsPreviewToTrueAfterDelay}
      onMouseLeave={() => {
        clearTimeout(timeOutVariable!);
        setIsPreviewShowing(false);
      }}
    >
      {isPreviewShowing && isAtleastMediumScreen && (
        <Box
          gridColumn="1 / -1"
          gridRow="1 / -1"
          position="relative"
          display={{ base: "none", md: "block" }}
        >
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
            gridRow="2 / 5"
            gridColumn="14 / 16"
          />

          <CarouselItemText
            year={year}
            category={category}
            parentalRating={parentalRating}
            title={title}
          />

          <CarouselItemImage src={src} title={title} />
        </>
      )}

      <PlayButton />
    </Grid>
  );
};

export default CarouselItem;
