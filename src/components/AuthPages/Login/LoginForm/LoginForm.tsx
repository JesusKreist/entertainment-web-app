import {
  Flex,
  FormControl,
  Input,
  FormErrorMessage,
  Text,
  Button,
  Box,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Flex
      // width={{ base: "20.44rem", md: "25rem", "2xl": "28vw" }}
      width={{
        base: "87vw",
        sm: "min(87vw, 400px)",
        md: "25rem",
        "2xl": "28vw",
      }}
      color="white"
      bgColor="brand.semiDarkBlue"
      direction="column"
      padding={{ base: "1.5625rem", md: "1.25rem", "2xl": "2vw" }}
      marginTop={{ base: "1.5625rem", md: "1.25rem", "2xl": "7.4vh" }}
      gap={{ base: "1.5625rem", md: "3rem", "2xl": "3vh" }}
      borderRadius={{ base: "1.5625rem", md: "1.25rem", "2xl": "1.25vw" }}

      //   border="1px solid white"
    >
      <Text textStyle="headingL">Login</Text>

      <Flex
        // justifyContent={nameIsInvalid ? "center" : "end"}
        direction="column"
        as="form"
        gap={{ base: "1.5625rem", md: "3rem", "2xl": "5vh" }}
        onSubmit={handleSubmit}
      >
        <FormControl isInvalid={false}>
          <Input
            type="email"
            id="email"
            height={{ base: "1.5625rem", md: "2.3rem", "2xl": "4.56vh" }}
            textStyle="paragraphMedium"
            autoComplete="email"
            placeholder="Email address"
            variant="flushed"
            borderBottomColor="brand.greyishBlue"
            // borderBottomWidth="2px"

            paddingLeft={{ base: "rem", md: "1rem", "2xl": "1vw" }}
            // {...register("name")}
          />
          {/* {nameIsInvalid && (
            <FormErrorMessage paddingLeft="1rem">
              {nameErrorMessage}
            </FormErrorMessage>
          )} */}
        </FormControl>

        <FormControl isInvalid={false}>
          <Input
            type="password"
            id="password"
            height={{ base: "1.5625rem", md: "2.3rem", "2xl": "4.56vh" }}
            textStyle="paragraphMedium"
            // fontSize={{ base: "0.75rem", md: "0.875rem", "2xl": "3vh" }}
            autoComplete="password"
            placeholder="Password"
            variant="flushed"
            borderBottomColor="brand.greyishBlue"
            paddingLeft={{ base: "rem", md: "1rem", "2xl": "1vw" }}
            // {...register("name")}
          />
          {/* {nameIsInvalid && (
            <FormErrorMessage paddingLeft="1rem">
              {nameErrorMessage}
            </FormErrorMessage>
          )} */}
        </FormControl>

        <Grid
          placeContent="center"
          as="button"
          textStyle="paragraphMedium"
          color="white"
          bgColor="brand.red"
          height={{ base: "1.5625rem", md: "3rem", "2xl": "6vh" }}
        >
          Login to your account
        </Grid>
      </Flex>

      <Flex
        alignSelf="center"
        gap={{ base: "1.5625rem", md: "0.6rem", "2xl": "0.6vw" }}
        textStyle="paragraphMedium"
      >
        <Text>Don&apos;t have an account?</Text>
        <Text as="span" color="brand.red">
          <Link href="/signup">Sign Up</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
