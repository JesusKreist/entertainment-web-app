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
import { SignUpFormInput, validationSchema } from "./validationSchema";
import { useEffect } from "react";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SignUpFormInput>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const toast = useToast();

  const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
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
        passwordConfirmation: "",
      });

      toast({
        title: "User created successfully.",
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
      gap={{ base: "2rem", "2xl": "3vh" }}
      borderRadius={{ base: "1.5625rem", md: "1.25rem", "2xl": "1.25vw" }}

      //   border="1px solid white"
    >
      <Text textStyle="headingL">Sign Up</Text>

      <Flex
        // justifyContent={nameIsInvalid ? "center" : "end"}
        direction="column"
        as="form"
        gap={{ base: "2rem", "2xl": "5vh" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isInvalid={!!errors.email}>
          <Input
            type="email"
            id="email"
            height={{ base: "1.5625rem", md: "2.3rem", "2xl": "4.56vh" }}
            textStyle="paragraphMedium"
            autoComplete="email"
            placeholder="Email address"
            variant="flushed"
            borderBottomWidth="1px"
            borderBottomColor="brand.greyishBlue"
            _invalid={{
              borderColor: "brand.red",
            }}
            {...register("email")}
            // borderBottomWidth="2px"

            paddingLeft={{ base: "1rem", "2xl": "1vw" }}
            // {...register("name")}
          />

          <FormErrorMessage
            paddingLeft="1rem"
            textStyle="paragraphSmall"
            position="absolute"
            right={{ base: "1rem", "2xl": "1vw" }}
            bottom="25%"
          >
            {errors.email?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <Input
            type="password"
            id="password"
            height={{ base: "2.3rem", md: "2.3rem", "2xl": "4.56vh" }}
            textStyle="paragraphMedium"
            // fontSize={{ base: "0.75rem", md: "0.875rem", "2xl": "3vh" }}
            // autoComplete="password"
            placeholder="Password"
            variant="flushed"
            borderBottomWidth="1px"
            borderBottomColor="brand.greyishBlue"
            _invalid={{
              borderColor: "brand.red",
            }}
            {...register("password")}
            // borderBottomWidth="2px"

            paddingLeft={{ base: "1rem", "2xl": "1vw" }}
            // {...register("name")}
          />

          <FormErrorMessage
            paddingLeft="1rem"
            textStyle="paragraphSmall"
            position="absolute"
            right={{ base: "1rem", "2xl": "1vw" }}
            bottom="25%"
          >
            {errors.password?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.passwordConfirmation}>
          <Input
            type="password"
            id="password"
            height={{ base: "2.3rem", md: "2.3rem", "2xl": "4.56vh" }}
            textStyle="paragraphMedium"
            // fontSize={{ base: "0.75rem", md: "0.875rem", "2xl": "3vh" }}
            // autoComplete="password"
            placeholder="Repeat password"
            variant="flushed"
            borderBottomColor="brand.greyishBlue"
            _invalid={{
              borderColor: "brand.red",
            }}
            {...register("passwordConfirmation")}
            // borderBottomWidth="2px"

            paddingLeft={{ base: "1rem", "2xl": "1vw" }}
            // {...register("name")}
          />

          <FormErrorMessage
            paddingLeft="1rem"
            textStyle="paragraphSmall"
            position="absolute"
            right={{ base: "1rem", "2xl": "1vw" }}
            bottom="25%"
          >
            {errors.passwordConfirmation?.message}
          </FormErrorMessage>
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
          Create an account
        </Grid>
      </Flex>

      <Flex
        alignSelf="center"
        gap={{ base: "0.6rem", "2xl": "0.6vw" }}
        textStyle="paragraphMedium"
      >
        <Text>Already have an account?</Text>
        <Text as="span" color="brand.red">
          <Link href="/login">Login</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default SignUpForm;
