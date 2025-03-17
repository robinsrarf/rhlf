import { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/MedicalEmg.css";
import SectionHeader from "../../Components/SectionHeader";
import DonateCard from "./DonateCard";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Urgent from "../../assets/images/category/siren-on.svg";
import Animals from "../../assets/images/category/paw.svg";
import Children from "../../assets/images/category/baby.svg";
import Elderly from "../../assets/images/category/old-people.svg";
import Disable from "../../assets/images/category/wheelchair.svg";
import Disaster from "../../assets/images/category/house-crack.svg";
import Hunger from "../../assets/images/category/utensils.svg";
import Education from "../../assets/images/category/book-open-cover.svg";
import Woman from "../../assets/images/category/woman-head.svg";

const categories = [
  { id: 1, name: "Urgent", icon: Urgent },
  { id: 2, name: "Children", icon: Children },
  { id: 3, name: "Women", icon: Woman },
  { id: 4, name: "Elderly", icon: Elderly },
  { id: 5, name: "Disaster-Relief", icon: Disaster },
  { id: 6, name: "Hunger", icon: Hunger },
  { id: 7, name: "Education", icon: Education },
  { id: 8, name: "Disable", icon: Disable },
  { id: 9, name: "Animals", icon: Animals },
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
  const [selectedCategory, setSelectedCategory] = useState("Urgent");
  const filteredCampaigns = campaigns.filter(
    (campaign) => campaign.category === selectedCategory,
  );
  const sliderSettings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 500,
        },
      },
      {
        breakpoint: 600, // For mobile
        settings: {
          slidesToShow: 1,
          infinite: false,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 500,
          centerMode: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const filterType = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="my-5 w-full">
      {/* Header Section */}
      <div className="flex w-full items-center pb-2">
        <SectionHeader title="Categories" />
        <Link
          to="/clinic"
          className="ml-auto flex items-center pb-2 pr-5 pt-6 text-pink-500 hover:text-pink-700 hover:no-underline"
        >
          <p>View All</p>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Category Scroller (Combined for Desktop & Mobile) */}
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="scrollbar-hide flex w-full gap-3 overflow-x-auto px-3 py-0 sm:w-fit lg:w-fit">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => filterType(category.name)}
              className={`my-0 flex w-28 cursor-pointer flex-col items-center justify-center rounded-t-lg px-0 py-2 text-sm font-medium ${
                selectedCategory === category.name
                  ? "bg-pink-300 text-white"
                  : "bg-white text-gray-700"
              }`}
              style={{ minWidth: "auto", flexShrink: 0 }}
            >
              <img src={category.icon} className="w-5" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>

        {/* Campaign Cards */}
        <div className="w-full bg-pink-300 py-1">
          <div className="mx-auto w-full lg:w-[64%]">
            {filteredCampaigns.length > 0 ? (
              <Slider {...sliderSettings}>
                {filteredCampaigns.map((campaign) => (
                  <div key={campaign.id} className="px-3 py-2">
                    <DonateCard
                      id={campaign.id}
                      image={campaign.image}
                      title={campaign.title}
                      author={campaign.author}
                      totalRaised={campaign.totalRaised}
                      progress={campaign.progress}
                      backers={campaign.backers}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="flex h-[440px] items-center justify-center text-center text-lg font-medium text-gray-600">
                <p>This category is empty.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
