import React, { FC } from "react";
import teamWorkImg01 from "@/public/assets/image/a34381650d08e85610ffebc5f2be7a20a0749765.jpg";
import teamWorkImg02 from "@/public/assets/image/0d40fc9cbd76acf65563bc6b36dcaccebb52a40b.jpg";
import teamWorkImg03 from "@/public/assets/image/34e4d15c6f5390344a3474b4313fd5ec414c62d1.jpg";
import teamWorkImg04 from "@/public/assets/image/ff49626e049e462cee01100cf624b6a1e3eea217.jpg";
import teamWorkImg05 from "@/public/assets/image/daed7fefc7c4d9fb4c7f0a521d464b6f76d0f4fa.jpg";
import teamWorkImg06 from "@/public/assets/image/ba11dcc42f53295a872967cff2464603e30794dd.jpg";
import Image from "next/image";

const TeamWorkImage: FC<{ img: any }> = ({ img }) => {
  return (
    <Image
      alt="teamWorkImg01"
      src={img}
      width={0}
      height={0}
      sizes="100vh"
      className="size-full object-cover"
    />
  );
};

const TeamWorkSection = () => {
  return (
    <div className=" flex flex-wrap">
      <div className="w-[473px] h-[467px]">
        <TeamWorkImage img={teamWorkImg01} />
      </div>
      <div className="w-[950px] h-[467px] ">
        <TeamWorkImage img={teamWorkImg02} />
      </div>
      <div className="w-[497px] h-[467px] ">
        <TeamWorkImage img={teamWorkImg03} />
      </div>
      <div className="w-[497px] h-[467px] ">
        <TeamWorkImage img={teamWorkImg04} />
      </div>{" "}
      <div className="w-[473px] h-[467px] ">
        <TeamWorkImage img={teamWorkImg05} />
      </div>
      <div className="w-[950px] h-[467px] ">
        <TeamWorkImage img={teamWorkImg06} />
      </div>
    </div>
  );
};

export default TeamWorkSection;
