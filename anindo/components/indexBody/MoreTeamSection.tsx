import Image from "next/image";
import React, { FC } from "react";
import teamImage01 from "@/public/assets/image/11a6ecebbb7fe9792fdfdd87425365b952016a49.jpg";
import teamImage02 from "@/public/assets/image/520daa5b7b823063259dd3200fda189456952605.jpg";
import teamImage03 from "@/public/assets/image/d395eedb67b9544112d4f907e0c2bbcbb3dc205b.jpg";

const MoreTeamWorkComp: FC<{ number: number | string; work: string }> = ({
  number,
  work,
}) => {
  return (
    <div className=" flex flex-col gap-5">
      <h1 className="text-[120px] font-Gilroy-Bold leading-[100%] text-center font-medium">
        {number}
      </h1>
      <span className="text-center font-rubik text-lg font-bold tracking-[5px]">
        {work}
      </span>
    </div>
  );
};

const MoreTeamImageComp: FC<{ img: any; name: string; tag: string }> = ({
  img,
  name,
  tag,
}) => {
  return (
    <div className="w-[495px] h-[450px] relative">
      <Image
        alt=""
        src={img}
        width={0}
        height={0}
        sizes="100vh"
        className="w-full h-full object-cover"
      />
      <div className=" p-7.5 absolute text-white flex flex-col gap-[5px] bottom-0">
        <span className="bg-black w-fit px-5 py-2.5">{name}</span>
        <span className="bg-black w-fit px-5 py-2.5">{tag}</span>
      </div>
    </div>
  );
};
const MoreTeamHeader = () => {
  return (
    <div className=" flex">
      <div className="w-[500px] flex flex-col justify-between ">
        <div className=" w-full text-center text-[#48FF76] font-rubik text-base leading-7 uppercase tracking-[4px] font-light">
          more team
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <div className="text-white mt-12 font-Gilroy-Bold font-medium text-[75px] uppercase leading-[100%] ">
          join us & Our Awesome <br /> team
        </div>
      </div>
    </div>
  );
};

const MoreTeamSection = () => {
  return (
    <div className="   py-[140px]">
      <MoreTeamHeader />
      <div className="flex pl-[99px] flex-col justify-end md:flex-row gap-7.5 mt-14.5 w-full">
        <MoreTeamImageComp
          img={teamImage01}
          name="Jane Cooper"
          tag="Graphic_designer"
        />
        <MoreTeamImageComp
          img={teamImage02}
          name="Wade Warren"
          tag="UX/UI_Design"
        />
        <MoreTeamImageComp
          img={teamImage03}
          name="Esther Howard"
          tag="Graphic_designer"
        />
      </div>
      <div className=" w-full mt-[140px] flex justify-between px-[100px]">
        <MoreTeamWorkComp number={48} work="Expert Team Member" />
        <MoreTeamWorkComp number={"20+"} work="Years Of Experience" />
        <MoreTeamWorkComp number={25} work="Awards Winning" />
        <MoreTeamWorkComp number={"2K"} work="Project’s Complete" />
      </div>
    </div>
  );
};

export default MoreTeamSection;
