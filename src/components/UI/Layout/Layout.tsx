import { Grid } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid
      as="main"
      className="layout-grid"
      paddingInline="3vw"
      templateColumns="repeat(12, 1fr)"
      minHeight="100vh"
      gap={"1.95vw"}
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
