import { BigHead } from "@bigheads/core";
import { Box, Flex, Image } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FiLogIn, FiLogOut } from "react-icons/fi";

type ProfileAvatarProps = {
  isLoggedIn: boolean;
  avatarUrl?: string | null;
};

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  isLoggedIn,
  avatarUrl,
}) => {
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
      width={{ lg: "100%" }}
      direction={{ lg: "column" }}
      gap={{ base: "0.8rem", md: "1rem", lg: "unset" }}
    >
      {isLoggedIn && (
        <>
          <Image
            // src="/assets/image-avatar.png"
            src={
              avatarUrl ||
              "https://avatars.dicebear.com/api/avataaars/0.5338501174534187.svg"
            }
            alt="profile avatar"
            objectFit={{ base: "contain", lg: "cover" }}
            width={{ base: "2.5rem", md: "2.5rem", lg: "unset" }}
            height={{ lg: "50%" }}
            margin="0 auto"
            border="2px solid white"
            rounded={"full"}
          />

          <Box
            alignSelf="center"
            width={{ base: "1.5rem", lg: "25%" }}
            onClick={() => {
              signOut({ redirect: false });
            }}
            _hover={{
              color: "brand.red",
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
          width={{ base: "1.5rem", lg: "25%" }}
          _hover={{
            color: "brand.red",
          }}
        >
          <FiLogIn size="100%" />
        </Box>
      )}
    </Flex>
  );
};

export default ProfileAvatar;
