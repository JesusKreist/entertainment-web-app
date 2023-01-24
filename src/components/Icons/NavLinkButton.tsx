import { Box, Image } from "@chakra-ui/react";

interface NavLinkButtonProps {
  imageName: string;
  altText: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({
  imageName,
  altText,
}) => (
  <Box width={{ base: "1rem", md: "1.25rem", lg: "100%" }}>
    <Image
      src={`/assets/${imageName}`}
      alt={altText}
      objectFit="cover"
      width={"100%"}
    />
  </Box>
);

export default NavLinkButton;
