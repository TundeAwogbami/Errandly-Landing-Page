import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Navbar = () => {
  return (
    <nav className="bg-black text-white h-[80px] text-lg font-bold">
      <div className="container m-auto flex justify-between">
        <ul className="flex justify-between items-center flex-auto h-[80px]">
          <li className="border-b-2 h-full flex items-center">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#contact">contact</a>
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

        <div className="flex h-[80px] gap-2 justify-center items-center ">
          <button>Log in</button>
          <button className="rounded-full bg-purple py-2 px-4">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
