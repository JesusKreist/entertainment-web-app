import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { PageCategory, usePageStore } from "../../data/appState";

interface NavLinkButtonProps {
  imageName: string;
  altText: string;
  linkLocation: string;
  pageCategory: PageCategory;
  currentPageCategory: PageCategory;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({
  imageName,
  altText,
  linkLocation,
  pageCategory,
  currentPageCategory,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const src = () => {
    if (pageCategory === currentPageCategory) {
      return `/assets/icon-category-${pageCategory}.svg`;
    } else if (isHovered) {
      return `/assets/icon-category-${pageCategory}-red.svg`;
    } else {
      return `/assets/${imageName}`;
    }
  };

  return (
    <Box
      as={Link}
      href={linkLocation}
      width={{ base: "1rem", md: "1.25rem", lg: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      // border="1px solid white"
    >
      <Image
        src={src()}
        alt={altText}
        objectFit="cover"
        height="50%"
        margin="0 auto"
      />
    </Box>
  );
};

export default NavLinkButton;
