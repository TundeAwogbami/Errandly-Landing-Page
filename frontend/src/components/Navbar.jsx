import React, { useState } from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";

const Navbar = ({ handlePopUp }) => {
  return (
    <nav className="bg-black text-white h-[80px] text-lg font-bold sticky top-0 z-40">
      <div className="container flex justify-between m-auto">
        <ul className="flex justify-between items-center flex-auto h-[80px]">
          <li className="flex items-center h-full border-b-2">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                handlePopUp("contact");
              }}
            >
              contact
            </a>
          </li>
        </ul>
        <div className="flex h-[80px] gap-8 justify-center items-center mx-20">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </div>

        <div className="flex h-[80px] gap-2 justify-center items-center font-helvetica-rounded ">
          <button
            onClick={() => {
              handlePopUp("signin");
            }}
          >
            Log in
          </button>
          <button
            className="px-4 py-2 rounded-full bg-purple"
            onClick={() => {
              handlePopUp("signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
