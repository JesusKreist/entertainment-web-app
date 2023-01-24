import { AspectRatio, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <AspectRatio
      className="logo"
      // border="1px solid white"
      width={"33.33%"}
      ratio={5 / 4}
      // height="1.63rem"
    >
      <Image src="/assets/logo.svg" alt="logo" objectFit="cover" />
    </AspectRatio>
  );
};

export default Logo;
