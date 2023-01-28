import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";

const ProfileAvatar = () => {
  return (
    <>
      {/* <AspectRatio
        width={{ base: "60%", xl: "50%", "2xl": "41.67%" }}
        display={{ base: "none", lg: "block" }}
        ratio={1 / 1}
        className="avatar"
        justifySelf="end"
        border="1px solid white"
        rounded="full"
        marginTop="auto"
      >
        <Image src="/assets/image-avatar.png" alt="avatar" objectFit="cover" />
      </AspectRatio> */}
      <Flex
        // display={{ base: "block", lg: "none" }}
        gridRow={{ lg: "span 2 / -2" }}
        // border="1px solid white"
        // rounded={"full"}
        // height="2rem"
        alignItems="end"
        width={{ base: "2.5rem", md: "2.5rem", lg: "100%" }}
      >
        <Image
          src="/assets/image-avatar.png"
          alt="logo"
          objectFit="contain"
          width="40%"
          // height="100%"
          margin="0 auto"
          border="2px solid white"
          rounded={"full"}
          // maxW="100%"
        />
      </Flex>
    </>
  );
};

export default ProfileAvatar;
