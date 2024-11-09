import express from "express";
import authRoutes from "./auth.js";
import waitingListRoutes from "./waitingList.js";
import contactRoutes from "./contact.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/waiting-list", waitingListRoutes);
router.use("/contact", contactRoutes);

export default router;
