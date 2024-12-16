import React, { useEffect, useState } from "react";
import { validateEmail, validateForm } from "../utils/validation";
import axiosInstance from "../utils/axiosInstance";

const WaitingListForm = ({ handlePopUp }) => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [joinedWaitingList, setJoinedWaitingList] = useState("");
  const [takenSurvey, setTakenSurvey] = useState(false);

  useEffect(() => {
    setJoinedWaitingList(localStorage.getItem("joinedWaitingList"));
    setTakenSurvey(
      JSON.parse(localStorage.getItem("completed_survey") || false)
    );
  }, []);

  const emailSchema = {
    email: { required: true, validate: validateEmail },
  };

  const handleEmail = (event) => {
    const { name, value } = event.target;
    setEmail({ ...email, [name]: value });
  };

  const addToWaitingList = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(email, emailSchema);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;
    setIsLoading(true);
    try {
      await axiosInstance.post("api/waiting-list", email);
      localStorage.setItem("joinedWaitingList", email.email);
      setEmail({ email: "" });
      setJoinedWaitingList(email.email);
      handlePopUp("survey");
    } catch (error) {
      console.error(error);
      setErrors({
        email: error?.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {joinedWaitingList ? (
        <div
          className={`flex justify-center md:justify-start ${
            takenSurvey ? "hidden" : ""
          }`}
        >
          <button
            className="px-4 py-2 mx-2 text-xl font-bold text-white rounded-md bg-purple font-helvetica-rounded"
            onClick={() => handlePopUp("survey")}
            disabled={isLoading}
          >
            Take Survey -{">"}
          </button>
        </div>
      ) : (
        <form
          action=""
          className="flex items-start justify-center gap-2 px-2 md:justify-start"
        >
          <div>
            <input
              type="text"
              placeholder="enter your email"
              className={`px-4 py-2 border-2  rounded-md outline-none ${
                Object.keys(errors).length === 0
                  ? "border-green-700"
                  : "border-red-600"
              }`}
              onChange={handleEmail}
              name="email"
              value={email.email}
              disabled={isLoading}
            />
            <p className="text-red-600">{errors.email}</p>
          </div>

          <button
            className="hidden gap-2 px-4 py-2 text-2xl font-bold text-white rounded-md bg-purple font-helvetica-rounded md:flex"
            onClick={addToWaitingList}
            disabled={isLoading}
          >
            Join waiting list
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  ></animateTransform>
                </path>
              </svg>
            )}
          </button>
          <button
            className="flex gap-2 px-4 py-2 text-xl font-bold text-white rounded-md bg-purple font-helvetica-rounded md:hidden"
            onClick={addToWaitingList}
            disabled={isLoading}
          >
            Join us
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  ></animateTransform>
                </path>
              </svg>
            )}
          </button>
        </form>
      )}
    </>
  );
};

export default WaitingListForm;
