"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MainLogo from "@/public/assets/MainLogo.svg";
import PrintMark from "@/public/assets/icons/print-mark.svg";
import { menuItems } from "./NavbarMenuList";
import Link from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down and passed threshold
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed h-[100px]   transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full "
      }`}
    >
      <div className=" flex justify-between mt-[50px] ">
        <Link href="/" className=" w-[150px] ml-[100px]">
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
        <div className="size-[50px] mr-[100px]">
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
    </div>
  );
};

export default Navbar;
