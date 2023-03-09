import { Box, Flex, Image, Text } from "@chakra-ui/react";
import LoginForm from "./LoginForm/LoginForm";

type LoginProps = {
  csrfToken: string | undefined;
};

const Login: React.FC<LoginProps> = ({ csrfToken }) => {
  return (
    <Flex
      height="100vh"
      // width="100vw"
      bgColor="brand.darkBlue"
      direction="column"
      alignItems="center"
      paddingTop={{ base: "4.8rem", "2xl": "7.4vh" }}
      // justifyContent="center"
      // border={{
      //   base: "2px solid purple",
      //   sm: "2px solid pink",

      //   md: "2px solid yellow",
      //   lg: "2px solid red",
      //   xl: "2px solid blue",
      //   "2xl": "2px solid green",
      // }}
    >
      <Box
        className="logo"
        width={{ base: "1.5625rem", md: "2rem", xl: "2.2vw" }}
        sx={{
          aspectRatio: "32/25.6",
        }}
        // border="1px solid white"
      >
        <Image
          src="/assets/logo.svg"
          alt="logo"
          objectFit={{ base: "contain", lg: "cover" }}
          height="100%"
          margin="0 auto"
        />
      </Box>
      <LoginForm csrfToken={csrfToken} />
    </Flex>
  );
};

export default Login;
