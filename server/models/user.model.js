/* user.js or user.model.js.. They are the same but just helps in the naming convention that user is a model */
import mongoose from "mongoose";

/* Create the schema */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true /* Unique is no one can have the same username */,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/* Create the model */

const User = mongoose.model("User", userSchema);

export default User;
