import { Image, Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box
      className="logo"
      gridRow={{ lg: "2 / 3" }}
      width={{ base: "1.5625rem", md: "2rem", lg: "100%" }}
      // border="1px solid white"
    >
      <Image
        src="/assets/logo.svg"
        alt="logo"
        objectFit={{ base: "contain", lg: "cover" }}
        height="100%"
        // width="100%"
        margin="0 auto"
      />
    </Box>
  );
};

export default Logo;
