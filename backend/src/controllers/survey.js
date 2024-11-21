import SurveyQuestion from "../models/SurveyQuestion.js";
import SurveyResponse from "../models/SurveyResponse.js";

export const getSurveyQuestions = async (req, res) => {
  try {
    const { type } = req.query;

    const validUserTypes = ["Rider", "Business", "Personal"];
    let queryObject = {};

    if (type && validUserTypes.includes(type)) {
      queryObject = { userType: type };
    }

    const questions = await SurveyQuestion.find(queryObject).lean();

    res.status(200).json({ data: questions });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const createSurveyResponse = async (req, res) => {
  try {
    const { email, userType, responses } = req.body;
    await SurveyResponse.create({ email, userType, responses });
    res.status(201).json({ message: "Successfully completed survey" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getSurvey = async (req, res) => {
  try {
    const survey = await SurveyResponse.find().populate("responses.questionId");
    res.status(201).json(survey);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
};
