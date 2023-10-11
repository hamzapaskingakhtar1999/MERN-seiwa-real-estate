import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.route.js ";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

/*  */

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/* 

Below is just to see how an API route is made. This is not good practice. We
have to make a different folder for these API routes. Creating a folder called routes 
app.get("/", (req, res) => {
  res.json({
    message: "What's poppin?",
  });
});

*/

app.use("/user", userRouter);
app.use("/auth", authRouter);
