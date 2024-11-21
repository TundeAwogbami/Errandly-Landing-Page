import mongoose from "mongoose";

const SurveyResponseSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    userType: {
      type: String,
      enum: ["Rider", "Business", "Personal"],
      required: true,
    },
    responses: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SurveyQuestion",
          required: true,
        },
        answer: {
          type: mongoose.Schema.Types.Mixed, // Allows text, array, or object depending on question type
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const SurveyResponse = mongoose.model("SurveyResponse", SurveyResponseSchema);

export default SurveyResponse;
