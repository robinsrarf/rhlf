import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/MedicalEmg.css";
import SectionHeader from "../../Components/SectionHeader";
import DonateCard from "./DonateCard";

import {
  OctagonAlert,
  Bone,
  Baby,
  RockingChair,
  Church,
  Earth,
  Utensils,
  BookOpen,
  Venus,
  ArrowRight,
} from "lucide-react";
const categories = [
  { id: 4, name: "Urgent", icon: OctagonAlert },
  { id: 5, name: "Animals", icon: Bone },
  { id: 6, name: "Children", icon: Baby },
  { id: 7, name: "Elderly", icon: RockingChair },
  { id: 8, name: "Faith", icon: Church },
  { id: 9, name: "Disaster-Relief", icon: Earth },
  { id: 10, name: "Hunger", icon: Utensils },
  { id: 11, name: "Education", icon: BookOpen },
  { id: 12, name: "Women", icon: Venus },
];

const campaigns = [
  {
    id: 4,
    title: "Flood Relief Fund",
    author: "By Disaster Relief Org",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Disaster-Relief",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 5,
    title: "Emergency Medical Aid",
    author: "By Health Aid",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 6,
    title: "Urgent Shelter for Homeless",
    author: "By Shelter Foundation",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Disaster-Relief",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 7,
    title: "Critical Food Supplies",
    author: "By Hunger Relief",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Elderly",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 8,
    title: "Winter Clothing Drive",
    author: "By Warmth Project",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 9,
    title: "Fire Recovery Fund",
    author: "By Fire Relief Org",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 10,
    title: "Help Abandoned Dogs",
    author: "By Animal Rescue",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Childern",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 11,
    title: "Save Injured Wildlife",
    author: "By Wildlife Care",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 12,
    title: "Stray Cat Shelter",
    author: "By Pet Haven",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Faith",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 13,
    title: "Animal Vaccination Drive",
    author: "By Health for Pets",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 14,
    title: "Feed Stray Animals",
    author: "By Food for Pets",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
  {
    id: 15,
    title: "Rescue Farm Animals",
    author: "By Farm Friend Org",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Childern",
    image:
      "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
  },
];

function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState("Urgent"); // Initialize with a category name, not an array of items

  const filterType = (category) => {
    setSelectedCategory(category); // Now you're storing just the category name
  };

  return (
    <>
      <div className="flex items-center w-full pb-2">
        <SectionHeader title={"Categories"} />
        <Link
          to="/clinic"
          className="ml-auto pt-6 pb-2 pr-5 flex items-center text-pink-500 hover:no-underline hover:text-pink-700"
        >
          <p>View All</p>
          <ArrowRight size={15} />
        </Link>
      </div>
      <section className="w-full hidden lg:block">
        <div className="flex flex-col gap-2 w-full content-center overflow-hidden maindiv">
          <div className="flex overflow-x-auto gap-6 pb-4 w-[85%] ml-[15%] scrollbar">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => filterType(category.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium flex cursor-pointer gap-x-2 items-center justify-center ${
                  selectedCategory === category.name
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                style={{ minWidth: "auto", flexShrink: 0 }}
              >
                {React.createElement(category.icon, {
                  size: 24,
                  className: "w-6 h-6",
                })}
                {/* <img src={category.icon} alt="category" className="w-6 h-6" /> */}
                <p>{category.name}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-[65%] py-2 mx-auto">
            {/* Now we filter the campaigns based on the selected category */}
            <DonateCard
              DonationData={campaigns.filter(
                (campaign) => campaign.category === selectedCategory
              )}
            />
          </div>
        </div>
      </section>
      {/* Mobile View */}

      <section className="lg:hidden w-full">
        <div className="flex flex-col gap-2 w-full content-center overflow-hidden">
          <div className="w-full flex overflow-x-auto gap-1 px-3 pb-0 scrollbar">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => filterType(category.name)}
                className={`px-2 py-1 rounded-lg text-sm font-medium flex cursor-pointer gap-x-1 items-center justify-center ${
                  selectedCategory === category.name
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                style={{ minWidth: "auto", flexShrink: 0 }}
              >
                {React.createElement(category.icon, {
                  size: 24,
                  className: "w-6 h-6",
                })}
                <p>{category.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full bg-pink-200 py-3">
            <div className="flex flex-wrap justify-center gap-8 h-[65%] py-5 mx-auto">
              {/* Now we filter the campaigns based on the selected category */}
              <DonateCard
                DonationData={campaigns.filter(
                  (campaign) => campaign.category === selectedCategory
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategorySection;
