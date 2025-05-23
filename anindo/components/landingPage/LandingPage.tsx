import Image from "next/image";
import React from "react";
import mainName from "@/public/assets/icons/anindo-main.svg";
import lightning1 from "@/public/assets/icons/lightning-1.svg";
import nameElement from "@/public/assets/icons/name-element.svg";
import nameEllipse from "@/public/assets/icons/name-ellipse.svg";
import nameOrnament from "@/public/assets/icons/name-ornament.svg";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <div className="pt-[100px] text-white h-full w-full flex justify-center items-center">
        <div className="absolute">
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
          <div className="w-[700px] -mt-28">
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

      <div className="text-white absolute bottom-0 left-[100px] ">
        <div className=" text-white  max-w-[413px]">
          <p className="text-base text-gray-300 leading-relaxed mb-3">
            Proin efficitur, mauris vel condimentum pulvinar, velit orci
            consectetur ligula
          </p>

          <div className="h-px w-full bg-gradient-to-r from-yellow-500 to-transparent mb-3" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className=" size-[62px]">
                <Image
                  src={mainName}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="size-full"
                />
              </div>

              <div>
                <h4 className="font-semibold">Eleanor Pena</h4>
                <p className="text-gray-400 text-sm">Eleanor Pena</p>
              </div>
            </div>

            <div className="text-teal-500 font-signature text-xl sm:text-2xl">
              <svg
                width="126"
                height="48"
                viewBox="0 0 126 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  y="0.5"
                  width="126"
                  height="47"
                  fill="url(#pattern0_2184_58)"
                />
                <defs>
                  <pattern
                    id="pattern0_2184_58"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_2184_58"
                      transform="matrix(0.00456621 0 0 0.0122413 0 -0.00306033)"
                    />
                  </pattern>
                  <image
                    id="image0_2184_58"
                    width="219"
                    height="110"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
