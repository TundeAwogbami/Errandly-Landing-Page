import React from "react";
import Botton from "./Botton";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const PopUp = ({ closePopUp, handlePopUp, popUpType }) => {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 z-50 h-screen py-10 overflow-y-scroll bg-black-transparent"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closePopUp(event);
        }
      }}
    >
      <div className="py-8 px-14 bg-black w-[500px] m-auto">
        {popUpType === "signup" && <SignUpForm handlePopUp={handlePopUp} />}
        {popUpType === "signin" && <LogInForm handlePopUp={handlePopUp} />}

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

export default PopUp;
