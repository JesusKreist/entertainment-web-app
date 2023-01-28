import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";

const ProfileAvatar = () => {
  return (
    <Flex
      className="profile-avatar"
      gridRow={{ lg: "span 2 / -2" }}
      // border="1px solid white"
      alignItems={{ base: "center", lg: "end" }}
      width={{ base: "2.5rem", md: "2.5rem", lg: "100%" }}
    >
      <Image
        src="/assets/image-avatar.png"
        alt="logo"
        objectFit="contain"
        width={{ lg: "40%" }}
        // height="100%"
        margin="0 auto"
        border="2px solid white"
        rounded={"full"}
      />
    </Flex>
  );
};

export default ProfileAvatar;
