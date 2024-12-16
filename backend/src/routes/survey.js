import express from "express";
import {
  createSurveyResponse,
  // getSurvey,
  getSurveyQuestions,
} from "../controllers/survey.js";

const router = express.Router();

router.post("/responses", createSurveyResponse);
router.get("/questions", getSurveyQuestions);
// router.get("/", getSurvey);
export default router;
