import React from "react";
import { Element } from "react-scroll";

const FeaturesSection = ({ featuresRef }) => {
  return (
    <>
      <Element name="features">
        <section
          className="bg-brown bg-no-repeat bg-[length:50%] md:bg-feature-image bg-right text-white relative z-20"
          ref={featuresRef}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-purple-transparent -z-10"></div>
          <div className="container m-auto md:py-10">
            <div className="flex flex-col items-center justify-center gap-10 md:gap-20 md:items-start md:flex-row">
              <div className="p-2 md:w-1/2">
                <h1 className="pt-4 pb-10 text-3xl font-medium text-center md:text-left md:text-4xl md:pt-10 font-helvetica-compressed">
                  Features made just for you
                </h1>
                <p className="text-2xl font-light text-center md:text-4xl md:text-start">
                  We Understand the Challenges of Unreliable Deliveries Whether
                  you’re running an online shop or need to send a parcel,
                  Errandly makes it easy to request and track deliveries in real
                  time.
                </p>
              </div>

              <div className="px-10 py-10 bg-cover md:w-1/2 bg-feature-image md:bg-none md:p-0">
                <div className="px-6 py-2 mb-5 rounded-full md:p-2 bg-black-transparent md:rounded-xl">
                  <h2 className="text-xl font-medium text-center md:text-start md:text-2xl font-helvetica-compressed">
                    Seamless Request System
                  </h2>
                  <p className="text-xl font-light text-center md:text-2xl md:text-start">
                    Easily request a delivery via our user-friendly app or
                    website.
                  </p>
                </div>
                <div className="px-6 py-2 mb-5 rounded-full md:p-2 bg-black-transparent md:rounded-xl">
                  <h2 className="text-xl font-medium text-center md:text-start md:text-2xl font-helvetica-compressed">
                    Real-Time Tracking
                  </h2>
                  <p className="text-xl font-light text-center md:text-2xl md:text-start">
                    Monitor your parcel from pickup to drop-off.
                  </p>
                </div>
                <div className="px-6 py-2 mb-5 rounded-full md:p-2 bg-black-transparent md:rounded-xl">
                  <h2 className="text-xl font-medium text-center md:text-start md:text-2xl font-helvetica-compressed">
                    Vetted Delivery Providers
                  </h2>
                  <p className="text-xl font-light text-center md:text-2xl md:text-start">
                    Errandly ensures all riders are professional, trained, and
                    reliable.
                  </p>
                </div>
                <div className="px-6 py-2 mb-5 rounded-full md:p-2 bg-black-transparent md:rounded-xl">
                  <h2 className="text-xl font-medium text-center md:text-start md:text-2xl font-helvetica-compressed">
                    Efficient & Reliable Service
                  </h2>
                  <p className="text-xl font-light text-center md:text-2xl md:text-start">
                    No more delays—Errandly’s extensive network ensures delivery
                    when you need it.
                  </p>
                </div>
                <div className="px-6 py-2 mb-5 rounded-full md:p-2 bg-black-transparent md:rounded-xl">
                  <h2 className="text-xl font-medium text-center md:text-start md:text-2xl font-helvetica-compressed">
                    Access Anytime
                  </h2>
                  <p className="text-xl font-light text-center md:text-2xl md:text-start">
                    Deliveries for both individuals and businesses, available
                    on-demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default FeaturesSection;
