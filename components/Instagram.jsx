import React from "react";
import Sunset1 from "../public/sunset-1.jpg";
import Sunset2 from "../public/sunset-2.jpg";
import Autumn from "../public/autumn.jpg";
import Desert from "../public/desert.jpg";
import Forest from "../public/forest.jpg";
import Stones from "../public/stones.jpg";
import { Instagramming } from "./Instagramming";
export const Instagram = () => {
  return (
    <div className=" max-w[1240px] mx-auto text-center py-24">
      <p className=" text-2xl font-bold">Follow me on Instagram</p>
      <p className=" pb-4">@PhotoPro</p>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <Instagramming instaImg={Sunset1} />
        <Instagramming instaImg={Sunset2} />
        <Instagramming instaImg={Autumn} />
        <Instagramming instaImg={Forest} />
        <Instagramming instaImg={Stones} />
        <Instagramming instaImg={Desert} />
      </div>
    </div>
  );
};
