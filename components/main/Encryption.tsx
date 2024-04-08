"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen h-full w-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div className="text-[40px] font-medium text-gray-200 text-center">
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &{" "}
          </span>{" "}
          Security
        </motion.div>
      </div>
      <div className="w-auto h-auto flex items-center top-0 flex-col justify-center translate-y-60 absolute z-20 ">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src={"/LockTop.png"}
            alt="Lock Top"
            height={50}
            width={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src={"/LockMain.png"}
            alt="Lock Main"
            height={70}
            width={70}
            className="z-10"
          />
        </div>
      </div>
      <div className=" absolute Welcome-box px-[15px] py-1 z-20 border my-[20px] border-[#7042f88b] opacity-[0.9]">
        <h1 className="Welcome-text text-[12px]">Encrytion</h1>
      </div>
      <div className="absolute z-20 bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end to end encryption
        </div>
      </div>
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
