import React, { useState } from "react";
import { validateEmail, validateForm } from "../utils/validation";
import axiosInstance from "../utils/axiosInstance";

const WaitingListForm = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);

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
      setEmail({ email: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form action="" className="flex items-start gap-4">
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
          className="px-4 py-2 text-2xl font-bold text-white rounded-md bg-purple font-helvetica-rounded"
          onClick={addToWaitingList}
          disabled={isLoading}
        >
          Join waiting list
        </button>
      </form>
    </>
  );
};

export default WaitingListForm;
