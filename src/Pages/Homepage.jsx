import React, { lazy, Suspense } from "react";
import "../CSS/Homepage.css";

// Lazy-loaded components for performance optimization
const Carousel = lazy(() => import("./homecomponents/Carousel"));
const AboutCleanHeat = lazy(()=> import("./homecomponents/AboutCleanHeart"))
const CampaignCard = lazy(() => import("./homecomponents/CampaignCard"));
const Medicalemg = lazy(() => import("./homecomponents/Medicalemg"));
const Partners = lazy(() => import("./homecomponents/Partners"));
const Category = lazy(() => import("./homecomponents/Category"));
const ProgramImpact = lazy(() => import("./homecomponents/ProgramImpact"));
const Assureyou = lazy(() => import("./homecomponents/Assureyou"));
const Testimonals = lazy(() => import("./homecomponents/Testimonals"));
const ThreeTab = lazy(() => import("./homecomponents/ThreeTab"));

// Reusable Section Header Component
const SectionHeader = ({ title }) => (
  <div className="section-header mt-10 md:mt-44">
    <div className="section-straight"></div>
    <p className="section-head">{title}</p>
  </div>
);

function Homepage() {
  return (
    <div className="w-full flex flex-col gap-0 bg-white justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        {/* <ThreeTab /> */}
        <Carousel />
        <AboutCleanHeat/>

        <div className="flex w-full pl-28">
          <SectionHeader title="Campaign Details" />
        </div>

        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="heading text-4xl text-center font-light">
            <span className="text-gray-700 font-medium">
              Donate to one of our{" "}
            </span>
            <span className="text-pink-400 font-bold">campaigns</span>
          </h1>
          <p className="subtext flex items-center justify-center mt-5 font-light text-[20px] text-[#5a5a5a]">
            By donating, you take a step towards creating a better world. Every
            rupee counts!
          </p>

          {/* Campaign Card */}
          <CampaignCard />
        </div>

        {/* Additional Sections */}
        <div className="flex flex-col gap-20 mt-20">
          <Medicalemg />
          <Category />
          <ProgramImpact />
          <Testimonals />
          <Assureyou />
          <Partners />
        </div>
      </Suspense>
    </div>
  );
}

export default Homepage;
