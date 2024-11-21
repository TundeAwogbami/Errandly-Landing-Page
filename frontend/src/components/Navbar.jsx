import React, { useState } from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/logo-black.png";
import hamburger from "../assets/images/grip-lines.png";
import close from "../assets/images/x-icon.png";

const Navbar = ({ handlePopUp }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="block md:bg-black text-white h-[80px] text-lg font-bold md:sticky top-0 z-40 relative">
      <div className="container flex items-center justify-between px-2 py-4 m-auto md:hidden">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-[30px] w-[30px]" />
          <p className="text-black">errandly</p>
        </div>
        <div>
          <button onClick={() => setShowMenu(true)}>
            <img src={hamburger} alt="" />
          </button>
        </div>
      </div>
      <div
        className={`fixed right-0 top-0 md:right-auto md:top-auto md:relative bg-white md:bg-black h-screen w-[300px] md:w-full md:h-fit justify-between m-auto md:container md:flex transition-all ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end md:hidden">
          <button onClick={() => setShowMenu(false)}>
            <img
              src={close}
              alt=""
              className="h-[30px] w-[30px] bg-white mt-24 mr-2"
            />
          </button>
        </div>
        <ul className="text-black md:text-white md:flex justify-between items-center flex-auto h-[80px] px-10">
          <li className="md:h-full">
            <ScrollLink
              to="home"
              smooth={true}
              spy={true}
              offset={0}
              activeClass="md:border-b-2 "
              className="flex items-center h-full mb-2 font-normal text-gray-500 cursor-pointer md:mb-0 hover:text-black md:text-white md:font-bold md:hover:text-white"
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li className="md:h-full ">
            <ScrollLink
              to="about"
              smooth={true}
              spy={true}
              offset={50}
              activeClass="md:border-b-2 "
              className="flex items-center h-full mb-2 font-normal text-gray-500 cursor-pointer md:mb-0 hover:text-black md:text-white md:font-bold md:hover:text-white"
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              About
            </ScrollLink>
          </li>
          <li className="md:h-full">
            <ScrollLink
              to="features"
              smooth={true}
              spy={true}
              offset={50}
              activeClass="md:border-b-2 "
              className="flex items-center h-full mb-2 font-normal text-gray-500 cursor-pointer md:mb-0 hover:text-black md:text-white md:font-bold md:hover:text-white"
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <button
              className="flex items-center h-full font-normal text-gray-500 cursor-pointer md:mb-0 hover:text-black md:text-white md:font-bold md:hover:text-white"
              onClick={() => {
                handlePopUp("contact");
                setShowMenu(false);
              }}
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="hidden md:flex h-[80px] gap-8 justify-center items-center mx-20">
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

        <div className="hidden flex h-[80px] gap-2 justify-center items-center font-helvetica-rounded ">
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
