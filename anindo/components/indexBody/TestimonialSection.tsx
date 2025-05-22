import React from "react";

const TestimonialSection = () => {
  return (
    <div className=" border-y  py-[140px]">
      <div className=" flex">
        <div className="w-[500px] flex flex-col justify-between ">
          <div className=" w-full text-center text-[#48FF76] font-rubik text-base leading-7 uppercase tracking-[4px] font-light">
            Testimonial
          </div>
        </div>
        <div className="flex flex-col w-full mt-[78px]">
          <div className=" flex gap-[108px] ">
            <svg
              width="112"
              height="203"
              viewBox="0 0 112 203"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112 -0.000488281H38.2222L0 107.787H32L5.33333 203L97.7778 71.8579H64.8889L112 -0.000488281Z"
                fill="#48FF76"
              />
            </svg>

            <div className="w-[896px]">
              <div className="  text-white">
                “ I have been a loyal customer of this auto parts company for
                years and I cannot recommend them enough. Their extensive
                selection of high-quality parts and accessories, combined with
                their competitive prices. ”
              </div>
              <div>Marvin McKinney</div>
              <div>Web designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
