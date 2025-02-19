import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CSS/CampaignCard.css";
import campaignimg1 from "../../assets/images/campaignimg1.png";
import campaignimg2 from "../../assets/images/campaignimg2.png";
import campaignimg3 from "../../assets/images/campaignimg3.png";
import lady from "../../assets/images/svg/lady/lady.png";
import connect from "../../assets/images/svg/lady/connect.png";
import SectionHeader from "../../Components/SectionHeader";

const campaignData = [
  {
    id: 1,
    image: campaignimg1,
    title: "Help a young child fight blood cancer",
    description:
      "Eight-year-old Aaditya needs urgent treatment that his daily wage laborer parents can't afford. Your donation can help save his life.",
  },
  {
    id: 2,
    image: campaignimg2,
    title: "Help a mother fight breast cancer",
    description:
      "Lakshmi is a domestic help and single mother of three young children, fighting breast cancer. Help her defeat this disease by contributing.",
  },
  {
    id: 3,
    image: campaignimg3,
    title: "Contribute to Cancer Institute",
    description:
      "Help Cancer Institute save lives and put smiles on people's faces by making a contribution today!",
  },
];

export default function CampaignDetails() {
  return (
    <>
      <SectionHeader title={"Campaign Details"} />
      <section className="w-full px-4 sm:px-8 md:px-12">
        <div className="flex items-center justify-center flex-col gap-3 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light">
            <span className="text-gray-700 font-medium">Donate to one of our </span>
            <span className="text-pink-400 font-bold">campaigns</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#5a5a5a] mt-3">
            By donating, you take a step towards creating a better world. Every rupee counts!
          </p>
          <CampaignCard />
        </div>
      </section>
    </>
  );
}

function CampaignCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campaignData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl p-1 shadow-lg bg-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {campaignData.map((campaign) => (
            <div key={campaign.id} className="min-w-full p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Image Section */}
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 sm:h-40 md:h-60 object-cover rounded-lg"
                />

                {/* Content Section */}
                <div className="md:col-span-2 flex flex-col space-y-3 text-center md:text-left">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full self-center md:self-start">
                    Featured
                  </span>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <img src={lady} alt="lady icon" className="w-5 h-5" />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                      {campaign.title}
                    </h3>
                  </div>
                  <div className="flex items-start justify-center md:justify-start space-x-2">
                    <img src={connect} alt="connect icon" className="w-4 h-4 mt-1 hidden md:block" />
                    <p className="text-xs sm:text-sm md:text-base p-2 rounded-2xl">
                      {campaign.description}
                    </p>
                  </div>
                  <Link to={`/donate/${campaign.id}`} className="self-center md:self-start">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all">
                      Donate Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {campaignData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}