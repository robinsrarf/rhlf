import React from "react";

import { BiArrowBack } from "react-icons/bi";

import children from "../../assets/images/3tabs/children.png";
import mainslider from "../../assets/images/mainslider.png";
import homepage from "../../assets/images/homepage.png";
import mealtab from "../../assets/images/mealtab.png";
import ThreeTab from "./ThreeTab";

const Hero = () => {
  const importImage = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  };
  return (
    <div className="relative mx-auto w-full max-w-[1360px] text-[20px] text-black">
      <Carousel>
        <div>
          <div className="relative flex flex-col items-center justify-center">
            <img src={homepage} alt="Homepage" className="w-full" />
            <img src={mealtab} alt="Meal Tab" className="mt-[-40px] w-[50%]" />
          </div>

          <h1 className="heading mt-8 text-center text-3xl font-light md:text-5xl">
            <span className="font-medium text-gray-700">Together</span> We Make
            a <span className="font-bold text-black">Difference</span>
          </h1>

          <div className="flex flex-col items-center justify-center text-lg text-gray-500">
            <p>
              Real Happiness Of Life Foundation for social change and inclusion
              works for the social
            </p>
            <p>
              development and integration of underprivileged individuals,
              groups, and communities in India.
            </p>
          </div>
        </div>
        <div>
          <ThreeTab />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
