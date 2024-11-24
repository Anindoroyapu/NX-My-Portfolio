import React from "react";
import Image from "next/image";

const IndexPage = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6">
        <div className="text-green-500 font-bold text-2xl flex items-center">
          <div className="bg-green-500 text-black p-2 rounded-full">h</div>
          <span className="ml-2">Moni</span>
        </div>
        <ul className="flex gap-8 text-sm">
          <li className="hover:text-green-500 transition-colors">Home</li>
          <li className="hover:text-green-500 transition-colors">About</li>
          <li className="hover:text-green-500 transition-colors">Pages</li>
          <li className="hover:text-green-500 transition-colors">Services</li>
          <li className="hover:text-green-500 transition-colors">Projects</li>
          <li className="hover:text-green-500 transition-colors">Blogs</li>
        </ul>
        <div className="p-3 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-700">
          <Image src="/path/to/icon.png" alt="Icon" width={20} height={20} />
        </div>
      </nav>

      {/* Main Heading */}
      <div className="text-center flex flex-col items-center md:items-start max-w-6xl mx-auto mt-20 px-4">
        <h1 className="text-8xl md:text-[180px] font-extrabold tracking-tight flex items-center">
          <span>H</span>
          <span className="relative text-green-500 mx-4">
            M
            <span className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 scale-125 text-green-500 z-[-1]">
              <svg width="100" height="100">
                {/* Add your custom SVG here */}
              </svg>
            </span>
          </span>
          <span>ONI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2 tracking-widest uppercase">
          Creative UI/UX Designer
        </p>
        <p className="text-gray-400 mt-4 max-w-lg">
          Proin efficitur, mauris vel condimentum pulvinar, velit orci
          consectetur ligula
        </p>

        {/* Profile Info */}
        <div className="flex items-center mt-8 space-x-4">
          <Image
            src="/path/to/avatar.jpg" // Replace with your image path
            alt="Eleanor Pena"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-lg font-semibold">Eleanor Pena</p>
            <p className="text-green-500">Creative Partner</p>
          </div>
        </div>
      </div>

      {/* Decorative Abstract Element */}
      <div className="absolute right-0 bottom-0 transform translate-y-1/3 md:translate-y-1/4 lg:translate-y-1/2 scale-125 md:scale-150">
        <Image
          src="/path/to/decorative-element.png" // Replace with your decorative image path
          alt="Decorative Element"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default IndexPage;
