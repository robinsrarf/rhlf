import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const RightSec = ({ emergency }) => {
  // State for handling donation amount
  const [donationAmount, setDonationAmount] = useState('');
  
  // Function to handle donation submission
  const handleDonate = () => {
    if (donationAmount > 0) {
      alert(`Thank you for donating $${donationAmount}!`);
      // You can integrate with backend API for actual donation functionality
    } else {
      alert('Please enter a valid donation amount.');
    }
  };

  return (
    <div className="mb-8 flex flex-col items-start col-span-1 ">
      <h1 className="text-3xl font-bold">{emergency.title}</h1>
      <div className="flex justify-center gap-4 mt-4">
        <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-md">Tax Benefit <span className="ml-1 cursor-pointer">i</span></span>
        <div className="flex items-center gap-2">
          <span className="text-sm bg-green-600 text-white px-2 py-1 rounded-md">Verified</span>
          <span className="cursor-pointer">i</span>
        </div>
        <span className="text-sm bg-indigo-600 text-white px-2 py-1 rounded-md">Medical</span>
      </div>

      {/* raised amount */}
      <div className="w-full">
        <div className="mb-4">
          <div className="text-lg font-bold text-black">{emergency.totalRaised} <span className='text-base font-medium text-gray-600'>raised out of {emergency.totalRequired}</span></div>
          <div className="relative pt-2 pb-2 mb-4 bg-gray-200 rounded-full h-2">
            <div className="absolute top-0 left-0 bg-green-500 rounded-full h-2" style={{ width: "30%" }}></div>
            <span className="absolute top-0 right-0 text-xs text-gray-600">{emergency.progress}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>{emergency.backers} Donors</span>
            <span>{emergency.progress}</span>
          </div>
        </div>
      </div>

      {/* share */}
      <div className="follow-us text-start mt-4">
        <p className="text-gray-800">Spread the word</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" aria-label="Facebook" className="text-blue-900">
            <FaFacebookF size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="YouTube" className="text-red-500">
            <FaYoutube size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="text-red-900">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-blue-500">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Donate box */}
      <div className="donate-box bg-white p-4 mt-6 border rounded-lg shadow-md">
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

export default RightSec;
