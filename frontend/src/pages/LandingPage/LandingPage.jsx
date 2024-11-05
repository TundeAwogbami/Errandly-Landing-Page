import React, { useState } from "react";
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
    <div className={showPopUp ? "h-screen overflow-hidden" : ""}>
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
      <Navbar handlePopUp={handlePopUp} />

      {/* Hero section */}
      <HeroSection />

      {/* About section */}
      <AboutSection />

      {/* Features */}
      <FeaturesSection />

      {/* How section */}
      <HowSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
