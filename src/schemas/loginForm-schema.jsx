import * as yup from "yup";

export const yupLoginSchema = yup.object().shape({
  username: yup.string().min(4).max(20).required("Required!"),
  password: yup.string().min(4).max(100).required("Required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match!")
    .required("Required!"),
});
