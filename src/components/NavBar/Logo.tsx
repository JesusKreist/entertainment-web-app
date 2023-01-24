import { AspectRatio, Image, Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <AspectRatio
        className="logo"
        display={{ base: "none", lg: "block" }}
        // border="1px solid white"
        width={"33.33%"}
        ratio={5 / 4}
        // height="1.63rem"
      >
        <Image src="/assets/logo.svg" alt="logo" objectFit="cover" />
      </AspectRatio>

      <Box
        display={{ base: "block", lg: "none" }}
        width={{ base: "1.5625rem", md: "2rem" }}
        //   border="1px solid white"
      >
        <Image src="/assets/logo.svg" alt="logo" objectFit="cover" />
      </Box>
    </>
  );
};

export default Logo;
