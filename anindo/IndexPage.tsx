import React from "react";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";
import IndexBody from "./indexBody/IndexBody";
import WorkSection from "./indexBody/WorkSection";

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
    </div>
  );
};

export default IndexPage;
