import Image from "next/image";
import React from "react";
import mainName from "@/public/assets/icons/anindo-main.svg";
import lightning1 from "@/public/assets/icons/lightning-1.svg";
import nameElement from "@/public/assets/icons/name-element.svg";
import nameEllipse from "@/public/assets/icons/name-ellipse.svg";
import nameOrnament from "@/public/assets/icons/name-ornament.svg";

const LandingPage = () => {
  return (
    <div className="pt-[100px] text-white h-full w-full flex justify-center items-center">
      <div className="  absolute ">
        <div className="w-full mx-0 mt-10">
          <Image
            src={mainName}
            alt=""
            width={100}
            height={100}
            sizes="100"
            className="w-full h-auto"
          />
        </div>
        <span className="ml-[330px] lead-[29px] tracking-30-percent">
          Creative UI/UX Designer
        </span>
      </div>
      <div className=" flex w-full justify-between mt-[80px]">
        <div className="w-[476px] ">
          <Image
            src={nameEllipse}
            alt=""
            width={100}
            height={100}
            sizes="100"
            className="w-full h-auto"
          />
        </div>
        <div className="w-[389px]">
          <Image
            src={lightning1}
            alt=""
            width={100}
            height={100}
            sizes="100"
            className="w-full h-auto"
          />
        </div>
        <div>
          <div className="w-[186px] ml-20 mt-5">
            <Image
              src={nameElement}
              alt=""
              width={100}
              height={100}
              sizes="100"
              className="w-full h-auto"
            />
          </div>
          <div className="w-[379px] mt-44">
            <Image
              src={nameOrnament}
              alt=""
              width={100}
              height={100}
              sizes="100"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
