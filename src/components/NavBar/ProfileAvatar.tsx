import { AspectRatio, Image } from "@chakra-ui/react";

const ProfileAvatar = () => {
  return (
    <AspectRatio
      width={{ base: "60%", xl: "50%", "2xl": "41.67%" }}
      ratio={1 / 1}
      className="avatar"
      justifySelf="end"
      border="1px solid white"
      rounded="full"
      marginTop="auto"
    >
      <Image src="/assets/image-avatar.png" alt="avatar" objectFit="cover" />
    </AspectRatio>
  );
};

export default ProfileAvatar;
