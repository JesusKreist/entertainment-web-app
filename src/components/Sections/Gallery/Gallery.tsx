import { Grid } from "@chakra-ui/react";
import { AnyShow } from "../../../data/data";
import GalleryItem from "./GalleryItem/GalleryItem";

interface GalleryProps {
  mediaToDisplay: AnyShow[];
}

const Gallery: React.FC<GalleryProps> = ({ mediaToDisplay }) => {
  return (
    <Grid
      className="gallery"
      gap={{ base: "1.25rem", "2xl": "1.5vw" }}
      gridTemplateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      // border="1px solid white"

      marginRight={{ base: "1rem", lg: "2.5vw" }}
    >
      {mediaToDisplay.map((item) => {
        return (
          <GalleryItem
            key={item.id}
            showId={item.id}
            src={item.thumbnail.regular.large}
            title={item.title}
            year={item.year}
            category={item.category === "Movie" ? "Movie" : "TV Series"}
            parentalRating={item.rating}
            youtubeUrl={item.youtubeUrl}
          />
        );
      })}
    </Grid>
  );
};

export default Gallery;
