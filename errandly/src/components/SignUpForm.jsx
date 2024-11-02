import React from "react";
import Form from "./Form";
import Botton from "./Botton";

const SignUpForm = ({ handlePopUp }) => {
  return (
    <>
      <form action="" className="flex flex-col gap-4">
        <Form title="Name" type="text" />
        <Form title="Email" type="email" />
        <Form title="Phone" type="tel" />
        <Form title="Password" type="password" />
        <Form title="Confirm Password" type="password" />
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
