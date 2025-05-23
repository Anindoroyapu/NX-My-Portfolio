import Image from "next/image";
import React from "react";
import DividerImg from "@/public/assets/image/Divider.png";
import DividerClientImg from "@/public/assets/image/Client.png";
import {
  AwardsImg,
  AwwwardsImg,
  BehanceImg,
  NoCodeImg,
} from "./component/svg-icon";

const DividerSection = () => {
  return (
    <div className=" mt-[160px] relative">
      <div className="mx-[100px]">
        <Image
          src={DividerImg}
          alt=""
          width={100}
          height={100}
          sizes="100vh"
          className="w-full h-auto"
        />
      </div>
      <div className=" flex justify-between mx-[54px] mt-[65px]">
        <div className=" w-[430px] h-[100px] mt-14.5 flex items-center justify-center border border-gray-700 bg-white/10">
          <AwardsImg />
        </div>
        <div className=" w-[430px] h-[100px] flex items-center justify-center border border-gray-700 bg-white bg-opacity-10">
          <BehanceImg />
        </div>
        <div className=" w-[430px] h-[100px] mt-14.5 flex items-center justify-center border border-gray-700 bg-white bg-opacity-10">
          <AwwwardsImg />
        </div>
        <div className=" bg-black h-fit">
          <div className=" w-[430px] h-[100px] flex items-center justify-center border border-gray-700 bg-white bg-opacity-10">
            <NoCodeImg />
          </div>
        </div>
      </div>
      <div className="ml-[54px] w-[440px] h-auto float-right absolute -z-10 top-[506px] right-0">
        <Image
          src={DividerClientImg}
          alt="DividerClientImg"
          width={100}
          height={100}
          sizes="100vh"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default DividerSection;
