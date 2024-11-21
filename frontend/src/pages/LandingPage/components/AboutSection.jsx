import React from "react";
import avatar from "../../../assets/images/avatar.png";
import { Element } from "react-scroll";

const AboutSection = ({ aboutRef }) => {
  return (
    <>
      <Element name="about">
        <section
          className="bg-brown bg-no-repeat bg-[length:50%] md:bg-about-image text-white relative z-20"
          ref={aboutRef}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-purple-transparent -z-10"></div>
          <div className="container m-auto">
            <div className="text-center">
              <h1 className="p-4 text-3xl font-medium md:text-6xl font-helvetica-compressed">
                Why Errandly?
              </h1>
              <p className="text-xl md:text-2xl">
                Growing Demand, Unreliable Deliveries
              </p>
            </div>

            <div className="flex flex-col-reverse items-start justify-center gap-4 md:pb-20 md:flex-row ">
              <div className="w-full p-0 pt-20 bg-cover bg-about-image md:bg-none">
                <h1 className="pb-16 text-3xl text-center text-black md:text-4xl font-helvetica-compressed md:hidden">
                  What we offer
                </h1>
                <div className="p-10 bg-black-transparent rounded-full md:h-[450px] md:w-[450px] h-[300px] w-[300px] flex flex-col justify-center items-center m-auto">
                  <h1 className="hidden pb-16 text-3xl md:text-4xl font-helvetica-compressed md:block">
                    What we offer
                  </h1>
                  <p className="-mt-4 text-xl text-center md:text-3xl">
                    Errandly connects individuals and businesses with a vast
                    network of qualified, vetted delivery providers, ensuring
                    timely and reliable deliveries
                  </p>
                </div>

                <div className="flex rounded-r-full bg-brown w-[210px] h-[60px] md:w-[300px] md:h-[90px] md:ml-20 m-auto">
                  <p className="p-2 text-center md:text-2xl">
                    Over{" "}
                    <span className="font-medium md:text-3xl font-helvetica-compressed">
                      283
                    </span>{" "}
                    sign ups for the waiting list
                  </p>
                  <img
                    src={avatar}
                    alt="avatar"
                    className="h-[60px] w-[60px] md:w-[90px] md:h-[90px]"
                  />
                </div>
              </div>

              <div className="pt-6">
                <h1 className="pb-4 text-3xl font-bold text-center md:pb-16 md:text-right md:text-4xl font-helveticaCompressed">
                  Shortage of dependable dispatch riders
                </h1>
                <p className="text-xl leading-loose text-center md:text-2xl md:text-left">
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
      </Element>
    </>
  );
};

export default AboutSection;
