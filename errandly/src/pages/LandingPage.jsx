import React from "react";
import logo from "../assets/logo.png";
import clock from "../assets/clock.png";
import envelope from "../assets/envelope.png";
import phone from "../assets/phone.png";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <div className="bg-purple flex justify-center text-white h-[160px]">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className=" flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-[60px] w-[60px]" />
            <p className="text-2xl font-bold">Errandly</p>
          </div>

          {/* Info */}
          <div className="flex gap-8 text-xs">
            <div className=" flex items-center gap-2">
              <div className="rounded-full bg-black p-2">
                <img src={clock} alt="Clock" />
              </div>
              <div>
                <p>Mon - Sat</p> <p>8am - 10pm</p> <p>Sun - closed</p>
              </div>
            </div>

            <div className=" flex  items-center gap-2">
              <div className="rounded-full bg-black p-2">
                <img src={envelope} alt="Envelope" />
              </div>
              <div>
                <p>Email:</p>
                <p>foodgalore2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-full bg-black p-2">
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
      <Navbar />
    </>
  );
};

export default LandingPage;
