import React from "react";
import logo from "../../../assets/images/logo.png";
import clock from "../../../assets/images/clock.png";
import envelope from "../../../assets/images/envelope.png";
import phone from "../../../assets/images/phone.png";

const HeaderSection = () => {
  return (
    <>
      <div className="bg-purple md:flex justify-center text-white h-[160px] hidden">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 ">
            <img src={logo} alt="Logo" className="h-[60px] w-[60px]" />
            <p className="text-2xl font-bold">Errandly</p>
          </div>

          {/* Info */}
          <div className="flex gap-8 text-xs">
            <div className="flex items-center gap-2 ">
              <div className="p-2 bg-black rounded-full">
                <img src={clock} alt="Clock" />
              </div>
              <div>
                <p>Mon - Sat</p> <p>8am - 10pm</p> <p>Sun - closed</p>
              </div>
            </div>

            <div className="flex items-center gap-2 ">
              <div className="p-2 bg-black rounded-full">
                <img src={envelope} alt="Envelope" />
              </div>
              <div>
                <p>Email:</p>
                <p>foodgalore2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-black rounded-full">
                <img src={phone} alt="Phone" />
              </div>

              <div>
                <p>Call us</p>
                <p>+234 806 410 3799</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
