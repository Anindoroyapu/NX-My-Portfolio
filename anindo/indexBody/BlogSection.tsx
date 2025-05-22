import React from "react";

const BlogSection = () => {
  return (
    <div className=" border-y  py-[140px]">
      <div className=" flex">
        <div className="w-[500px] flex flex-col justify-between ">
          <div className=" w-full text-center text-[#48FF76] font-rubik text-base leading-7 uppercase tracking-[4px] font-light">
            Our Latest News
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="text-white mt-12 font-Gilroy-Bold font-medium text-[75px] uppercase leading-[100%] ">
            Read our blog
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
