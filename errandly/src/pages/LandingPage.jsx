import React from "react";
import logo from "../assets/logo.png";
import clock from "../assets/clock.png";
import envelope from "../assets/envelope.png";
import phone from "../assets/phone.png";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero-image.jpg";
import avatar from "../assets/avatar.png";
import Footer from "../components/Footer";

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
          <div className="w-1/2">
            <h1 className="pb-2 text-5xl font-bold text-brown font-helveticaCompressed">
              Effortless Deliveries, Anytime, Anywhere.
            </h1>
            <p className="text-2xl font-bold text-center font-helveticaRounded">
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

      {/* About section */}
      <section
        className="bg-brown bg-no-repeat bg-[length:50%] bg-about-image text-white relative z-20"
        id="about"
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-purple-transparent -z-10"></div>
        <div className="container m-auto">
          <div className="text-center">
            <h1 className="p-4 text-6xl font-medium">Why Errandly?</h1>
            <p className="text-2xl">Growing Demand, Unreliable Deliveries</p>
          </div>
          <div className="flex items-start justify-center gap-4 pb-20">
            <div className="pt-20">
              <div className="p-10 bg-black-transparent rounded-full h-[450px] w-[450px] flex flex-col justify-center items-center">
                <h1 className="pb-16 text-4xl">What we offer</h1>
                <p className="-mt-4 text-3xl text-center">
                  Errandly connects individuals and businesses with a vast
                  network of qualified, vetted delivery providers, ensuring
                  timely and reliable deliveries
                </p>
              </div>

              <div className="flex rounded-r-full bg-brown w-[350px] h-[90px] ml-20">
                <p className="p-2 text-2xl text-center">
                  Over <span className="text-3xl font-bold">283</span> sign ups
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

      {/* Features */}
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

      {/* How section */}
      <section>
        <div className="container py-10 m-auto">
          <h1 className="pb-10 text-5xl font-bold text-center font-helveticaCompressed">
            How Does Errandly Work?
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-3xl font-semibold text-center">
                Sign Up & Request
              </h1>
              <p className="text-2xl text-center">
                Use the app or website to submit your delivery request.
              </p>
            </div>
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-3xl font-semibold text-center">
                Get Matched
              </h1>
              <p className="text-2xl text-center">
                Errandly matches you with the nearest available, vetted dispatch
                rider.
              </p>
            </div>
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-3xl font-semibold text-center">
                Real-Time Tracking
              </h1>
              <p className="text-2xl text-center">
                Follow your delivery on the map, from start to finish.
              </p>
            </div>
            <div className="p-5 text-white bg-black rounded-3xl h-[400px] w-[250px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] mb-4"></div>
              <h1 className="pb-10 text-xl font-semibold text-center">
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

      <Footer />
    </>
  );
};

export default LandingPage;
