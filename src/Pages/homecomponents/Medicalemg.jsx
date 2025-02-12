import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../CSS/MedicalEmg.css';
import social1 from '../../assets/images/Causes/social/social1.png';
import social2 from '../../assets/images/Causes/social/social2.png';
import Clinic from '../Clinic';

const emergencyData = [
  {
    id: 1,
    title: "This Man With Elephant Foot Support, Help Him Get Surgery",
    author: "By Krishna Prasad",
    image: "https://dkprodimages.gumlet.io/campaign/cover/Help-Krishna-Prasad1317770230.jpg?format=webp&w=360&dpr=1.3",
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
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <div className="section-header xl:ml-24 ml-28 ">
          <div className="section-straight"></div>
          <p className="section-head">Medical Emergency</p>
        </div>
        <Link className="view-all-link" to="/clinic">View All →</Link> 
      </div>
      
      <div className='flex cardcont xl:gap-10 justify-center items-center '> 
        {emergencyData.map((emergency) => (
          <div className="emergency-card" key={emergency.id}>
            <div className="emergency-card_mainSection">
              <div className="emergency-card_imageSection">
                <img
                  src={emergency.image}
                  alt="Campaign"
                  className="emergency-card_image"
                  loading="lazy"
                />
                <span className="tax-benefit-tooltip">
                  Tax Benefit <span className="tooltip-icon">i</span>
                </span>
              </div>
              <div className="emergency-card_details">
                <div className="emergency-card_summary">
                  <h4 className="emergency-card_title">{emergency.title}</h4>
                  <div className="emergency-card_author">
                    <span className="author-img">{emergency.author.charAt(3)}</span>
                    <span>{emergency.author}</span>
                  </div>
                </div>
                <div className="emergency-card_stats">
                  <div className="emergency-card_statsWrapper">
                    <div className="emergency-card_progressBarHeading">
                      <span className="emergency-card_totalRaised">{emergency.totalRaised}</span>
                      <span className="emergency-card_totalRequired">Raised</span>
                    </div>
                    <div className="emergency-card_totalBackers">{emergency.backers} Backers</div>
                  </div>
                  <div 
                    className="dk-progress-bar_backgroundBar" 
                    title={`${emergency.progress} Raised`} 
                    style={{ height: '8px', borderRadius: '4px', marginTop: '8px' }}
                  >
                    <div 
                      className="dk-progress-bar_progressBar" 
                      style={{ 
                        width: emergency.progress, 
                        height: '8px', 
                        borderRadius: '4px', 
                        background: '#EC4899' 
                      }}
                    >
                      <div className="dk-progress-bar_animatedProgressBar" style={{ borderRadius: '4px' }}></div>
                    </div>
                  </div>
                </div>
                <div className="emergency-card_buttonSection">
                  <button className="emergency-card_shareButton">Share</button>
                  <Link
                    to={`/donate/${emergency.id}`} // Updated link
                    className="emergency-card_donateButton"
                    style={{
                      background: '#EC4899',
                      color: 'white',
                    }}
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
