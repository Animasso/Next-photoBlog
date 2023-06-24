import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
export const Instagramming = ({ instaImg }) => {
  return (
    <div className=" relative">
      <Image src={instaImg} alt="" className=" w-full h-full" />
      <div className=" flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 hover:bg-black/50 group" />
      <p className=" text-gray-300 hidden group-hover:block">
        <FaInstagram size={30} />{" "}
      </p>
    </div>
  );
};
