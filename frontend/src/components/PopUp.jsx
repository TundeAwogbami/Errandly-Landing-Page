import React from "react";
import Botton from "./Botton";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import ContactForm from "./ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import SurveyForm from "./SurveyForm";

const PopUp = ({ closePopUp, handlePopUp, popUpType }) => {
  const logInWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`;
  };

  const logInWithFacebook = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/facebook`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100vh", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 left-0 right-0 z-50 h-screen py-10 overflow-y-scroll bg-black-transparent"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePopUp(event);
          }
        }}
      >
        <div className="py-10 px-14 bg-black w-[300px] md:w-[500px] m-auto">
          {popUpType === "signup" && <SignUpForm handlePopUp={handlePopUp} />}
          {popUpType === "signin" && <LogInForm handlePopUp={handlePopUp} />}
          {popUpType === "contact" && <ContactForm />}
          {popUpType === "survey" && <SurveyForm />}
          <div
            className={
              popUpType === "contact" || popUpType === "survey" ? "hidden" : ""
            }
          >
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
              handleSubmit={logInWithGoogle}
            />
            <Botton
              title={{
                name: "Facebook",
                styles: "text-center font-bold text-xl w-[85%]",
              }}
              img={facebook}
              styles="bg-white rounded-full w-full flex mb-4"
              handleSubmit={logInWithFacebook}
            />

            <p className="text-center text-white">
              By continuing, you automatically accept our Terms & Conditions,
              Privacy Policy and Cookies policy
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUp;
