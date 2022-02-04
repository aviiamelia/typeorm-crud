import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .strict(true)
    .required("Name is a required field")
    .min(3, "Name should have at least 3 caracteres"),
  email: yup.string().email().strict(true).required("Email is a required field"),
  password: yup
    .string()
    .required("Password is a required Field")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must have at least eight characters, one letter, one number and one special character"
    ),
  isAdm: yup.boolean().strict(true).required("You must specify this field"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  password: yup.string().required("Password is a required Field"),
});
