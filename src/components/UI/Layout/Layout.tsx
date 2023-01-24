import { Grid } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid
      as="main"
      className="layout-grid"
      paddingInline={{ lg: "3vw" }}
      paddingTop={{ md: "1.5625rem", lg: "unset" }}
      templateColumns={{ lg: "repeat(12, 1fr)" }}
      templateRows={{ base: "4.5rem 1fr", lg: "unset" }}
      minHeight="100vh"
      gap={{ base: "1.25rem", lg: "1.95vw" }}
      border={{
        base: "2px solid purple",
        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
      bgColor="brand.darkBlue"
      color="white"
      alignItems="center"
    >
      {children}
    </Grid>
  );
};

export default Layout;