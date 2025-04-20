import React from "react";
import AnimationWork from "./AnimationWork";

const FAQSection = () => {
  return (
    <div className=" mt-[200vh] mx-[100px]  text-white">
      <div className="flex items-center gap-32">
        <div className=" text-[50px] uppercase leading-[100%]">
          Unique <span className="text-[75px] font-bold">Ideas</span>
        </div>
        <div>
          <svg
            width="82"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="41" cy="40.9998" r="41" fill="#48FF76" />
            <path
              d="M51.9806 35.1959C52.0889 34.6543 51.7377 34.1275 51.1961 34.0192L42.3709 32.2541C41.8293 32.1458 41.3025 32.497 41.1942 33.0386C41.0859 33.5802 41.4371 34.107 41.9787 34.2153L49.8233 35.7842L48.2544 43.6289C48.1461 44.1704 48.4973 44.6973 49.0388 44.8056C49.5804 44.9139 50.1072 44.5627 50.2155 44.0211L51.9806 35.1959ZM33.5547 47.8318L51.5547 35.8318L50.4453 34.1677L32.4453 46.1677L33.5547 47.8318Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className=" text-[75px] font-bold uppercase leading-[100%]">
        For Your <span className="text-[50px] font-normal">Business.</span>
      </div>
      <div>
        <div>
          <AnimationWork />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
