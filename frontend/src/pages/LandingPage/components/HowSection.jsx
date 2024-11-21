import React from "react";
import vector2 from "../../../assets/images/vector2.svg";
import vector3 from "../../../assets/images/vector3.svg";

const HowSection = () => {
  return (
    <>
      <section>
        <div className="container py-10 m-auto">
          <h1 className="pb-10 text-3xl font-medium text-center md:text-5xl font-helvetica-compressed">
            How Does Errandly Work?
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 p-2 md:flex-row">
            <div className="p-5 text-white bg-black rounded-full md:rounded-3xl md:h-[400px] md:w-[250px] relative">
              <div className="rounded-full bg-white h-[25px] w-[25px] md:h-[50px] md:w-[50px] mb-4 absolute md:relative left-10 md:left-0"></div>
              <h1 className="pb-4 text-xl font-medium text-center md:pb-10 md:text-3xl font-helvetica-compressed">
                Sign Up & Request
              </h1>
              <p className="text-xl text-center md:text-2xl">
                Use the app or website to submit your delivery request.
              </p>
            </div>

            <img
              src={vector2}
              alt=""
              className="outline-none select-none drag-none md:hidden"
              draggable="false"
            />

            <div className="p-5 text-white bg-black rounded-full md:rounded-3xl md:h-[400px] md:w-[250px] relative">
              <div className="rounded-full bg-white h-[25px] w-[25px] md:h-[50px] md:w-[50px] mb-4 absolute md:relative left-10 md:left-0"></div>
              <h1 className="pb-4 text-xl font-medium text-center md:pb-10 md:text-3xl font-helvetica-compressed">
                Get Matched
              </h1>
              <p className="text-xl text-center md:text-2xl">
                Errandly matches you with the nearest available, vetted dispatch
                rider.
              </p>
            </div>

            <img
              src={vector3}
              alt=""
              className="outline-none select-none drag-none md:hidden"
              draggable="false"
            />

            <div className="p-5 text-white bg-black rounded-full md:rounded-3xl md:h-[400px] md:w-[250px] relative">
              <div className="rounded-full bg-white h-[25px] w-[25px] md:h-[50px] md:w-[50px] mb-4 absolute md:relative left-10 md:left-0"></div>
              <h1 className="pb-4 text-xl font-medium text-center md:pb-10 md:text-3xl font-helvetica-compressed">
                Real-Time Tracking
              </h1>
              <p className="text-xl text-center md:text-2xl">
                Follow your delivery on the map, from start to finish.
              </p>
            </div>

            <img
              src={vector2}
              alt=""
              className="outline-none select-none drag-none md:hidden"
              draggable="false"
            />

            <div className="p-5 text-white bg-black rounded-full md:rounded-3xl md:h-[400px] md:w-[250px] relative">
              <div className="rounded-full bg-white h-[25px] w-[25px] md:h-[50px] md:w-[50px] mb-4 absolute md:relative left-10 md:left-0"></div>
              <h1 className="pb-4 text-xl font-medium text-center md:pb-10 md:text-3xl font-helvetica-compressed">
                Receive Delivery
              </h1>
              <p className="text-xl text-center md:text-2xl">
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
