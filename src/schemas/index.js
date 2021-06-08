import * as yup from "yup";

export const loginSchema = yup.object().shape({
  // area: yup.string().lowercase().trim().label("area"),
  email: yup
    .string()
    .lowercase()
    .trim()
    .email("Invalid Email")
    .required("required")
    .label("Email"),
  password: yup
    .string()
    .min(6, "Password At least 6 characters")
    .required("required")
    .label("Password"),
});

export const CustomerDetailSchema = yup.object().shape({
  name: yup.string().trim().required("required").label("Customer Name"),
  gender: yup.string().trim().required("required").label("Gender"),
  prevBrand: yup.string().trim().required("required").label("Previous Brands"),
  address: yup.string().trim().required("required").label("Address"),
  area: yup.string().trim().required("required").label("Area"),
  email: yup.string().trim().required("required").label("Email"),
  mobile: yup.string().trim().required("required").label("Mobile Network"),
});
