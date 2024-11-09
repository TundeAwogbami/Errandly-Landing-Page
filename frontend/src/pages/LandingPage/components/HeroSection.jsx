import React from "react";
import heroImage from "../../../assets/images/hero-image.jpg";
import WaitingListForm from "../../../components/WaitingListForm";

const HeroSection = () => {
  return (
    <>
      <section className="container py-20 m-auto">
        <div className="flex items-center justify-center pb-10">
          <div className="w-1/2">
            <h1 className="pb-2 text-5xl font-bold text-left text-brown font-helvetica-compressed">
              Effortless Deliveries, Anytime, Anywhere.
            </h1>
            <p className="text-2xl leading-relaxed text-left font-helvetica-rounded">
              Join Errandly’s growing network of businesses and individuals for
              real-time delivery tracking, affordable rates, and reliable
              service. Be the first to experience Nigeria’s most efficient
              delivery platform.
            </p>
          </div>
          <div className="w-1/2">
            <img src={heroImage} alt="Hero" className="w-full h-full" />
          </div>
        </div>
        <div>
          <WaitingListForm />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
