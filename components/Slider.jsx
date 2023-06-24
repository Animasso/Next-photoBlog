import React from "react";
import Image from "next/image";
export const Slider = ({ SliderImages }) => {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {SliderImages.map((slide, i) => (
          <div key={i} className=" flex flex-col justify-center items-center">
            <Image width="700" height="600" src={slide.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
