import FadeInSection from "@/anindo/shared/FadeInSection";
import React, { FC } from "react";
import teamImage01 from "@/public/assets/image/11a6ecebbb7fe9792fdfdd87425365b952016a49.jpg";
import Image from "next/image";
import ContactBtn from "@/anindo/shared/ContactBtn";
import AboutDetailsSection from "./AboutDetailsSection";
import { SvgIcon } from "@/anindo/libs/icon";
import AboutBannarSection from "./AboutBannarSection";
import AboutTeamSection from "./AboutTeamSection";

const AnimationDelay = () => {
  return (
    <div className="absolute top-[169px] left-[111px] -z-50">
      <Image
        alt="AnimationRound"
        src={SvgIcon.AnimationRound}
        width={0}
        height={0}
        sizes="100vh"
        className="w-full h-full"
      />
    </div>
  );
};

const AboutDetailsTextComp = () => {
  return (
    <div className="mt-[344px] ml-[111px] w-full">
      <div className="flex items-center gap-32">
        <div className=" text-[65px] uppercase leading-[100%]">
          Unique <span className="text-[90px] font-bold">Ideas</span>
        </div>
      </div>

      <div className=" text-[90px] font-bold uppercase leading-[100%]">
        For Your <span className="text-[65px] font-normal">Business.</span>
      </div>
      <p className="mt-10 max-w-[746px] text-base text-[#B0B0B0] leading-relaxed">
        Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
        ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id
        massa ante. Suspendisse sit amet neque euismod, convallis quam eget,
        dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis
        id. Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Integer nec quam ut tortor efficitur
        consectetur sed vitae nisi.
      </p>
      <AboutDetailsSection />
      <ContactBtn />
    </div>
  );
};

const AboutPage = () => {
  return (
    <FadeInSection>
      <div className="h-auto w-full ">
        <div className="w-full flex relative">
          <AnimationDelay />
          <AboutDetailsTextComp />
          <div className="w-full h-[1100px] mt-[235px]">
            <Image
              alt="teamImage01"
              src={teamImage01}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <AboutBannarSection />
        <AboutTeamSection />
      </div>
    </FadeInSection>
  );
};

export default AboutPage;
