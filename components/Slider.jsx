import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
export const Slider = ({ sliderImages }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className=" max-w-[1240px] mx-auto">
      <h1 className=" text-xl font-bold text-center p-4">Gallery</h1>

      {sliderImages.map((slide, i) => (
        <div
          key={i}
          className={
            i === current ? "  opacity-[1] ease-in duration-500" : "hidden"
          }
        >
          <div className="relative flex justify-center p-4">
            <FaArrowCircleLeft
              className=" absolute text-white/70 cursor-pointer select-none  z-[2] top-[50%] left-[30px]"
              size={30}
              onClick={prevImage}
            />
            {i === current && (
              <Image width="1440" height="600" src={slide.image} alt="" />
            )}
            <FaArrowCircleRight
              onClick={nextImage}
              className=" absolute text-white/70 cursor-pointer select-none  z-[2] top-[50%] right-[30px]"
              size={30}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
