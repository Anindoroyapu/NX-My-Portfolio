"use client";
import React, { useEffect } from "react";
import FadeInSection from "@/anindo/shared/FadeInSection";
import LandingBody from "./LandingBodySection";

const LandingPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/particle-canvas.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <canvas
        id="particleCanvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      ></canvas>

      <FadeInSection>
        <LandingBody />
      </FadeInSection>
    </>
  );
};

export default LandingPage;
