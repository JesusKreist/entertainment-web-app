import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <Flex
      height="100vh"
      // width="100vw"
      bgColor="brand.darkBlue"
      direction="column"
      alignItems="center"
      paddingTop="7.4vh"
      // justifyContent="center"
      border={{
        base: "2px solid purple",
        sm: "2px solid pink",

        md: "2px solid yellow",
        lg: "2px solid red",
        xl: "2px solid blue",
        "2xl": "2px solid green",
      }}
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
      <LoginForm />
    </Flex>
  );
};

export default Login;
