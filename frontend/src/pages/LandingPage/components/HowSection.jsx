import React from "react";

const HowSection = () => {
  return (
    <>
      <section>
        <div className="container py-10 m-auto">
          <h1 className="pb-10 text-5xl font-medium text-center font-helvetica-compressed">
            How Does Errandly Work?
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-3xl font-medium text-center font-helvetica-compressed">
                Sign Up & Request
              </h1>
              <p className="text-2xl text-center">
                Use the app or website to submit your delivery request.
              </p>
            </div>
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-3xl font-medium text-center font-helvetica-compressed">
                Get Matched
              </h1>
              <p className="text-2xl text-center">
                Errandly matches you with the nearest available, vetted dispatch
                rider.
              </p>
            </div>
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-3xl font-medium text-center font-helvetica-compressed">
                Real-Time Tracking
              </h1>
              <p className="text-2xl text-center">
                Follow your delivery on the map, from start to finish.
              </p>
            </div>
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-3xl font-medium text-center font-helvetica-compressed">
                Receive Delivery
              </h1>
              <p className="text-2xl text-center">
                Your parcel arrives, fast and efficiently, right at your
                doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowSection;
