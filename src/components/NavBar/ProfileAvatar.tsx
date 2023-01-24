import { AspectRatio, Box, Image } from "@chakra-ui/react";

const ProfileAvatar = () => {
  return (
    <>
      <AspectRatio
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
      </AspectRatio>
      <Box
        display={{ base: "block", lg: "none" }}
        border="1px solid white"
        rounded={"full"}
        // height="2rem"
        width={{ base: "2.5rem", md: "2.5rem" }}
      >
        <Image
          src="/assets/image-avatar.png"
          alt="logo"
          objectFit="contain"
          // maxW="100%"
        />
      </Box>
    </>
  );
};

export default ProfileAvatar;
