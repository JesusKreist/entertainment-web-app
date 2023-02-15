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
import { GetServerSidePropsContext } from "next";
import { getCsrfToken } from "next-auth/react";

type LoginFormProps = {
  csrfToken: string | undefined;
};

const LoginForm: React.FC<LoginFormProps> = ({ csrfToken }) => {
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

  console.log("csrfToken", csrfToken);

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
      <Text textStyle="headingL">Login</Text>

      <Flex
        // justifyContent={nameIsInvalid ? "center" : "end"}
        direction="column"
        as="form"
        gap={{ base: "2rem", "2xl": "5vh" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <FormControl
          isInvalid={!!errors.email}
          position="relative"
          // border="2px solid white"
        >
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
            // right="0"
            right={{ base: "1rem", "2xl": "1vw" }}
            bottom="25%"
            // paddingLeft=
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
