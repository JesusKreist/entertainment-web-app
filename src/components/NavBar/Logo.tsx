import { AspectRatio, Image, Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      {/* <AspectRatio
        className="logo"
        display={{ base: "none", lg: "block" }}
        // border="1px solid white"
        width={"33.33%"}
        ratio={5 / 4}
        // height="1.63rem"
      >
        <Image src="/assets/logo.svg" alt="logo" objectFit="cover" />
      </AspectRatio> */}

      <Box
        gridRow={{ lg: "2 / 3" }}
        // display={{ base: "block", lg: "none" }}
        width={{ base: "1.5625rem", md: "2rem", lg: "100%" }}
        border="1px solid white"
      >
        <Image
          src="/assets/logo.svg"
          alt="logo"
          objectFit="cover"
          height="100%"
          margin="0 auto"
          // width="100%"
        />
      </Box>
    </>
  );
};

export default Logo;
