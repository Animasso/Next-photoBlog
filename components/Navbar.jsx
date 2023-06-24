import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className=" fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className=" max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href={"/"}>
          <h1 style={{ color: `${textColor}` }} className=" font-bold text-4xl">
            Capture
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className=" hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* mobile format */}
        <div
          className="block sm:hidden z-10"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        <div
          className={
            openMenu
              ? " sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500 "
              : " sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500 "
          }
          style={{ color: `${textColor}` }}
        >
          <ul style={{ color: `${textColor}` }}>
            <li className=" p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className=" p-4 text-4xl hover:text-gray-500">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className=" p-4 text-4xl hover:text-gray-500">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className=" p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
