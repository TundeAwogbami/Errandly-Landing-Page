import React from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import logo from "../assets/images/logo-black.png";

const Footer = () => {
  return (
    <footer className="text-white bg-black font-helvetica-rounded">
      <div className="container py-10 m-auto">
        <div className="flex justify-between item-center">
          <div>
            <img src={logo} alt="" />
            <p className="text-3xl font-bold">errandly</p>
          </div>
          <div>
            <h3 className="pb-4 text-3xl font-bold">Our services</h3>
            <ul className="text-xl font-bold">
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
            <h3 className="pb-4 text-3xl font-bold">Our services</h3>
            <ul className="font-light font-helvetica">
              <li>Phone: 08064103799</li>
              <li>Email: mail@errandly.com</li>
              <li>Address: Kwang, Jos South, Nigeria</li>
            </ul>
            <div className="flex h-[80px] gap-4 justify-start items-center">
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
    </footer>
  );
};

export default Footer;
