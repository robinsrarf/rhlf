import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../../CSS/MedicalEmg.css";
import social1 from "../../assets/images/Causes/social/social1.png";
import social2 from "../../assets/images/Causes/social/social2.png";
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
          className="mx-auto flex w-[95%] gap-5 overflow-x-auto lg:px-4 lg:w-[65%] lg:flex-wrap lg:justify-center"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }} // Hides scrollbar
        >
          {emergencyData.map((data) => (
            <div key={data.id} className="w-full my-5 lg:mx-0 mx-auto lg:px-auto  flex-shrink-0 lg:w-auto">
              <DonateCard
                id={data.id}
                author={data.author}
                title={data.title}
                image={data.image}
                progress={data.progress}
                totalRaised={data.totalRaised}
                backers={data.backers}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
