import React from "react";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";
import IndexBody from "./indexBody/IndexBody";

const IndexPage = () => {
  return (
    <div className=" w-full h-auto ">
      <Navbar />
      <LandingPage />
      <IndexBody />
    </div>
  );
};

export default IndexPage;
