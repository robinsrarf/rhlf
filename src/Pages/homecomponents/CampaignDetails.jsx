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
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-2xl font-light sm:text-3xl md:text-4xl">
            <span className="font-medium text-gray-700">
              Donate to one of our{" "}
            </span>
            <span className="font-bold text-pink-400">campaigns</span>
          </h1>
          <p className="mt-3 text-sm text-[#5a5a5a] sm:text-base md:text-lg">
            By donating, you take a step towards creating a better world. Every
            rupee counts!
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
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="overflow-hidden rounded-xl bg-white p-1 shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {campaignData.map((campaign) => (
            <div key={campaign.id} className="min-w-full p-4 sm:p-6">
              <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
                {/* Image Section */}
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-48 w-full rounded-lg object-cover sm:h-40 md:h-60"
                />

                {/* Content Section */}
                <div className="flex flex-col space-y-3 text-center md:col-span-2 md:text-left">
                  <span className="self-center rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white md:self-start">
                    Featured
                  </span>
                  <div className="flex items-center justify-center space-x-2 md:justify-start">
                    <img src={lady} alt="lady icon" className="h-5 w-5" />
                    <h3 className="text-base font-semibold text-gray-800 sm:text-lg md:text-xl">
                      {campaign.title}
                    </h3>
                  </div>
                  <div className="flex items-start justify-center space-x-2 md:justify-start">
                    <img
                      src={connect}
                      alt="connect icon"
                      className="mt-1 hidden h-4 w-4 md:block"
                    />
                    <p className="rounded-2xl p-2 text-xs sm:text-sm md:text-base">
                      {campaign.description}
                    </p>
                  </div>
                  <Link
                    to={`/donate/${campaign.id}`}
                    className="self-center md:self-start"
                  >
                    <button className="rounded-lg bg-pink-500 px-4 py-2 text-white transition-all hover:bg-pink-600">
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
      <div className="mt-4 flex justify-center space-x-2">
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
