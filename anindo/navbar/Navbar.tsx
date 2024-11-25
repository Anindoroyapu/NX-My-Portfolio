import Image from "next/image";
import React from "react";
import MainLogo from "@/public/assets/MainLogo.svg";
import PrintMark from "@/public/assets/icons/print-mark.svg";
import { menuItems } from "./NavbarMenuList";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[50px] flex mt-[50px] mx-[100px] justify-between">
      <Link href="/" className=" w-[150px]">
        <Image
          src={MainLogo}
          alt=""
          width={100}
          height={100}
          sizes="100"
          className="w-full h-auto"
        />
      </Link>
      <div className=" flex justify-center items-center">
        <div className="flex flex-nowrap gap-20 text-white font-normal text-lg">
          {menuItems.map((item) => (
            <div key={item.href}>
              <Link href={item.href}>
                <div className="hover:text-primary text-white">
                  {item.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="size-[50px] ">
        <Image
          src={PrintMark}
          alt=""
          width={100}
          height={100}
          sizes="100"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Navbar;
