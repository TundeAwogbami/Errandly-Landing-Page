import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/sendContactEmail.js";
export const sendMessage = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res
        .status(400)
        .json({ message: "Email, and message are required." });
    }

    await Contact.create({ email, message });

    await sendContactEmail(email, message);

    res.status(201).json({ message: "Message was delivered successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
};
