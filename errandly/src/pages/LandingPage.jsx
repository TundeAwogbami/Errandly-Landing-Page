import React from "react";
import logo from "../assets/logo.png";
import clock from "../assets/clock.png";
import envelope from "../assets/envelope.png";
import phone from "../assets/phone.png";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero-image.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="bg-purple flex justify-center text-white h-[160px]">
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
      <Navbar />

      {/* Hero section */}

      <section className="container py-20 m-auto">
        <div className="flex items-center justify-center pb-10">
          <div className="w-fit">
            <h1 className="pb-2 text-6xl font-medium text-brown">
              Effortless Deliveries, Anytime, Anywhere.
            </h1>
            <p className="text-2xl font-bold text-center">
              Join Errandly’s growing network of businesses and individuals for
              real-time delivery tracking, affordable rates, and reliable
              service. Be the first to experience Nigeria’s most efficient
              delivery platform.
            </p>
          </div>
          <div className="bg-red-700 ">
            <img src={heroImage} alt="Hero" className="w-full h-full" />
          </div>
        </div>
        <div>
          <form action="" className="flex items-center gap-4">
            <input
              type="text"
              placeholder="enter your email"
              className="px-4 py-2 border-2 border-green-700 rounded-md outline-none"
            />
            <button className="px-4 py-2 text-2xl font-bold text-white rounded-md bg-purple">
              Join waiting list
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
