import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
  {
    email: { type: String, required: [true, "Email is required"] },
    message: { type: String, required: [true, "Message is required"] },
  },
  { timeStamp: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
