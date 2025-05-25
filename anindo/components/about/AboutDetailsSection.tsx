import React, { FC } from "react";

const AboutComp: FC<{ title: string; item01: string; item02: string }> = ({
  title,
  item01,
  item02,
}) => {
  return (
    <div className="mt-[10px] py-7.5 border-b w-full max-w-[365px]">
      <h4 className="pb-7.5 text-[28px] font-Gilroy-Bold font-medium">
        {title}
      </h4>
      <p className="pb-[15px] text-base text-[#B0B0B0] font-rubik">{item01}</p>
      <p className=" text-base text-[#B0B0B0] font-rubik">{item02}</p>
    </div>
  );
};

const AboutDetailsSection = () => {
  return (
    <div className=" flex flex-wrap gap-14.5 mt-1.5">
      <AboutComp
        title="Awards"
        item01="Milan Art Festival"
        item02="Developer awards"
      />
      <AboutComp
        title="Recognitions"
        item01="Developer awards"
        item02="Css Awards2"
      />
      <AboutComp
        title="Skills"
        item01="Motion design"
        item02="Morison graphic desing"
      />
      <AboutComp title="Socials" item01="FACEBOOK_" item02="INSTATRAM_" />
    </div>
  );
};

export default AboutDetailsSection;
