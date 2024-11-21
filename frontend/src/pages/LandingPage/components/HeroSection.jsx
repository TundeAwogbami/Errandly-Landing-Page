import React from "react";
import heroImage from "../../../assets/images/hero-image.jpg";
import WaitingListForm from "../../../components/WaitingListForm";

const HeroSection = ({ handlePopUp }) => {
  return (
    <>
      <section className="container py-10 m-auto md:py-20">
        <div className="flex flex-col items-center justify-center pb-10 md:flex-row">
          <div className="p-2 md:w-1/2">
            <h1 className="pb-2 text-3xl font-bold text-center md:text-5xl text-brown font-helvetica-compressed md:text-left">
              Effortless Deliveries, Anytime, Anywhere.
            </h1>
            <p className="text-xl leading-relaxed text-center md:text-2xl md:text-left font-helvetica-rounded">
              Join Errandly’s growing network of businesses and individuals for
              real-time delivery tracking, affordable rates, and reliable
              service. Be the first to experience Nigeria’s most efficient
              delivery platform.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={heroImage}
              alt="Hero"
              className="h-auto w-[300px] md:w-full md:h-full"
            />
          </div>
        </div>
        <div>
          <WaitingListForm handlePopUp={handlePopUp} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
