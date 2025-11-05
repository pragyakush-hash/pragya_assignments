import { check } from "express-validator";

export const registerValidation = [
  check("name", "Name is required").notEmpty(),
  check("email", "Please enter valid mail").isEmail(),
  check("age", "Age is required").notEmpty(),
  check("password", "Password is required").notEmpty(),
  check("password", "Password must be at least 6 characters").isLength({
    min: 6,
  }),
];

export const loginValidation = [
  check("name", "Name is required").notEmpty(),
  check("password", "Password is required").notEmpty(),
];

// export default { registerValidation, loginValidation };
