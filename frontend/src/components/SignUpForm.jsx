import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axiosInstance from "../utils/axiosInstance";
import { signUpValidationSchema, validateForm } from "../utils/validation";
const SignUpForm = ({ handlePopUp }) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const signUp = async (form) => {
    setIsLoading(true);
    try {
      const { confirmPassword, ...newForm } = form;
      const response = await axiosInstance.post("api/auth/register", newForm);
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(form, signUpValidationSchema);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) signUp(form);
  };

  return (
    <>
      <form action="" className="flex flex-col gap-6">
        <Input
          isLoading={isLoading}
          value={form.name}
          title="Name"
          type="text"
          handleChange={handleChange}
          name="name"
          error={errors.name}
        />
        <Input
          isLoading={isLoading}
          handleChange={handleChange}
          value={form.email}
          title="Email"
          type="email"
          name="email"
          error={errors.email}
        />
        <Input
          isLoading={isLoading}
          handleChange={handleChange}
          value={form.phone}
          title="Phone"
          type="tel"
          name="phone"
          error={errors.phone}
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
        <Input
          isLoading={isLoading}
          handleChange={handleChange}
          value={form.confirmPassword}
          title="Confirm Password"
          type="password"
          name="confirmPassword"
          error={errors.confirmPassword}
        />
        <Button
          isLoading={isLoading}
          img=""
          title={{ name: "Sign Up", styles: "text-white text-2xl font-bold" }}
          styles="bg-purple rounded-xl mt-10"
          handleSubmit={handleSubmit}
        />
      </form>
      <div className="flex justify-center gap-2 mt-2 mb-10">
        <p className="text-white">Already Registered?</p>
        <a
          href="#"
          onClick={() => {
            handlePopUp("signin");
          }}
          className="text-green-700"
        >
          Sign In
        </a>
      </div>
    </>
  );
};

export default SignUpForm;
