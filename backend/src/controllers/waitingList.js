import WaitingList from "../models/waitingList.js";
import { sendWaitingListEmail } from "../utils/sendWaitingListEmail.js";

export const addToWaitingList = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "email is required." });
    }

    const existingEmail = await WaitingList.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Already joined waiting list" });
    }

    await WaitingList.create({
      email,
    });
    sendWaitingListEmail(email);
    res.status(201).json({ message: "Successfully joined waiting list" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to joined waiting list" });
  }
};
