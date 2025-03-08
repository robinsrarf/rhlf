import React, { lazy, Suspense } from "react";
import "../CSS/Homepage.css";

import icon from "../assets/images/LOGO1.png";
// Lazy-loaded components for performance optimization
const Carousel = lazy(() => import("./homecomponents/Carousel"));
const Footer = lazy(() => import("../Components/Footer"));
const AboutCleanHeat = lazy(() => import("./homecomponents/AboutCleanHeart"));
const CampaignDetails = lazy(() => import("./homecomponents/CampaignDetails"));
const Medicalemg = lazy(() => import("./homecomponents/Medicalemg"));
const Partners = lazy(() => import("./homecomponents/Partners"));
const Category = lazy(() => import("./homecomponents/Category"));
const ProgramImpact = lazy(() => import("./homecomponents/ProgramImpact"));
const Assureyou = lazy(() => import("./homecomponents/Assureyou"));
const Testimonals = lazy(() => import("./homecomponents/Testimonals"));
const ThreeTab = lazy(() => import("./homecomponents/ThreeTab"));
const HelpPeopleNow = lazy(() => import("./homecomponents/HelpPeopleNow"));
const NewsAndArticles = lazy(() => import("./homecomponents/NewsAndArticles"));
const WorldwideNonprofitCharity = lazy(
  () => import("./homecomponents/WorldwideNonProfitCharity"),
);

function Homepage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-0">
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <div className="flex h-[60vh] w-screen items-center justify-center text-white">
              <img src={icon} alt="Loading..." className="animate-pulse" />
            </div>
          </div>
        }
      >
        <Carousel />
        <AboutCleanHeat />
        <CampaignDetails />
        <Medicalemg />
        <Category />
        <WorldwideNonprofitCharity />
        <ProgramImpact />
        <Testimonals />
        <HelpPeopleNow />
        <NewsAndArticles />
        <Assureyou />
        <Partners />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Homepage;
