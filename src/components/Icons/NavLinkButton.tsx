import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
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
  const setPageCategory = usePageStore((state) => state.setPageCategory);
  // const currentPageCategory = usePageStore((state) => state.pageCategory);

  const src =
    pageCategory === currentPageCategory
      ? `/assets/icon-category-${pageCategory}.svg`
      : `/assets/${imageName}`;

  return (
    <Box
      as={Link}
      href={linkLocation}
      onClick={() => {
        setPageCategory(pageCategory);
      }}
      width={{ base: "1rem", md: "1.25rem", lg: "100%" }}

      // border="1px solid white"
    >
      <Image
        src={src}
        alt={altText}
        objectFit="cover"
        height="50%"
        margin="0 auto"
      />
    </Box>
  );
};

export default NavLinkButton;
