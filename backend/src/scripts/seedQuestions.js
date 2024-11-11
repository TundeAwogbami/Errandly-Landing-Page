import mongoose from "mongoose";
import SurveyQuestion from "../models/SurveyQuestion.js";
import dotenv from "dotenv";
dotenv.config();

const questions = [
  {
    userType: "Rider",
    questionText: "What type of delivery service do you provide?",
    questionType: "multiple-choice",
    options: ["Independent rider", "Logistics company"],
  },
  {
    userType: "Rider",
    questionText:
      "How long have you been working as a delivery rider/logistics company?",
    questionType: "multiple-choice",
    options: [
      "Less than one year",
      "1-2 years",
      "3-5 years",
      "More than 5-years",
    ],
  },
  {
    userType: "Rider",
    questionText: "How many deliveries do you complete per day, on average?",
    questionType: "multiple-choice",
    options: ["Less than 5", "5-10", "10-20", "More than 20"],
  },
  {
    userType: "Rider",
    questionText: "What types of deliveries do you typically handle?",
    questionType: "multiple-choice",
    options: [
      "Parcels (e.g, documents, small items)",
      "Bulk orders (e.g, multiple packages for businesses)",
      "Food deliveries",
      "Other",
    ],
  },
  {
    userType: "Rider",
    questionText:
      "What are your biggest challenges when it comes to securing delivery jobs?",
    questionType: "multiple-choice",
    options: [
      "Uncertain job availability",
      "Difficulty finding customers",
      "Unpredictable or fluctuating demand",
      "Low pay rates",
      "Long wait times between jobs",
    ],
  },
  {
    userType: "Rider",
    questionText: "What issues do you encounter while completing deliveries?",
    questionType: "multiple-choice",
    options: [
      "Traffic and delays",
      "Difficulty in finding locations",
      "Customer dissatisfaction or miscommunication",
      "Issues with package handling or damage",
      "Lack of real-time tracking and visibility",
    ],
  },
  {
    userType: "Rider",
    questionText:
      "How do you feel about the current level of customer demand in your area?",
    questionType: "multiple-choice",
    options: [
      "Demand is high and steady",
      "Demand is inconsistent",
      "Demand is low and unpredicatable",
    ],
  },
  {
    userType: "Rider",
    questionText:
      "What tools or platforms do you currently use to find delivery jobs?",
    questionType: "multiple-choice",
    options: [
      "Phone calls from customers",
      "Online platforms (e.g., ride-hailing or delivery apps)",
      "Social media groups",
      "Word of mouth",
    ],
  },
  {
    userType: "Rider",
    questionText: "How important is real-time tracking of deliveries to you?",
    questionType: "multiple-choice",
    options: ["Extremely important", "Moderately important", "Not important"],
  },
  {
    userType: "Rider",
    questionText:
      "What feature(s) would make a delivery platform more useful to you?",
    questionType: "multiple-choice",
    options: [
      "More consistent job availability",
      "Real-time tracking for customers and drivers",
      "Better pay rates or commission structures",
      "Easier communication with customers",
      "More flexibility in choosing jobs",
    ],
  },
  {
    userType: "Rider",
    questionText:
      "What are your main goals as a delivery rider/logistics company?",
    questionType: "multiple-choice",
    options: [
      "Maximize daily income",
      "Buid long-term customer relationships",
      "Expand delivery services (e.g., hire more riders",
      "Increase visibility and reputation",
    ],
  },
];

const seedQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await SurveyQuestion.deleteMany();
    await SurveyQuestion.insertMany(questions);
    console.log("Survey questions seeded successfully!");
  } catch (error) {
    console.error("Error seeding survey questions:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedQuestions();
