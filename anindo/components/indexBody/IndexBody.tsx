import Image from "next/image";
import React from "react";
import ProinFiciture from "@/public/assets/image/proin-efficiture.svg";
import graphicElements from "@/public/assets/image/graphic-elements.svg";
import iconMouse from "@/public/assets/icons/icon-mouse.svg";

const IndexBody = () => {
  return (
    <div className=" w-full flex justify-end">
      <div className=" text-white mt-[28px] h-full  mr-[200px] w-[1223px] overflow-hidden">
        <div className=" w-full flex">
          <div className=" w-full flex justify-end">
            <div className="w-[545px] h-auto">
              <Image
                src={ProinFiciture}
                alt=""
                width={100}
                height={100}
                sizes="100"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className=" w-full flex items-center mt-[100px]">
            <div className=" ">
              <div className="border w-0 h-[300px] ml-[100px]"></div>
              <div className="w-[30px] ml-[87px] mt-[50px]">
                <Image
                  src={iconMouse}
                  alt=""
                  width={100}
                  height={100}
                  sizes="100"
                  className="w-full h-auto"
                />
              </div>
              <div className=" ml-[85px]  pt-[70px]">
                <div className=" text-xl font-semibold uppercase ">
                  A design <br />
                  created with passion.
                </div>
                <div className=" text-xs  font-semibold mt-1.5 ">
                  Proin efficitur, mauris velt to condimentum pulvinar.
                </div>
              </div>
            </div>

            <div className="min-w-[363px] ml-[100px]">
              <Image
                src={graphicElements}
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
    </div>
  );
};

export default IndexBody;
