import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: {
      type: String,
      enum: ["user", "business", "admin"],
      default: "user",
    },
    provider: {
      type: String,
      enum: ["local", "google", "facebook"],
      required: true,
    }, // Field to track OAuth provider
    googleId: { type: String, unique: true },
    facebookId: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
