import React from "react";
import { CircleAlert, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../../CSS/MedicalEmg.css";
import social1 from "../../assets/images/Causes/social/social1.png";
import social2 from "../../assets/images/Causes/social/social2.png";
import Clinic from "../Clinic";
import SectionHeader from "../../Components/SectionHeader";
import DonateCard from "./DonateCard";
const emergencyData = [
  {
    id: 1,
    title: "This Man With Elephant Foot Support, Help Him Get Surgery",
    author: "By Krishna Prasad",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
  },
  {
    id: 2,
    title: "Urgent Help Needed for a Child with Heart Disease",
    author: "By Anjali Verma",
    image: social1,
    totalRaised: "₹500,000",
    totalRequired: "₹1,000,000",
    backers: 220,
    progress: "50%",
  },
  {
    id: 3,
    title: "Help This Family Recover from a Fire Disaster",
    author: "By Rohit Sharma",
    image: social2,
    totalRaised: "₹300,000",
    totalRequired: "₹800,000",
    backers: 150,
    progress: "37.5%",
  },
];

export default function MedicalEmergency() {
  return (
    <>
      <div className="flex items-center w-full">
        <SectionHeader title={"Medical Emergency"} />
        <Link
          to="/clinic"
          className="ml-auto pt-6 pb-2 pr-5 flex items-center text-pink-500 hover:no-underline hover:text-pink-700"
        >
          <p>View All</p>
          <ArrowRight size={15} />
        </Link>
      </div>

      <section className="hidden lg:block w-full ">
        {/* Emergency Cards */}
        <div className="max-w-6xl mx-auto py-1 px-5">
          <div className="flex flex-wrap justify-center gap-6">
            <DonateCard DonationData={emergencyData} />
          </div>
        </div>
      </section>
      <section>
        <div className="lg:hidden max-w-6xl mx-auto py-1">
          <div className="flex flex-wrap justify-center gap-5">
            <DonateCard DonationData={emergencyData} />
          </div>
        </div>
      </section>
    </>
  );
}
