"use client";
import React from "react";
const Star = () => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4663 0.974123C19.5413 0.341959 20.4587 0.341959 20.5337 0.974123L21.163 6.27741C21.9755 13.1254 27.3746 18.5245 34.2225 19.337L39.5258 19.9663C40.1581 20.0413 40.1581 20.9587 39.5258 21.0337L34.2225 21.663C27.3746 22.4755 21.9755 27.8746 21.163 34.7225L20.5337 40.0258C20.4587 40.6581 19.5413 40.6581 19.4663 40.0258L18.837 34.7225C18.0245 27.8746 12.6254 22.4755 5.77741 21.663L0.474123 21.0337C-0.158041 20.9587 -0.158041 20.0413 0.474123 19.9663L5.77741 19.337C12.6254 18.5245 18.0245 13.1254 18.837 6.27741L19.4663 0.974123Z"
        fill="#141414"
      />
    </svg>
  );
};

const AboutBannarSection = () => {
  return (
    <div className="relative my-[140px] h-[100px] bg-[#48FF76] flex items-center overflow-hidden">
      <div className="flex items-center gap-12.5 text-[38px] uppercase font-Gilroy-Bold font-medium text-black animate-marquee whitespace-nowrap">
        <span>Web Design </span>
        <Star />
        <span>UX / UI Designer</span>
        <Star />
        <span>See all brand</span>
        <Star />
        <span>How to get my design</span>
        <Star />
        <span>Web Design </span>
        <Star />
        <span>UX / UI Designer</span>
        <Star />
        <span>See all brand</span>
        <Star />
        <span>How to get my design</span>
        <Star />
      </div>
    </div>
  );
};

export default AboutBannarSection;
