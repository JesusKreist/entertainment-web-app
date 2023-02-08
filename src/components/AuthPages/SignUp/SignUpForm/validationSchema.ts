import * as yup from "yup";

export type SignUpFormInput = {
  password: string;
  email: string;
  passwordConfirmation: string;
};

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Can't be empty")
    .min(6, "Password too short")
    .max(20, "Password too long"),
  passwordConfirmation: yup
    .string()
    .required("Please retype your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  email: yup.string().required("Can't be empty").email("Invalid email"),
});
