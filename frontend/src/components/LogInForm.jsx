import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { signInValidationSchema, validateForm } from "../utils/validation";
import axiosInstance from "../utils/axiosInstance";

const LogInForm = ({ handlePopUp }) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const signIn = async (form) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("api/auth/login", form);
      setForm({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(form, signInValidationSchema);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) signIn(form);
  };
  return (
    <>
      <p className="pt-10 text-xl font-bold text-center text-white">
        Welcome back!
      </p>
      <p className="pb-8 text-xl text-center text-white">
        Enter your login details to continue
      </p>
      <form action="" className="flex flex-col gap-4">
        <Input
          isLoading={isLoading}
          handleChange={handleChange}
          value={input.email}
          title="Email"
          type="email"
          name="email"
          error={errors.email}
        />
        <Input
          isLoading={isLoading}
          handleChange={handleChange}
          value={form.password}
          title="Password"
          type="password"
          name="password"
          error={errors.password}
        />
        <span className="-m-4 text-right pe-4">
          <a href="#" className="text-right text-green-700">
            Forgot password?
          </a>
        </span>
        <Button
          isLoading={isLoading}
          img=""
          title={{ name: "Continue", styles: "text-white text-2xl font-bold" }}
          styles="bg-purple rounded-xl mt-10"
          handleSubmit={handleSubmit}
        />
      </form>
      <div className="flex justify-center gap-2 mt-2 mb-10">
        <p className="text-white">Don’t have an Account?</p>
        <a
          href="#"
          className="text-green-700"
          onClick={() => {
            handlePopUp("signup");
          }}
        >
          Sign Up
        </a>
      </div>
    </>
  );
};

export default LogInForm;
