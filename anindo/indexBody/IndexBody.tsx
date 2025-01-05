import Image from "next/image";
import React from "react";
import ProinFiciture from "@/public/assets/image/proin-efficiture.svg";
import graphicElements from "@/public/assets/image/graphic-elements.svg";
import iconMouse from "@/public/assets/icons/icon-mouse.svg";

const IndexBody = () => {
  return (
    <div className=" text-white mt-36">
      <div className=" w-full flex">
        <div className=" w-full flex justify-end">
          <div className="w-[545px] ">
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
            <div className=" ml-[85px]  pt-[80px]">
              <div className=" text-xl font-semibold ">
                A design <br />
                created with passion.
              </div>
              <div className=" text-sm  font-semibold mt-1.5 ">
                Proin efficitur, mauris velt to <br /> condimentum pulvinar.
              </div>
            </div>
          </div>

          <div className="w-[363px] ml-[200px]">
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
  );
};

export default IndexBody;
