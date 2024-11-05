import React from "react";
import Form from "./Form";
import Botton from "./Botton";

const LogInForm = ({ handlePopUp }) => {
  return (
    <>
      <p className="pt-10 text-xl font-bold text-center text-white">
        Welcome back!
      </p>
      <p className="pb-8 text-xl text-center text-white">
        Enter your login details to continue
      </p>
      <form action="" className="flex flex-col gap-4">
        <Form title="Email" type="email" />
        <Form title="Password" type="password" />
        <span className="-m-4 text-right pe-4">
          <a href="#" className="text-right text-green-700">
            Forgot password?
          </a>
        </span>
        <Botton
          img=""
          title={{ name: "Continue", styles: "text-white text-2xl font-bold" }}
          styles="bg-purple rounded-xl mt-10"
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
