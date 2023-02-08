import * as yup from "yup";

export type LoginFormInput = {
  password: string;
  email: string;
};

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Can't be empty")
    .min(6, "Password too short")
    .max(20, "Password too long"),
  email: yup.string().required("Can't be empty").email("Invalid email"),
});
