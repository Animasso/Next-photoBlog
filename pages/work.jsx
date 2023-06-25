import { Hero } from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import React from "react";

const Work = () => {
  return (
    <div>
      <Hero
        heading="Check my work"
        message="A little peek of my journey around the world"
      />
      <Portfolio />
    </div>
  );
};
export default Work;
