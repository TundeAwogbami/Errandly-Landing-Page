import React from "react";

const FeaturesSection = () => {
  return (
    <>
      <section
        className="bg-brown bg-no-repeat bg-[length:50%] bg-feature-image bg-right text-white relative z-20"
        id="features"
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-purple-transparent -z-10"></div>
        <div className="container py-10 m-auto">
          <div className="flex items-start justify-center gap-20">
            <div className="w-1/2">
              <h1 className="pt-10 pb-10 text-4xl font-bold font-helveticaCompressed">
                Features made just for you
              </h1>
              <p className="text-4xl">
                We Understand the Challenges of Unreliable Deliveries Whether
                you’re running an online shop or need to send a parcel, Errandly
                makes it easy to request and track deliveries in real time.
              </p>
            </div>
            <div className="w-1/2">
              <div className="p-2 mb-5 bg-black-transparent rounded-xl">
                <h2 className="text-2xl font-bold">Seamless Request System</h2>
                <p className="text-xl">
                  Easily request a delivery via our user-friendly app or
                  website.
                </p>
              </div>
              <div className="p-2 mb-5 bg-black-transparent rounded-xl">
                <h2 className="text-2xl font-bold">Real-Time Tracking</h2>
                <p className="text-xl">
                  Monitor your parcel from pickup to drop-off.
                </p>
              </div>
              <div className="p-2 mb-5 bg-black-transparent rounded-xl">
                <h2 className="text-2xl font-bold">
                  Vetted Delivery Providers
                </h2>
                <p className="text-xl">
                  Errandly ensures all riders are professional, trained, and
                  reliable.
                </p>
              </div>
              <div className="p-2 mb-5 bg-black-transparent rounded-xl">
                <h2 className="text-2xl font-bold">
                  Efficient & Reliable Service
                </h2>
                <p className="text-xl">
                  No more delays—Errandly’s extensive network ensures delivery
                  when you need it.
                </p>
              </div>
              <div className="p-2 mb-5 bg-black-transparent rounded-xl">
                <h2 className="text-2xl font-bold">Access Anytime</h2>
                <p className="text-xl">
                  Deliveries for both individuals and businesses, available
                  on-demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
