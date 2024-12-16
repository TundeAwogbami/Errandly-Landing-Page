import React, { useState } from "react";
import Button from "./Button";
import axiosInstance from "../utils/axiosInstance";
import {
  validateEmail,
  validateForm,
  validateMessage,
} from "../utils/validation";

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    message: "",
  });
  const [completed, setCompleted] = useState({ success: true, message: "" });

  const formSchema = {
    email: { required: true, validation: validateEmail },
    message: { required: true, validation: validateMessage },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const sendMessage = async (form) => {
    try {
      setIsLoading(true);
      await axiosInstance.post("/api/contact", form);
      setForm({ email: "", message: "" });
      setCompleted({
        success: true,
        message: "Successfully contacted us!",
      });
    } catch (error) {
      console.error(error);
      setCompleted({
        success: false,
        message: error?.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const formErrors = validateForm(form, formSchema);
    setErrors(formErrors);
    if (Object.keys(formErrors).length !== 0) return;
    sendMessage(form);
  };

  return (
    <>
      <h1 className="pb-10 text-3xl font-bold text-white font-helveticaCompressed">
        Lets Connect
      </h1>
      {completed.message && (
        <div
          className={`p-2 mb-1 overflow-hidden text-white rounded-lg text-nowrap flex justify-between transition-all ${
            completed.success ? " bg-green-700" : " bg-red-700"
          }`}
        >
          <p>{completed.message}</p>{" "}
          <button onClick={() => setCompleted({ success: true, message: "" })}>
            x
          </button>
        </div>
      )}
      <form action="" className="flex flex-col gap-2 text-white">
        <div className="mb-4">
          <label htmlFor="email">your email</label>
          <input
            name="email"
            type="text"
            id="email"
            className={`p-2 text-white bg-transparent border rounded-lg outline-none w-full ${
              Object.keys(errors).length !== 0
                ? "border-red-600"
                : "border-green-700"
            }`}
            onChange={handleChange}
            value={form.email}
            disabled={isLoading}
          />
          <p className="text-sm text-red-600">{errors.email}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="message">your message</label>
          <textarea
            name="message"
            id="message"
            className={`p-2 text-white bg-transparent border rounded-lg outline-none w-full ${
              Object.keys(errors).length !== 0
                ? "border-red-600"
                : "border-green-700"
            }`}
            onChange={handleChange}
            value={form.message}
            disabled={isLoading}
          />
          <p className="text-sm text-red-600">{errors.message}</p>
        </div>

        <Button
          img=""
          title={{
            name: "Send Message",
            styles: "text-2xl font-bold text-black",
          }}
          styles="bg-white rounded-xl mt-10"
          handleSubmit={submit}
          isLoading={isLoading}
        />
      </form>
    </>
  );
};

export default ContactForm;
