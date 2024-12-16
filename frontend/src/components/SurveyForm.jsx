import React, { useEffect, useState } from "react";
import Button from "./Button";
import axiosInstance from "../utils/axiosInstance";
import Select from "react-select";

const SurveyForm = () => {
  const [questions, setQuestions] = useState([]);
  const [userType, setUserType] = useState("");
  const [surveyForm, setSurveyForm] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  const [joinedWaitingList, setJoinedWaitingList] = useState("");

  useEffect(() => {
    setJoinedWaitingList(localStorage.getItem("joinedWaitingList"));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("surveyForm", JSON.stringify(surveyForm));
  // }, [surveyForm]);

  const isFormValidated = () => {
    const currentQuestion = questions[questionIndex];
    const currentAnswer = surveyForm.find(
      (item) => item.questionId === currentQuestion._id
    );
    console.log(currentAnswer);
    if (currentQuestion?.questionType === "multiple-choice") {
      return (
        Array.isArray(currentAnswer?.answer) && currentAnswer.answer.length > 0
      );
    }
    return currentAnswer && currentAnswer?.answer?.trim() !== "";
  };

  const handleChange = (value, id) => {
    const newForm = surveyForm.filter((item) => item.questionId !== id);
    setSurveyForm([...newForm, { questionId: id, answer: value }]);
  };

  const loadQuestions = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (!userType) return;
      const response = await axiosInstance.get(
        `api/survey/questions?type=${userType}`
      );
      setQuestions(response.data.data);
    } catch (error) {
      console.error(error);
      setError("something went wrong, try agin later!");
    } finally {
      setIsLoading(false);
    }
  };

  const submitSurvey = async () => {
    const survey = {
      email: joinedWaitingList,
      userType,
      responses: [...surveyForm],
    };

    try {
      setIsLoading(true);
      if (!userType || !joinedWaitingList) return;
      const response = await axiosInstance.post(`api/survey/responses`, survey);
      setCompleted(true);
      localStorage.setItem("completed_survey", JSON.stringify(true));
    } catch (error) {
      console.error(error);
      setError("something went wrong, try agin later!");
    } finally {
      setIsLoading(false);
    }
  };

  const next = (event) => {
    event.preventDefault();
    if (!isFormValidated()) return;
    if (questionIndex >= questions.length - 1) {
      submitSurvey();
      return;
    }
    setQuestionIndex((prev) => prev + 1);
  };

  const prev = (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (questionIndex === 0) return;
    setQuestionIndex((prev) => prev - 1);
  };

  const options = [
    { value: "Personal", label: "For personal errands" },
    { value: "Business", label: "Deliveries for my business" },
    { value: "Rider", label: "I am delivery rider/company" },
  ];

  console.log(surveyForm);

  return (
    <form>
      {error && (
        <div className="flex justify-between p-2 mb-1 overflow-hidden text-white transition-all bg-red-600 rounded-lg text-nowrap">
          <p>{error}</p>
        </div>
      )}
      {completed ? (
        <div>
          <h1 className="text-4xl text-white">
            Thank you for completing our survey!
          </h1>
        </div>
      ) : (
        <div>
          {!questions.length ? (
            <div>
              <p className="mb-4 text-4xl text-white transition-all">
                What do you want to use Errandly for?
              </p>
              <Select
                options={options}
                required
                onChange={(type) => setUserType(type.value)}
                isDisabled={isLoading}
              />
            </div>
          ) : (
            questions.map((question, index) => {
              const options = question.options.map((option) => ({
                value: option,
                label: option,
              }));
              return (
                <div
                  className={index === questionIndex ? "block" : "hidden"}
                  key={question._id}
                >
                  <p className="mb-4 text-4xl text-white transition-all">
                    {question.questionText}
                  </p>
                  <Select
                    options={options}
                    required={question.required}
                    onChange={(selected) => {
                      const value =
                        question.questionType === "multiple-choice"
                          ? selected.map((element) => element.value)
                          : selected.value;
                      handleChange(value, question._id);
                    }}
                    isDisabled={isLoading}
                    isMulti={question.questionType === "multiple-choice"}
                  />
                </div>
              );
            })
          )}
          <div className="md:flex md:justify-between md:gap-4">
            {!questions.length ? (
              <Button
                title={{
                  name: "Continue",
                  styles: "text-2xl font-bold text-black",
                }}
                styles="bg-white rounded-xl mt-10 w-full"
                handleSubmit={loadQuestions}
                isLoading={isLoading}
              />
            ) : (
              <>
                <Button
                  title={{
                    name: "<< Previous",
                    styles: "text-2xl font-bold text-black",
                  }}
                  styles={`bg-white rounded-xl mt-4 md:mt-10 w-full ${
                    questionIndex === 0 ? "hidden" : ""
                  }`}
                  handleSubmit={prev}
                />
                <Button
                  title={{
                    name: `${
                      questionIndex >= questions.length - 1
                        ? "Submit"
                        : "Next >>"
                    } `,
                    styles: "text-2xl font-bold text-black",
                  }}
                  styles="bg-white rounded-xl mt-2 md:mt-10 mr-0 w-full"
                  handleSubmit={next}
                  isLoading={isLoading}
                />
              </>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default SurveyForm;
