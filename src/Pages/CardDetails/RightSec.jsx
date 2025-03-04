import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const RightSec = ({ emergency }) => {
  // State for handling donation amount
  const [donationAmount, setDonationAmount] = useState("");

  // Function to handle donation submission
  const handleDonate = () => {
    if (donationAmount > 0) {
      alert(`Thank you for donating $${donationAmount}!`);
      // You can integrate with backend API for actual donation functionality
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  return (
    <div className="col-span-1 mb-8 flex flex-col items-start">
      <h1 className="text-3xl font-bold">{emergency.title}</h1>
      <div className="mt-4 flex justify-center gap-4">
        <span className="rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
          Tax Benefit <span className="ml-1 cursor-pointer">i</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-green-600 px-2 py-1 text-sm text-white">
            Verified
          </span>
          <span className="cursor-pointer">i</span>
        </div>
        <span className="rounded-md bg-indigo-600 px-2 py-1 text-sm text-white">
          Medical
        </span>
      </div>

      {/* raised amount */}
      <div className="w-full">
        <div className="mb-4">
          <div className="text-lg font-bold text-black">
            {emergency.totalRaised}{" "}
            <span className="text-base font-medium text-gray-600">
              raised out of {emergency.totalRequired}
            </span>
          </div>
          <div className="relative mb-4 h-2 rounded-full bg-gray-200 pb-2 pt-2">
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-green-500"
              style={{ width: "30%" }}
            ></div>
            <span className="absolute right-0 top-0 text-xs text-gray-600">
              {emergency.progress}
            </span>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>{emergency.backers} Donors</span>
            <span>{emergency.progress}</span>
          </div>
        </div>
      </div>

      {/* share */}
      <div className="follow-us mt-4 text-start">
        <p className="text-gray-800">Spread the word</p>
        <div className="mt-2 flex justify-center space-x-4">
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
      <div className="donate-box mt-6 rounded-lg border bg-white p-4 shadow-md">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <p className="cursor-pointer rounded-md border border-red-500 p-3 text-orange-600 transition-all hover:scale-110">
              ₹ 1000
            </p>
            <p className="cursor-pointer rounded-md border border-red-500 p-3 text-orange-600 transition-all hover:scale-110">
              ₹ 1500
            </p>
            <p className="cursor-pointer rounded-md border border-red-500 p-3 text-orange-600 transition-all hover:scale-110">
              ₹ 2000
            </p>
          </div>
          <div className="flex gap-2">
            <select name="currency" id="currency">
              <option value="currency">INR</option>
              <option value="currency">AHEM</option>
              <option value="currency">USD</option>
            </select>
            <input type="Number" className="border-b-2 outline-none" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base text-gray-500">DONATE VIA:</p>
            <div className="flex flex-col gap-3">
              <p className="font-bold uppercase text-black">Upi:</p>
              <div className="flex gap-5">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png"
                  alt="phonepay"
                  className="h-10 w-10 cursor-pointer"
                />
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png"
                  alt="Gpay"
                  className="h-10 w-10 cursor-pointer"
                />
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bhim-upi-icon.png"
                  alt="Bhim"
                  className="h-10 w-10 cursor-pointer"
                />
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visa-icon.png"
                  alt=""
                  className="h-10 w-10 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-bold uppercase text-black">
                Other Options:
              </p>
              <div className="flex gap-5">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png"
                  alt="phonepay"
                  className="h-10 w-10 cursor-pointer"
                />
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/american-express-icon.png"
                  alt="Gpay"
                  className="h-10 w-10 cursor-pointer"
                />
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/wallet-icon.png"
                  alt="Bhim"
                  className="h-10 w-10 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Donate Button  */}
          <div className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-orange-500 p-3 text-white shadow-lg">
            <p>₹ 1000</p>
            <p className="rounded-md bg-white p-2 text-orange-400">
              Donate Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSec;
