import React, { useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

const LeftSec = ({emergency}) => {
  const projectRef = useRef(null);
  const documentsRef = useRef(null);
  const updatesRef = useRef(null);

  // Scroll to the section when a link is clicked
  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=''>
      <div>
        <img
          src={emergency.image}
          alt={emergency.title}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <section className="w-full mt-5 flex flex-col items-start ">
        {/* Section names */}
        <div className="p-3 flex items-center justify-between w-full gap-x-5  bg-white z-10 shadow-md">
          <p
            onClick={() => scrollToSection(projectRef)}
            className="cursor-pointer border-b-2 p-4 border-pink-300 shadow-lg w-1/3 flex items-center justify-center"
          >
            Project
          </p>
          <p
            onClick={() => scrollToSection(documentsRef)}
            className="cursor-pointer border-b-2 p-4 border-pink-300 shadow-lg w-1/3 flex items-center justify-center"
          >
            Documents
          </p>
          <p
            onClick={() => scrollToSection(updatesRef)}
            className="cursor-pointer border-b-2 p-4 border-pink-300 shadow-lg w-1/3 flex items-center justify-center"
          >
            Updates
          </p>
        </div>

        {/* Project section */}
        <div ref={projectRef} id="project" className="mt-6">
          {/* Youtube video play thumbnail */}
          <ReactPlayer url={"https://youtu.be/Yw7ozuBvrNQ?si=a84x7X8ef2YDua-I"} />
          <div className="flex flex-col gap-3 mt-6">
            <p>
              While the world celebrated Diwali, Pravin stood outside an operation theatre, helpless on that fateful night. Rajashree had carried her pregnancy with the hope and excitement of any new mother. But one moment of worry - the baby&apos;s sudden stillness - led them to the hospital, where they discovered the worst.
            </p>
            <img src="https://dkprodimages.gumlet.io/campaign/12269/rs-2.jpg?format=webp&w=700&dpr=1.3" alt="dentist" />
            <ul>
              <li>My heart sank when they rushed her to the NICU instead of my arms.</li>
              <li>Enduring the pain of a difficult recovery, Rajashree hardly thought of herself. She longed to hold her daughter, to feel her warmth, but could only whisper prayers from a distance. After days of waiting, when the doctor suggested skin-to-skin contact, she just broke down.</li>
              <img src="https://dkprodimages.gumlet.io/campaign/11667/KP-EL1.jpg?format=webp&w=700&dpr=1.3" alt="leg" />
              <li>“Everything was perfect, but when they rushed my newborn to the NICU, my heart sank. I was waiting to hold my baby, but instead, she was taken away from me...to fight for her life. I wonder if I’ll ever get that chance when I see other mothers in the hospital with their babies. I keep praying for her to get better, but I don’t know how long I can continue like this,” - Rajashree, mother.</li>
            </ul>
          </div>
        </div>

        {/* Documents section */}
        <div ref={documentsRef} id="documents" className="mt-6 flex flex-col gap-3">
          <h2 className="font-bold text-xl text-pink-600">Documents</h2>
          <a href="https://dkprodimages.gumlet.io/campaignImages/11667/WhatsApp_Image_2024-09-30_at_18.jpg?format=webp&w=576&dpr=1.3" target='_blank'>
            <img src="https://dkprodimages.gumlet.io/campaignImages/11667/WhatsApp_Image_2024-09-30_at_18.jpg?format=webp&w=160&dpr=1.3" alt="document" className='rounded-lg w-[180px] h-[240px]' />
          </a>
          <p className="mt-2">Here are some important documents related to the project:</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Project Proposal
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Budget Breakdown
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Timeline
              </a>
            </li>
          </ul>
        </div>

        {/* Updates section */}
        <div ref={updatesRef} id="updates" className="mt-6">
          <h2 className="font-bold text-xl text-pink-600">Updates</h2>
          <p>Here are the latest updates regarding the project:</p>
          <ul className="space-y-3 mt-3">
            <li className="bg-gray-100 p-3 rounded-lg shadow-md">
              <span className="font-semibold">November 2024:</span> Emergency response team deployed in the affected region.
            </li>
            <li className="bg-gray-100 p-3 rounded-lg shadow-md">
              <span className="font-semibold">October 2024:</span> Initial funds released for the project. Funds have been allocated to various medical departments.
            </li>
            <li className="bg-gray-100 p-3 rounded-lg shadow-md">
              <span className="font-semibold">September 2024:</span> Project planning phase completed. Initial groundwork completed in the affected areas.
            </li>
            <li className="bg-gray-100 p-3 rounded-lg shadow-md">
              <span className="font-semibold">August 2024:</span> A team of volunteers conducted a survey to identify immediate needs in the community.
            </li>
            <li className="bg-gray-100 p-3 rounded-lg shadow-md">
              <span className="font-semibold">July 2024:</span> Official partnerships formed with local NGOs for quicker response times.
            </li>
            <li className="bg-gray-100 p-3 rounded-lg shadow-md">
              <span className="font-semibold">June 2024:</span> Initial outreach to medical experts to assist with treatment plans.
            </li>
          </ul>
        </div>

        {/* Dummy questions section */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-pink-600 mb-4">Frequently Asked Questions (FAQ)</h3>
          <ul className="space-y-3">
            <li className="text-gray-700">
              <span className="font-semibold">Q1: What is the primary objective of this project?</span><br />
              The primary objective is to provide immediate healthcare and support for families in need, especially mothers and newborns.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Q2: How can I contribute to this project?</span><br />
              You can contribute by donating through our website or volunteering in your local area.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Q3: What kind of support is provided to the families?</span><br />
              Families receive medical treatment, emotional support, and long-term care for affected children.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Q4: How do I stay updated on the progress of this project?</span><br />
              You can follow our official social media pages and check the updates section on our website.
            </li>
          </ul>
        </div>
      </section>
      {/* Donate box */}
      <div className="donate-box bg-white p-4 mt-6 border rounded-lg shadow-md flex md:hidden">
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3'>
                <p className='p-3 border hover:scale-110 transition-all rounded-md border-red-500 text-orange-600 cursor-pointer'>₹ 1000</p>
                <p className='p-3 border hover:scale-110 transition-all rounded-md border-red-500 text-orange-600 cursor-pointer'>₹ 1500</p>
                <p className='p-3 border hover:scale-110 transition-all rounded-md border-red-500 text-orange-600 cursor-pointer'>₹ 2000</p>
            </div>
            <div className='flex gap-2'>
                <select name="currency" id="currency">
                    <option value="currency">INR</option>
                    <option value="currency">AHEM</option>
                    <option value="currency">USD</option>
                </select>
                <input type="Number" className='border-b-2 outline-none' />
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-gray-500 text-base'>DONATE VIA:</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-black uppercase font-bold'>Upi:</p>
                    <div className='flex gap-5'>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png" alt="phonepay" className='w-10 h-10 cursor-pointer'/>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png" alt="Gpay" className='w-10 h-10 cursor-pointer' />
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bhim-upi-icon.png" alt="Bhim" className='w-10 h-10 cursor-pointer' />
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visa-icon.png" alt="" className='w-10 h-10 cursor-pointer'/>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-black uppercase font-bold text-sm'>Other Options:</p>
                    <div className='flex gap-5'>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png" alt="phonepay" className='w-10 h-10 cursor-pointer'/>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/american-express-icon.png" alt="Gpay" className='w-10 h-10 cursor-pointer' />
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/wallet-icon.png" alt="Bhim" className='w-10 h-10 cursor-pointer' />
                        
                    </div>
                </div>
            </div>

            {/* Donate Button  */}
            <div className='w-full bg-orange-500 flex text-white items-center justify-center p-3 rounded-md gap-3 cursor-pointer shadow-lg'>
                <p>₹ 1000</p>
                <p className='bg-white rounded-md text-orange-400 p-2 '>Donate Now</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSec;


