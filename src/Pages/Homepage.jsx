import React from 'react';
import "../CSS/Homepage.css";

// components 
import CampaignCard from './homecomponents/CampaignCard'; 
import Medicalemg from './homecomponents/Medicalemg';
import Partners from './homecomponents/Partners';
import Category from './homecomponents/Category';
import SearchComp from './homecomponents/SearchComp';
import ProgramImpact from './homecomponents/ProgramImpact';
import Assureyou from './homecomponents/Assureyou';
import Testimonals from './homecomponents/Testimonals';
import ThreeTab from './homecomponents/ThreeTab';
import Hero from './homecomponents/Hero';


function Homepage() {
  const importImage = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  };
  const importHomeImage = (imageName) => {
    return new URL(`../assets/images/comp/${imageName}`, import.meta.url).href;
  };

  return (
    <div className=" w-full flex flex-col gap-0 bg-white  justify-center items-center">
      
      {/* <Hero/> */}
      {/* <div className="flex flex-col justify-center items-center relative">
        <img src={importImage('mainslider.png')} alt="Homepage" className="w-full " />
        <img
          src={importImage('mealtab.png')}
          alt="Meal Tab"
          className="w-[80%] mt-[-40px]"
        />
      </div> */}

      <h1 className="heading text-5xl text-center font-light mt-8">
        <span className="text-gray-700 font-medium">Together</span> We Make a <span className="text-black font-bold">Difference</span>
      </h1>

      <div className="subtext justify-center items-center text-lg text-gray-500 max-w-4xl">
        <p>Real Happiness Of Life Foundation for social change and inclusion works for the social</p>
        <p>development and integration of underprivileged individuals, groups, and communities in India.</p>
      </div>

      <ThreeTab/>

      <div className="section-header mr-[360px] mt-10 md:mt-44 xl:mr-[1180px] ">
          <div className="section-straight"></div>
          <p className="section-head">Campaign Details</p>
        </div>
      <div className='flex items-center justify-center flex-col gap-3'>

        {/* <SearchComp  /> */}
        <div>
        <h1 className="heading text-4xl text-center justify-center font-light">
          <span className="text-gray-700 font-medium">Donate to one of our </span>
          <span className="text-pink-500 font-bold">campaigns</span>
        </h1>
        <p className='subtext flex items-center justify-center mt-5 font-light text-[20px] text-[#5a5a5a]'>
          By donating, you take a step towards creating a better world. Every rupee counts!
        </p>
        </div>
        {/* Campaign Card */}
        
          <CampaignCard />
        
      </div>

      <div className='flex flex-col gap-20 mt-20'>
        <Medicalemg />
        <Category />
        <ProgramImpact/>
        <Testimonals/>
        <Assureyou/>
        <Partners />
        <div className='flex flex-col items-center justify-center gap-6'>
        {/* <img src={importHomeImage('birthday.jpg')} alt="Homepage" className="xl:w-[600px] xl:h-[800px] sectionimg" />
        <img src={importHomeImage('stories.jpg')} alt="Homepage" className="xl:w-[600px] xl:h-[800px] sectionimg" />
        {/* <img src={importHomeImage('assurance.jpg')} alt="Homepage" className="xl:w-[500px] xl:h-[900px] sectionimg" /> */}
        {/*<img src={importHomeImage('live-donate.jpg')} alt="Homepage" className="xl:w-[600px] xl:h-[800px] sectionimg" /> */}
        </div>
        
      </div>
    </div>
  );
}

export default Homepage;
