import express from "express";
import { addToWaitingList } from "../controllers/waitingList.js";

const router = express.Router();

router.post("/", addToWaitingList);

export default router;
