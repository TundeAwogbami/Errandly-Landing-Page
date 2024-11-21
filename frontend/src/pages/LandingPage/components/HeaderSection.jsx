import React from "react";
import logo from "../../../assets/images/logo.png";
import clock from "../../../assets/images/clock.png";
import envelope from "../../../assets/images/envelope.png";
import phone from "../../../assets/images/phone.png";
import { Element } from "react-scroll";

const HeaderSection = () => {
  return (
    <>
      <Element name="home">
        <div className="bg-purple flex justify-center text-white h-[80px] md:h-[160px]">
          <div className="container flex items-center justify-between gap-2 px-2 m-auto ">
            {/* Logo */}
            <div className="flex-col items-center justify-center hidden gap-2 md:flex md:flex-row">
              <img
                src={logo}
                alt="Logo"
                className="h-[30px] w-[30px] md:h-[60px] md:w-[60px]"
              />
              <p className="text-lg md:text-2xl font-helvetica-rounded">
                errandly
              </p>
            </div>

            {/* Info */}
            <div className="flex justify-between w-full text-xs md:w-auto md:gap-8">
              <div className="flex flex-col items-center gap-2 md:flex-row ">
                <div className="p-2 bg-black rounded-full">
                  <img
                    src={clock}
                    alt="Clock"
                    className="w-[15px] h-[15px] md:w-[30px] md:h-[30px]"
                  />
                </div>
                <div className="text-[8px] leading-tight md:text-xs md:leading-normal text-center md:text-left">
                  <p>Mon - Sat</p> <p>8am - 10pm</p> <p>Sun - closed</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 md:flex-row">
                <div className="p-2 bg-black rounded-full">
                  <img
                    src={envelope}
                    alt="Envelope"
                    className="w-[15px] h-[15px] md:w-[30px] md:h-[30px]"
                  />
                </div>
                <div className="text-[8px] leading-tight md:text-xs md:leading-normal text-center md:text-left">
                  <p>Email:</p>
                  <p>foodgalore2023@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 md:flex-row">
                <div className="p-2 bg-black rounded-full">
                  <img
                    src={phone}
                    alt="Phone"
                    className="w-[15px] h-[15px] md:w-[30px] md:h-[30px]"
                  />
                </div>

                <div className="text-[8px] leading-tight md:text-xs md:leading-normal text-center md:text-left">
                  <p>Call us</p>
                  <p>+234 806 410 3799</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default HeaderSection;
