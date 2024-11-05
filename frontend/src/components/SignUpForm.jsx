import React, { useState } from "react";
import Form from "./Form";
import Botton from "./Botton";

const SignUpForm = ({ handlePopUp }) => {
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

  return (
    <>
      <form action="" className="flex flex-col gap-4">
        <Form
          value={form.name}
          title="Name"
          type="text"
          handleChange={handleChange}
          name="name"
        />
        <Form
          handleChange={handleChange}
          value={form.email}
          title="Email"
          type="email"
          name="email"
        />
        <Form
          handleChange={handleChange}
          value={form.phone}
          title="Phone"
          type="tel"
          name="phone"
        />
        <Form
          handleChange={handleChange}
          value={form.password}
          title="Password"
          type="password"
          name="password"
        />
        <Form
          handleChange={handleChange}
          value={form.confirmPassword}
          title="Confirm Password"
          type="password"
          name="confirmPassword"
        />
        <Botton
          img=""
          title={{ name: "Sign Up", styles: "text-white text-2xl font-bold" }}
          styles="bg-purple rounded-xl mt-10"
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
