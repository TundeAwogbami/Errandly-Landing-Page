import mongoose from "mongoose";

const SurveyQuestionSchema = mongoose.Schema({
  userType: {
    type: String,
    enum: ["Rider", "Business", "Personal"],
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  options: [String], // Array of options if it's a multiple-choice question
  questionType: {
    type: String,
    enum: ["text", "multiple-choice"], // Allows text or multiple-choice question types
    default: "multiple-choice",
  },
  required: {
    type: Boolean,
    default: true,
  },
});

const SurveyQuestion = mongoose.model("SurveyQuestion", SurveyQuestionSchema);

export default SurveyQuestion;
