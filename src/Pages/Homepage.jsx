import React, { lazy, Suspense } from "react";
import "../CSS/Homepage.css";
import Footer from "../Components/Footer";

// Lazy-loaded components for performance optimization
const Carousel = lazy(() => import("./homecomponents/Carousel"));
const AboutCleanHeat = lazy(() => import("./homecomponents/AboutCleanHeart"));
const CampaignDetails = lazy(() => import("./homecomponents/CampaignDetails"));
const Medicalemg = lazy(() => import("./homecomponents/Medicalemg"));
const Partners = lazy(() => import("./homecomponents/Partners"));
const Category = lazy(() => import("./homecomponents/Category"));
const ProgramImpact = lazy(() => import("./homecomponents/ProgramImpact"));
const Assureyou = lazy(() => import("./homecomponents/Assureyou"));
const Testimonals = lazy(() => import("./homecomponents/Testimonals"));
const SectionHeader = lazy(() => import("../Components//SectionHeader"));
const ThreeTab = lazy(() => import("./homecomponents/ThreeTab"));

// Reusable Section Header Component
// const SectionHeader = ({ title }) => (
//   <div className="section-header mt-5 md:mt-16 md:mb-5">
//     <div className="section-straight"></div>
//     <p className="section-head">{title}</p>
//   </div>
// );

function Homepage() {
  return (
    <div className="w-full flex flex-col gap-0 bg-white justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
        <AboutCleanHeat />
        <CampaignDetails />
        <Medicalemg />
        <Category />
        <ProgramImpact />
        <Testimonals />
        <Assureyou />
        <Partners />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Homepage;
