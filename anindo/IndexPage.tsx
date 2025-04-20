import React from "react";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";
import IndexBody from "./indexBody/IndexBody";
import WorkSection from "./indexBody/WorkSection";
import FAQSection from "./indexBody/FAQSection";

const IndexPage = () => {
  return (
    <div className=" w-full h-auto ">
      {/* navbar */}
      <Navbar />

      {/* landing page */}
      <LandingPage />

      {/* body */}
      <IndexBody />
      <WorkSection />
      <FAQSection />
    </div>
  );
};

export default IndexPage;
