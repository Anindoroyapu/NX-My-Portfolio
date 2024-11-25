import React from "react";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default IndexPage;
