import {
  Flex,
  FormControl,
  Input,
  FormErrorMessage,
  Text,
  Button,
  Box,
  Grid,
  background,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormInput, validationSchema } from "./validationSchema";
import { useEffect } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const toast = useToast();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log("submitted");
    console.log(data);
  };

  useEffect(() => {
    console.log("isSubmitSuccessful", isSubmitSuccessful);
    console.log("errors", errors);
  }, [isSubmitSuccessful, errors]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        password: "",
        email: "",
      });

      toast({
        title: "Login successful.",
        // description: "We've made your reservation.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  }, [isSubmitSuccessful, reset, toast]);

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
      marginTop={{ base: "4.8rem", "2xl": "7.4vh" }}
      gap={{ base: "3rem", "2xl": "3vh" }}
      borderRadius={{ base: "1.5625rem", md: "1.25rem", "2xl": "1.25vw" }}

      //   border="1px solid white"
    >
      <Text textStyle="headingL">Login</Text>

      <Flex
        // justifyContent={nameIsInvalid ? "center" : "end"}
        direction="column"
        as="form"
        gap={{ base: "3rem", md: "3rem", "2xl": "5vh" }}
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("email")}
            // borderBottomWidth="2px"

            paddingLeft={{ base: "1rem", "2xl": "1vw" }}
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
            height={{ base: "2.3rem", md: "2.3rem", "2xl": "4.56vh" }}
            textStyle="paragraphMedium"
            // fontSize={{ base: "0.75rem", md: "0.875rem", "2xl": "3vh" }}
            // autoComplete="password"
            placeholder="Password"
            variant="flushed"
            borderBottomColor="brand.greyishBlue"
            paddingLeft={{ base: "1rem", "2xl": "1vw" }}
            {...register("password")}
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
          height={{ base: "3rem", "2xl": "6vh" }}
          _hover={{
            color: "brand.semiDarkBlue",
            bgColor: "white",
          }}
        >
          Login to your account
        </Grid>
      </Flex>

      <Flex
        alignSelf="center"
        gap={{ base: "0.6rem", "2xl": "0.6vw" }}
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
