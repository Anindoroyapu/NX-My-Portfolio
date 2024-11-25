import Image from "next/image";
import React from "react";
import mainName from "@/public/assets/icons/anindo-main.svg";
import lightning1 from "@/public/assets/icons/lightning-1.svg";
import nameElement from "@/public/assets/icons/name-element.svg";
import nameEllipse from "@/public/assets/icons/name-ellipse.svg";

const LandingPage = () => {
  return (
    <div className=" text-white h-screen w-full flex justify-center items-center">
      <div className="mx-[142px] absolute ">
        <Image
          src={mainName}
          alt=""
          width={100}
          height={100}
          sizes="100"
          className="w-full h-auto"
        />
      </div>
      <div className=" flex w-full justify-between">
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
        <div className="w-[186px] mt-14 mr-38 ">
          <Image
            src={nameElement}
            alt=""
            width={100}
            height={100}
            sizes="100"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
