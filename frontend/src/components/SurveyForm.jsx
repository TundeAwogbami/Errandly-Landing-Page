import React, { useState } from "react";
import Botton from "./Botton";
import axiosInstance from "../utils/axiosInstance";
import Select from "./Select";

const SurveyForm = () => {
  const [questions, setQuestions] = useState([]);
  const [userType, setUserType] = useState("");
  const [surveyForm, setSurveyForm] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [joinedWaitingList, setJoinedWaitingList] = useState(() => {
    return localStorage.getItem("joinedWaitingList");
  });

  const submitSurvey = async () => {
    try {
      setIsLoading(true);
      if (!userType || !joinedWaitingList) return;
      const response = await axiosInstance.post(`api/survey/responses`, {
        email: joinedWaitingList,
        userType,
        responses: [...surveyForm],
      });
      setCompleted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSelect = (event) => {
    setUserType(event.target.value);
  };

  const onChange = (event, id) => {
    const newForm = surveyForm.filter((item) => item.questionId !== id);
    setSurveyForm([...newForm, { questionId: id, answer: event.target.value }]);
  };

  const next = (event) => {
    event.preventDefault();
    if (questionIndex >= questions.length - 1) {
      submitSurvey();
      return;
    }
    setQuestionIndex((prev) => prev + 1);
  };

  const prev = (event) => {
    event.preventDefault();
    if (questionIndex === 0) return;
    setQuestionIndex((prev) => prev - 1);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {completed ? (
        <div>
          <h1 className="text-4xl text-white">
            Thank you for completing our survey!
          </h1>
        </div>
      ) : (
        <form action="">
          {questions.length === 0 && (
            <Select
              name="userType"
              label="What do you want to use Errandly for?"
              multiple={false}
              onChange={onSelect}
              length={questions.length}
              isLoading={isLoading}
            />
          )}
          {questions.length > 0 &&
            questions.map((question, index) => (
              <Select
                key={index}
                label={question.questionText}
                options={question.options}
                multiple={false}
                onChange={onChange}
                length={questions.length}
                id={question._id}
                questionIndex={questionIndex}
                formIndex={index}
              />
            ))}

          <br />
          <div className="md:flex md:justify-between md:gap-4">
            {questions.length === 0 && (
              <Botton
                title={{
                  name: "Continue",
                  styles: "text-2xl font-bold text-black",
                }}
                styles="bg-white rounded-xl mt-10 w-full"
                handleSubmit={loadQuestions}
                isLoading={isLoading}
              />
            )}

            {questions.length > 0 && (
              <Botton
                title={{
                  name: "<< Previous",
                  styles: "text-2xl font-bold text-black",
                }}
                styles="bg-white rounded-xl mt-4 md:mt-10 w-full"
                handleSubmit={prev}
              />
            )}
            {questions.length > 0 && (
              <Botton
                title={{
                  name: `${
                    questionIndex >= questions.length - 1
                      ? "Submit"
                      : "Continue >>"
                  } `,
                  styles: "text-2xl font-bold text-black",
                }}
                styles="bg-white rounded-xl mt-2 md:mt-10 mr-0 w-full"
                handleSubmit={next}
              />
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default SurveyForm;
