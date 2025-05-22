import Image from "next/image";
import React, { FC } from "react";
import blogImg01 from "@/public/assets/image/cb706f10c8569303c0fb205b71eb6b750e365bea.jpg";
import blogImg02 from "@/public/assets/image/3ffdfee6cdc306d1adc3430804da278f1e354669.jpg";
import blogImg03 from "@/public/assets/image/c47896f7163021ce9d6845e9e15f10ffb7c61808.jpg";
import Link from "next/link";
import { cn } from "../../utils/cn";

const BlogSectionImageComp: FC<{ image: any; className: string }> = ({
  image,
  className,
}) => {
  return (
    <div className="w-full">
      <div className={cn`w-full  ${className}`}>
        <Image
          alt=""
          src={image}
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" pt-10 flex flex-col gap-4 ">
        <span className=" text-base text-[#B0B0B0] font-rubik">
          February - 22th 2024
        </span>

        <h4 className="text-white font-Gilroy-Bold font-medium text-[28px] leading-7">
          Will you be attending Affiliate Summit Europe?
        </h4>
        <span className="text-[#B0B0B0] font-rubik text-base leading-7">
          Proin efficitur, mauris vel condimentum pulvinar, velit orci
          consectetur ligula
        </span>
        <Link
          href={"/blog"}
          className=" text-[#48FF76] font-rubik text-base  font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogSection: FC = () => {
  return (
    <div className=" border-y  py-[140px]">
      <div className=" flex">
        <div className="w-[500px] flex flex-col justify-between ">
          <div className=" w-full text-center text-[#48FF76] font-rubik text-base leading-7 uppercase tracking-[4px] font-light">
            Our Latest News
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="text-white mt-12 font-Gilroy-Bold font-medium text-[75px] uppercase leading-[100%] ">
            Read our blog
          </div>
        </div>
      </div>
      <div className="flex px-[99px] flex-col md:flex-row gap-7.5 mt-14.5 w-full">
        <BlogSectionImageComp image={blogImg01} className="h-[450px]" />
        <BlogSectionImageComp image={blogImg02} className="h-[359px]" />
        <BlogSectionImageComp image={blogImg03} className="h-[417px]" />
      </div>
    </div>
  );
};

export default BlogSection;
