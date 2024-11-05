import React from "react";
import avatar from "../../../assets/images/avatar.png";

const AboutSection = () => {
  return (
    <>
      <section
        className="bg-brown bg-no-repeat bg-[length:50%] bg-about-image text-white relative z-20"
        id="about"
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-purple-transparent -z-10"></div>
        <div className="container m-auto">
          <div className="text-center">
            <h1 className="p-4 text-6xl font-medium font-helvetica-compressed">Why Errandly?</h1>
            <p className="text-2xl">Growing Demand, Unreliable Deliveries</p>
          </div>
          <div className="flex items-start justify-center gap-4 pb-20">
            <div className="pt-20">
              <div className="p-10 bg-black-transparent rounded-full h-[450px] w-[450px] flex flex-col justify-center items-center">
                <h1 className="pb-16 text-4xl font-helvetica-compressed">What we offer</h1>
                <p className="-mt-4 text-3xl text-center">
                  Errandly connects individuals and businesses with a vast
                  network of qualified, vetted delivery providers, ensuring
                  timely and reliable deliveries
                </p>
              </div>

              <div className="flex rounded-r-full bg-brown w-[350px] h-[90px] ml-20">
                <p className="p-2 text-2xl text-center">
                  Over <span className="text-3xl font-medium font-helvetica-compressed">283</span> sign ups
                  for the waiting list
                </p>
                <img src={avatar} alt="avatar" className="w-[90px] h-[90px]" />
              </div>
            </div>
            <div className="pt-6">
              <h1 className="pb-16 text-4xl font-bold text-right font-helveticaCompressed">
                Shortage of dependable dispatch riders
              </h1>
              <p className="text-2xl leading-loose text-left">
                With social commerce booming and businesses operating without
                physical storefronts, reliable delivery services have become
                more crucial than ever. However, shortages of dependable
                dispatch riders in many Nigerian cities leave businesses
                struggling to meet customer expectations. Delays,
                inefficiencies, and unprofessionalism are all too common,
                leading to lost sales and frustrated customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
