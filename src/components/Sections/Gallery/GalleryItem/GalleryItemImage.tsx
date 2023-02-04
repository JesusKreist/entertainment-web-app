import { Box, Image } from "@chakra-ui/react";

interface GalleryItemImageProps {
  src: string;
  title: string;
}
const GalleryItemImage: React.FC<GalleryItemImageProps> = ({ src, title }) => {
  return (
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
  );
};

export default GalleryItemImage;
