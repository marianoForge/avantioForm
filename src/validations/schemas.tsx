import * as yup from "yup";

export const emailRegex = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const accommodationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name must not contain numbers")
    .min(4, "Name must be at least 4 characters")
    .max(128, "Name must be at most 128 characters"),
  address: yup
    .string()
    .required("Address is required")
    .min(4, "Address must be at least 4 characters")
    .max(128, "Address must be at most 128 characters"),
  description: yup
    .string()
    .nullable()
    .optional()
    .max(2048, "Description must be at most 2048 characters"),
  type: yup
    .string()
    .required("Type is required")
    .oneOf(
      ["Apartment", "Villa", "House"],
      "Type of accomodation must be one of: apartment, villa, house"
    ),
});

export const ownerDataSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters")
    .max(64, "Name must not exceed 64 characters"),
  email: yup
    .string()
    .email("Must be a valid email")
    .matches(emailRegex, "Must be a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{0,9}$/, "Phone number must be a maximum of 9 digits")
    .nullable(),
});
