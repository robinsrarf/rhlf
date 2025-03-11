import { lazy } from "react";
import "../CSS/Homepage.css";
import BigDonateCard from "./homecomponents/BigDonateCard";
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
const HelpPeopleNow = lazy(() => import("./homecomponents/HelpPeopleNow"));
const NewsAndArticles = lazy(() => import("./homecomponents/NewsAndArticles"));
const WorldwideNonprofitCharity = lazy(
  () => import("./homecomponents/WorldwideNonProfitCharity"),
);

function Homepage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-0">
      <Carousel />
      <AboutCleanHeat />
      <CampaignDetails />
      <Medicalemg />
      <Category />
      <BigDonateCard />
      <WorldwideNonprofitCharity />
      <ProgramImpact />
      <Testimonals />
      <HelpPeopleNow />
      <NewsAndArticles />
      <Assureyou />
      <Partners />
    </div>
  );
}

export default Homepage;
