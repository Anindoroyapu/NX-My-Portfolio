import Image from "next/image";
import React from "react";
import mainName from "@/public/assets/icons/anindo-main.svg";
import lightning1 from "@/public/assets/icons/lightning-1.svg";
import nameElement from "@/public/assets/icons/name-element.svg";
import nameEllipse from "@/public/assets/icons/name-ellipse.svg";
import nameOrnament from "@/public/assets/icons/name-ornament.svg";
import { SignSvg } from "../indexBody/component/svg-icon";
import FadeInSection from "@/anindo/shared/FadeInSection";

const LandingPage = () => {
  return (
    <FadeInSection>
      <div className="h-screen ">
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

        <div className="text-white absolute bottom-0  left-[100px] ">
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
                <SignSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default LandingPage;
