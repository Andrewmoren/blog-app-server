import { body } from "express-validator";

export const loginValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
];

export const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("fullName").isLength({ min: 3 }),
  body("avatarUrl").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter article title").isLength({ min: 3 }).isString(),
  body("text", "Enter the text of the article").isLength({ min: 3 }).isString(),
  body("tags", "Invalid tag format").optional().isString(),
  body("imageUrl", "Invalid image link").optional().isString(),
];
