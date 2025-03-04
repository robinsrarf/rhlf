import React from "react";
import kakhagImage from "../../assets/images/3tabs/kakhag.png";
import children from "../../assets/images/3tabs/children.png";
import donate from "../../assets/images/3tabs/donate.png";
import touch from "../../assets/images/3tabs/touch.png";
import hand from "../../assets/images/3tabs/hand.png";

const ThreeTab = () => {
  return (
    <div
      className="relative mt-20 flex h-[60vh] w-full flex-col items-center justify-between"
      style={{
        backgroundImage: `url(${kakhagImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row items-start justify-center gap-x-4 p-2 md:p-0">
        <div className="h-auto w-auto cursor-pointer rounded-xl bg-white p-4 shadow-md transition-all hover:scale-105 md:h-[85px] md:w-44 md:p-3">
          <a href="/programmes">
            <div className="flex flex-row items-center justify-center gap-x-4">
              <img src={donate} alt="donate" className="h-10 w-10" />
              <p className="text-md text-gray-600">
                I want to{" "}
                <span className="font-semibold text-black">Donate</span>
              </p>
            </div>
          </a>
        </div>
        <div className="h-auto w-auto cursor-pointer rounded-xl bg-black p-5 text-white shadow-md transition-all hover:scale-105 md:w-44">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div className="flex flex-row items-center justify-center gap-x-4">
              <img src={hand} alt="donate" className="h-8 w-8" />
              <p className="text-md text-gray-200">
                I want to{" "}
                <span className="font-semibold text-white">Volunteer</span>
              </p>
            </div>
            <p className="text-md text-sm font-light text-white">
              Spread smiles by investing your time
            </p>
          </div>
        </div>
        <a href="/contact">
          <div className="h-auto w-auto cursor-pointer rounded-xl bg-white p-5 shadow-md transition-all hover:scale-105 md:w-44">
            <div className="flex flex-row items-center justify-center gap-x-4">
              <img src={touch} alt="donate" className="h-8 w-8" />
              <p className="text-md text-gray-600">
                Get in <span className="font-semibold text-black">Touch</span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <img
        src={children}
        alt="children"
        className="mt-10 h-[90%] w-full object-contain"
      />
    </div>
  );
};

export default ThreeTab;
