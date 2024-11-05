import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { authenticateUser } from "../middleware/authentication.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", authenticateUser, logout);

export default router;
