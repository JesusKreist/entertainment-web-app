import { Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { usePageStore } from "../../../data/appState";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { setPageCategory, setSearchBarPlaceHolder } = usePageStore();
  const { pathname } = useRouter();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setPageCategory("home");
        setSearchBarPlaceHolder("home");
        break;
      case "/movies":
        setPageCategory("movies");
        setSearchBarPlaceHolder("movies");
        break;
      case "/tv-series":
        setPageCategory("series");
        setSearchBarPlaceHolder("series");
        break;
      case "/bookmarks":
        setPageCategory("bookmarks");
        setSearchBarPlaceHolder("bookmarks");
        break;
      default:
        break;
    }
  }, [pathname, setPageCategory, setSearchBarPlaceHolder]);

  return (
    <Grid
      as="main"
      className="layout-grid"
      paddingLeft={{ lg: "3vw" }}
      paddingTop={{ md: "1.5625rem", lg: "unset" }}
      // templateColumns={{ lg: "repeat(12, 1fr)" }}
      templateColumns={{ lg: "6.67vw 1fr" }}
      templateRows={{
        base: "4.5rem max-content 1fr",
        md: "4.5rem max-content 1fr",
        lg: "repeat(24, minmax(0, 1fr))",
      }}
      rowGap={{ base: "1rem", md: "1rem", lg: "unset" }}
      minH="100vh"
      maxH="100vh"
      // gap={{ base: "1.25rem", lg: "1.95vw" }}
      // border={{
      //   base: "2px solid purple",
      //   md: "2px solid yellow",
      //   lg: "2px solid red",
      //   xl: "2px solid blue",
      //   "2xl": "2px solid green",
      // }}
      bgColor="brand.darkBlue"
      color="white"
      alignItems="center"
      overflowY="hidden"
    >
      {children}
    </Grid>
  );
};

export default Layout;
