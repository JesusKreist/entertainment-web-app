import { AspectRatio, Image } from "@chakra-ui/react";

const ProfileAvatar = () => {
  return (
    <AspectRatio
      width="41.67%"
      ratio={1 / 1}
      className="avatar"
      justifySelf="end"
      // border="1px solid white"
      marginTop="auto"
    >
      <Image src="/assets/image-avatar.png" alt="avatar" objectFit="cover" />
    </AspectRatio>
  );
};

export default ProfileAvatar;
