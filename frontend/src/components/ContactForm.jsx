import React, { useState } from "react";
import Botton from "./Botton";
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
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const submit = () => {
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

        <Botton
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
