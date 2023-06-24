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
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {sliderImages.map((slide, i) => (
          <div
            key={i}
            className={
              i === current
                ? " flex flex-col justify-center items-center opacity-[1] ease-in duration-500"
                : "hidden"
            }
          >
            <div className="relative flex justify-center p-4">
              <FaArrowCircleLeft
                className=" absolute text-white/70 cursor-pointer select-none  z-[2] top-[50%] left-[30px]"
                size={30}
                onClick={prevImage}
              />
              {i === current && (
                <Image width="700" height="600" src={slide.image} alt="" />
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
    </div>
  );
};
