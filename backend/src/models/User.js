import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    password: { type: String },
    role: {
      type: String,
      enum: ["user", "business", "admin"],
      default: "user",
    },
    provider: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local",
    }, // Field to track OAuth provider
    googleId: {
      type: String,
      unique: true, // Enforces uniqueness
      sparse: true, // Allows multiple null values in the field
    },
    facebookId: {
      type: String,
      unique: true, // Enforces uniqueness
      sparse: true, // Allows multiple null values in the field
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
