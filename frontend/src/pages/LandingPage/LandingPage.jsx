import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PopUp from "../../components/PopUp";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import HowSection from "./components/HowSection";

const LandingPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState("");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

  const scrollToSection = (ref) => (event) => {
    event.preventDefault();
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const closePopUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setShowPopUp(false);
    setPopUpType("");
  };

  const handlePopUp = (type) => {
    setShowPopUp(true);
    setPopUpType(type);
  };

  return (
    <div className={showPopUp ? "h-screen overflow-hidden" : ""} ref={homeRef}>
      {showPopUp && (
        <PopUp
          closePopUp={closePopUp}
          handlePopUp={handlePopUp}
          popUpType={popUpType}
          showPopUp={showPopUp}
        />
      )}

      {/* Header Section */}
      <HeaderSection />

      {/* Navbar */}
      <Navbar
        handlePopUp={handlePopUp}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        featuresRef={featuresRef}
      />

      {/* Hero section */}
      <HeroSection handlePopUp={handlePopUp} />

      {/* About section */}
      <AboutSection aboutRef={aboutRef} />

      {/* Features */}
      <FeaturesSection featuresRef={featuresRef} />

      {/* How section */}
      <HowSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
