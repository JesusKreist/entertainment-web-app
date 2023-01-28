import { Box, Image } from "@chakra-ui/react";

interface NavLinkButtonProps {
  imageName: string;
  altText: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({
  imageName,
  altText,
}) => (
  <Box
    width={{ base: "1rem", md: "1.25rem", lg: "100%" }}
    // border="1px solid white"
  >
    <Image
      src={`/assets/${imageName}`}
      alt={altText}
      objectFit="cover"
      height="50%"
      margin="0 auto"
    />
  </Box>
);

export default NavLinkButton;
