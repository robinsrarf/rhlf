import React, { useState, useEffect } from 'react';
import '../../CSS/CampaignCard.css'; 
import campaignimg1 from '../../assets/images/campaignimg1.png';
import campaignimg2 from '../../assets/images/campaignimg2.png';
import campaignimg3 from '../../assets/images/campaignimg3.png';
import lady from '../../assets/images/svg/lady/lady.png'; 
import connect from '../../assets/images/svg/lady/connect.png'; 
import { Link } from 'react-router-dom';

const campaignData = [
  {
    id: 1,
    image: campaignimg1,
    title: "Help a young child fight blood cancer",
    description: "Eight-year-old Aaditya needs urgent treatment that his daily wage laborer parents can't afford. Your donation can help save his life.",
  },
  {
    id: 2,
    image: campaignimg2,
    title: "Help a mother fight breast cancer",
    description: "Lakshmi is a domestic help and single mother of three young children, fighting breast cancer. Help her defeat this disease by contributing.",
  },
  {
    id: 3,
    image: campaignimg3,
    title: "Contribute to Cancer Institute",
    description: "Help Cancer Institute save lives and put smiles on people’s faces by making a contribution today!",
  }
];

export default function CampaignCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campaignData.length);
    }, 5000);
    
    return () => clearInterval(interval);  // Clean up the interval on unmount
  }, []);

  const { image, title, description } = campaignData[currentIndex];

  return (
    <div className="campaign-card-container relative overflow-hidden w-full h-[200px] md:h-[230px] rounded-xl">
      <div
        className="campaign-cards transition-transform duration-700 ease-in-out absolute w-full h-full flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.7s ease-in-out',
        }}
      >
        {campaignData.map((campaign) => (
          <div
            key={campaign.id}
            className="campaign-card "
          >
            <div className="flex items-center xl:space-x-4">
              {/* Image Section */}
              <img 
                src={campaign.image} 
                alt={campaign.title} 
                className="campaign-image " 
              />
              
              {/* Content Section */}
              <div className="campaign-content gap-4 xl:mb-10">
                {/* Featured Tag */}
                <span className="featured-tag xl:w-1/4 py-0 px-5 ">
                  Featured
                </span>
                
                {/* Title with SVG (Lady Image) */}
                <div className="flex items-center space-x-2">
                  {/* Lady Image */}
                  <img 
                    src={lady} 
                    alt="lady" 
                    className="lady-icon w-6 h-6"  // Adjust size as needed
                  />

                  {/* Title */}
                  <h3 className="xl:text-xl sm:text-base font-semibold text-gray-800">
                    {campaign.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-center space-x-2">
                <img 
                    src={connect} 
                    alt="connect" 
                    className="lady-icon w-6 h-6"  // Adjust size as needed
                  />
                <p className="text-gray-600 text-xs mb-0">{campaign.description}</p>
                </div>
                {/* Donate Button */}
                <Link to={`/donate/1`}>
                <button className="donate-btn w-1/3 px-6">
                  Donate Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
