import * as yup from "yup";

export const loginSchema = yup.object().shape({
  area: yup.string().lowercase().trim().label("Area").required("required"),
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
  name: yup
    .string()
    .lowercase()
    .trim()
    .required("required")
    .label("Customer Name"),
  gender: yup.string().lowercase().trim().required("required").label("Gender"),
  prevBrand: yup
    .string()
    .lowercase()
    .trim()
    .required("required")
    .label("Previous Brands"),
  address: yup
    .string()
    .lowercase()
    .trim()
    .required("required")
    .label("Address"),
  area: yup.string().lowercase().trim().label("Area"),
  email: yup.string().lowercase().trim().label("Email"),
  mobile: yup
    .string()
    .lowercase()
    .trim()
    .required("required")
    .label("Mobile Network"),
  terms: yup.boolean().required("required").label("Terms of Service"),
  number: yup.string().required("required").label("Number"),
  relationship: yup.string().required("required").label("Relationship"),
});

export const RetailerDetailSchema = yup.object().shape({
  shopName: yup
    .string()
    .lowercase()
    .trim()
    .required("required")
    .label("Customer Name"),

  address: yup
    .string()
    .lowercase()
    .trim()
    .required("required")
    .label("Address"),
  area: yup.string().lowercase().trim().label("Area"),
  email: yup.string().lowercase().trim().label("Email"),
  mobile: yup
    .string()
    .lowercase()
    .trim()
    .required("required")
    .label("Mobile Network"),
  terms: yup.boolean().required("required").label("Terms of Service"),
  number: yup.string().required("required").label("Number"),
  relationship: yup.string().required("required").label("Relationship"),
});
