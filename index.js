import express from "express";

import mongoose from "mongoose";

import { registerValidation } from "./validations/auth.js";

import checkAuth from "./utils/checkAuth.js";
import { getMe, login, register } from "./controllers/UserController.js";

mongoose
  .connect(
    "mongodb+srv://admin:260593@cluster0.zqxltkg.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("Error", err));

const app = express();

app.use(express.json());

app.post("/auth/login", login);

app.post("/auth/register", registerValidation, register);

app.get("/auth/me", checkAuth, getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Ok");
});
