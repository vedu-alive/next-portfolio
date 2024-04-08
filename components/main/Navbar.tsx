import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] top-0 shadow-lg fixed shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:blok text-gray-500">
            WebChain Dev{" "}
          </span>
        </a>
        <div className="w-[500px] h-full flex items-center justify-between md:mr-20">
          <div className="flex text-white flex-row items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full">
            <a className="cursor-pointer" href="#about-me">
              About Me
            </a>
            <a className="cursor-pointer" href="#skills">
              Skills
            </a>
            <a className="cursor-pointer" href="#projects">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:animate-spin"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
