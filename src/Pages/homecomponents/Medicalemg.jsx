import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../../CSS/MedicalEmg.css";
import social1 from "../../assets/images/Causes/social/social1.png";
import social2 from "../../assets/images/Causes/social/social2.png";
import SectionHeader from "../../Components/SectionHeader";
import img1 from "../../assets/images/MedicalEmergency/img1.jpg";
import DonateCard from "./DonateCard";

const emergencyData = [
  {
    id: 1,
    title: "Urgent Help Needed for a Child with Heart Disease",
    author: "By Krishna Prasad",
    image: img1,
    totalRaised: 22000,
    totalRequired: 25000,
    backers: 114,
  },
  {
    id: 2,
    title: "Urgent Help Needed for a Child with Heart Disease",
    author: "By Anjali Verma",
    image: social1,
    totalRaised: 5000,
    totalRequired: 10000,
    backers: 220,
  },
  {
    id: 3,
    title: "Help This Family Recover from a Fire Disaster",
    author: "By Rohit Sharma",
    image: social2,
    totalRaised: 3000,
    totalRequired: 8000,
    backers: 150,
  },
];

export default function MedicalEmergency() {
  return (
    <>
      <div className="flex w-full items-center">
        <SectionHeader title={"Medical Emergency"} />

        <Link
          to="/clinic"
          className="ml-auto flex items-center pb-2 pr-5 pt-6 text-pink-500 hover:text-pink-700 hover:no-underline"
        >
          <p>View All</p>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Single Section for Both Mobile & Desktop */}
      <div className="w-full py-1">
        <div
          className="flex w-[100%] justify-evenly overflow-x-auto md:w-[100%] md:pl-[0%] lg:w-[100%] lg:justify-center lg:gap-5 lg:px-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }} // Hides scrollbar
        >
          {emergencyData.map((data) => (
            <div
              key={data.id}
              className="lg:px-auto my-5 px-[3%] md:px-[1.5%] lg:mx-0 lg:px-0"
            >
              <DonateCard
                id={data.id}
                author={data.author}
                title={data.title}
                image={data.image}
                progress={(data.totalRaised / data.totalRequired) * 100}
                totalRaised={data.totalRaised}
                backers={data.backers}
                required={data.totalRequired}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
