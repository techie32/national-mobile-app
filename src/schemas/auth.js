import * as yup from "yup";

export const loginSchema = yup.object().shape({
  area: yup.string().lowercase().trim().label("area"),
  email: yup
    .string()
    .lowercase()
    .trim()
    .email("Valid Email")
    .required("required")
    .label("Email"),
  password: yup
    .string()
    .min(6, "Password At least 6 characters")
    .required("required")
    .label("Password"),
});
