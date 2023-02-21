import { AspectRatio, Box, Flex, Image, Icon } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FiLogIn, FiLogOut } from "react-icons/fi";

type ProfileAvatarProps = {
  isLoggedIn: boolean;
};

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ isLoggedIn }) => {
  return (
    <Flex
      className="profile-avatar"
      gridRow={{ lg: "span 3 / -2" }}
      // border="1px solid white"
      alignItems={{ base: "center", lg: "end" }}
      justifyContent={{
        base: "space-between",
        lg: `${isLoggedIn ? "space-between" : "end"}`,
      }}
      width={{ base: "2.5rem", md: "2.5rem", lg: "100%" }}
      direction="column"
    >
      {isLoggedIn && (
        <>
          <Image
            src="/assets/image-avatar.png"
            alt="logo"
            objectFit={{ base: "contain", lg: "cover" }}
            // width={{ lg: "40%" }}
            height={{ lg: "50%" }}
            margin="0 auto"
            border="2px solid white"
            rounded={"full"}
          />

          <Box
            alignSelf="center"
            width="25%"
            onClick={() => {
              signOut({ redirect: false });
            }}
            _hover={{
              color: "brand.red",
            }}
            sx={{
              aspectRatio: "1/1",
            }}
          >
            <FiLogOut size="100%" />
          </Box>
        </>
      )}

      {!isLoggedIn && (
        <Box
          as={Link}
          href="/login"
          alignSelf="center"
          width="25%"
          _hover={{
            color: "brand.red",
          }}
          sx={{
            aspectRatio: "1/1",
          }}
        >
          <FiLogIn size="100%" />
        </Box>
      )}
    </Flex>
  );
};

export default ProfileAvatar;
