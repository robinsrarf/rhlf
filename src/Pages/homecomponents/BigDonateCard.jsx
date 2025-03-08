import React from 'react'
import bgKid from "../../assets/images/bgKid.jpg"
import bgKid1 from "../../assets/images/bgKid1.jpg"
import { useState } from 'react';

function BigDonateCard() {

    const [ amount,setAmount ] = useState(250);
    const [selected, setSelected] = useState(250);
    const handleChange = (e) => {
        setAmount( e.target.value );
      };

return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-8">
      {/* Left Card */}
      <div className="relative w-[36rem] h-[26rem] rounded-xl overflow-hidden shadow-lg">
        <img
          src={bgKid}
          alt="Donation Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-3xl font-semibold">
              Make A Difference Today!
            </h2>
            <p className="text-gray-200 text-md text-wrap mt-5">
            Partner with Real Happiness Of Life Foundation to drive meaningful change through Corporate Social Responsibility, impactful donations, and thoughtful grantmaking strategies.  
            </p>
            <ul className="grid grid-cols-2 gap-4 mt-8 space-y-1 text-white text-md font-semibold">
              <li>
                <span className='text-pink-600 mr-3'>✔</span>

                    Donate With Purpose
                 
                </li>
              <li><span className='text-pink-600 mr-3'>✔</span> Support With Care</li>
              <li><span className='text-pink-600 mr-3'>✔</span> Make A Difference</li>
            </ul>
          </div>
          <button className="mt-4 w-44 flex items-center gap-1 px-4 py-2 text-white font-semibold rounded-full shadow-md border-2 border-white hover:bg-white hover:text-black transition duration-300">
            <span className='bg-pink-600 rounded-full w-10 h-10 pt-2 text-white'>
                 ➤
            </span>
             Read More
          </button>
        </div>
      </div>

      {/* Right Card */}
      <div className="relative w-[36rem] h-[26rem] rounded-xl overflow-hidden shadow-lg">
        <img
          src={bgKid1}
          alt="Donation Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-3xl font-semibold">
              Transform Lives Every Month – Join The Mission Today!
            </h2>
            <p className="text-gray-200 text-md text-wrap mt-5">
            Make a lasting impact by contributing monthly to help those in need. Together, we can create a brighter, healthier, and happier world for all.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="flex justify-between w-44 h-16 border border-white text-white  rounded-full text-sm">
                <p className='p-5'>Custom</p>
                <input value={`${amount}` }className="border pl-6 w-20 h-full bg-transparent text-white rounded-full text-sm" onChange={handleChange}/>
              </div>
              
              <button className={`${amount == 250 ?  "bg-pink-600" : "bg-transparent"} border border-white  text-white px-4 py-1 rounded-full text-sm hover:bg-pink-600 transition duration-300`} onClick={()=> {setAmount(250)}}>
                ₹250
              </button>
              <button className={`${amount == 500 ?  "bg-pink-600" : "bg-transparent"} border border-white text-white px-4 py-1 rounded-full text-sm hover:bg-pink-600 transition duration-300`} onClick={()=> setAmount(500)}>
                ₹500
              </button>
              <button className={`${amount == 1000 ?  "bg-pink-600" : "bg-transparent"} border border-white text-white px-4 py-1 rounded-full text-sm hover:bg-pink-600 transition duration-300`} onClick={()=> setAmount(1000)}>
                ₹1000
              </button>
            </div>
          </div>
          <button className="mt-4 w-44 flex items-center gap-1 px-4 py-2 text-white font-semibold rounded-full shadow-md border-2 border-white hover:bg-white hover:text-black transition duration-300">
            <span className='bg-pink-600 rounded-full w-10 h-10 pt-2 text-white'>
                 ➤
            </span>
             <p>
                Donate Now
                </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BigDonateCard