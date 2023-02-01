import { Box } from "@chakra-ui/react";
import { AnyMovieOrShow } from "../../../data/data";

interface GalleryProps {
  mediaToDisplay: AnyMovieOrShow[];
}

const Gallery: React.FC<GalleryProps> = ({ mediaToDisplay }) => {
  return <Box>Gallery</Box>;
};

export default Gallery;
