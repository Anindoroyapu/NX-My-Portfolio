import React from "react";
import AnimationWork from "./AnimationWork";
import { FAQList } from "./component/FAQList";
import Image from "next/image";
import workPhoto01 from "./component/AnimationWork.svg";
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
      <div className="flex items-center gap-[200px]">
        <div>
          <Image
            src={workPhoto01}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="size-full"
          />
        </div>
        <div className=" w-full">
          <div className="w-[100%] h-[1px] bg-gray-200 " />
          {FAQList.map((item) => (
            <div
              key={item.id}
              className="py-8 flex justify-between border-b-2 group"
            >
              <div className="flex text-white items-center gap-10">
                <div className="text-lg font-bold">{item.sl}</div>
                <div className="text-xl font-bold">{item.name}</div>
              </div>
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:hidden"
                >
                  <circle cx="15" cy="14.9998" r="15" fill="#333333" />
                  <path
                    d="M22.9839 10.1786C23.0827 9.63526 22.7223 9.11468 22.1789 9.01589L13.3241 7.40592C12.7807 7.30712 12.2601 7.66753 12.1613 8.2109C12.0625 8.75428 12.4229 9.27486 12.9663 9.37366L20.8372 10.8047L19.4062 18.6757C19.3074 19.2191 19.6678 19.7397 20.2111 19.8385C20.7545 19.9373 21.2751 19.5768 21.3739 19.0335L22.9839 10.1786ZM9.56921 19.8219L22.5692 10.8219L21.4308 9.17756L8.43079 18.1776L9.56921 19.8219Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden group-hover:block"
                >
                  <circle cx="27" cy="26.9998" r="27" fill="#48FF76" />
                  <path
                    d="M40.5838 18.1787C40.6826 17.6353 40.3222 17.1147 39.7788 17.0159L30.924 15.4059C30.3806 15.3071 29.86 15.6675 29.7613 16.2109C29.6625 16.7543 30.0229 17.2749 30.5662 17.3737L38.4372 18.8048L37.0061 26.6757C36.9073 27.2191 37.2677 27.7397 37.8111 27.8385C38.3545 27.9373 38.8751 27.5769 38.9739 27.0335L40.5838 18.1787ZM16.7692 35.022L40.1692 18.822L39.0307 17.1776L15.6307 33.3776L16.7692 35.022Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
