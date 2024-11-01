import React from "react";
import Form from "./Form";
import Botton from "./Botton";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";

const SignUpPopUp = ({ closePopUp }) => {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 z-50 h-screen py-10 overflow-y-scroll bg-black-transparent"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closePopUp(event);
        }
      }}
    >
      <div className="py-8 px-14 bg-black rounded-3xl w-[500px] m-auto">
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
          <a href="#" className="text-green-700">
            Sign In
          </a>
        </div>
        <div>
          <p className="text-center">
            Continue with one of the following options
          </p>
          <Botton
            title={{
              name: "Google",
              styles: "text-center font-bold text-xl w-[85%]",
            }}
            img={google}
            styles="bg-white rounded-full w-full flex mb-4"
          />
          <Botton
            title={{
              name: "Facebook",
              styles: "text-center font-bold text-xl w-[85%]",
            }}
            img={facebook}
            styles="bg-white rounded-full w-full flex mb-4"
          />

          <p className="text-center text-white">
            By continuing, you automatically accept our Terms & Conditions,
            Privacy Policy and Cookies policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPopUp;
