import React from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import logo from "../assets/images/logo-black.png";

const Footer = () => {
  return (
    <footer className="p-2 text-white bg-black font-helvetica-rounded">
      <div className="container py-10 m-auto">
        <div className="flex flex-col justify-between gap-6 item-center md:flex-row">
          <div className="flex flex-col items-start justify-start">
            <img
              src={logo}
              alt=""
              className="w-[30px] h-[30px] md:h-auto md:w-auto md:text-center"
            />
            <p className="text-xl font-bold md:text-3xl">errandly</p>
          </div>
          <div>
            <h3 className="pb-4 text-xl font-bold md:text-3xl">Our services</h3>
            <ul className="text-sm font-bold md:text-xl">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Log out</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pb-4 text-xl font-bold md:text-3xl">Contact us</h3>
            <ul className="text-sm font-light font-helvetica md:text-base">
              <li>Phone: 08064103799</li>
              <li>Email: mail@errandly.com</li>
              <li className="text-wrap">Address: Kwang, Jos South, Nigeria</li>
            </ul>
            <div className="pt-6">
              <p className="pb-0 mb-0 text-xl font-bold md:hidden">Social</p>
              <div className="flex items-center justify-start gap-4">
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
            </div>
          </div>
        </div>
      </div>
      <p className="text-[8px] font-light text-center hover:underline pt-6">
        © 2024 Errandly, a Food Galore company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
