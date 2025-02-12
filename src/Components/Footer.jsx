import React from 'react';
import '../CSS/Footer.css';
import LOGO1 from '../assets/images/LOGO1.png';
import mastercard from '../assets/images/mastercard.svg';
import paytm from '../assets/images/Paytm New.svg';
import visa from '../assets/images/visa.svg';
import secures from '../assets/images/securelogo.svg';
import americanexpress from '../assets/images/Americanexpresslogo.jpeg';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
//import Child_Protection_Policy from '../Pages/QuickLinksComponents/ChildProtectionPolicy'
//import POSH_at_workplace from '../assets/POSH_at_workplace.pdf';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-md:gap-20">
  <div className="section-1 mt-8">
    <h3 className="section-title text-xl font-bold max-md:ml-10">Address</h3>
    <div className='details mb-4 text-start max-md:text-center  max-md:ml-1'>
      <p className='text-gray-800 leading-relaxed'>
        H.no. 4453, Sathe Nagar near Manoj Kirana Store Narpoli, Bhiwandi, Thane, Maharashtra-421305
      </p>
      <p className='text-gray-800 leading-relaxed'>PAN no. AALCR3060M</p>
      <p className='text-gray-800 leading-relaxed  '>Registration no. <span className=''>U85300MH2021NPL368070</span></p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15063.743743281078!2d73.0332599821693!3d19.285151983263717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sH.no.%204453%2C%20Sathe%20Nagar%20near%20Manoj%20Kirana%20Store%20Narpoli%2C%20Bhiwandi%2C%20Thane%2C%20Maharashtra-421305.!5e0!3m2!1sen!2sin!4v1728574676558!5m2!1sen!2sin"
      className="w-full h-52 border-0 rounded-lg max-md:ml-2"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>

  <hr className="footer-lines" />

  <div className='right-section flex flex-col justify-between mt-12 '>
    <div className='flex flex-col md:flex-row justify-between gap-16'>
      <div className="section-2 text-start">
        <h3 className='section-title font-bold text-xl max-md:ml-10 '>Get in Touch!</h3>
        <div className="locationdetails space-y-2 max-md:ml-1">
          <p className='thane flex items-center cursor-pointer'>
            <i className="fa-solid fa-location-dot text-custompink w-5 mr-2"></i>
            <span className='text-black hover:text-gray-400 transition-colors duration-300 location text-sm'>
              THANE, MAHARASHTRA, INDIA
            </span>
          </p>
          <p className='flex items-center cursor-pointer'>
            <i className="fa-solid fa-phone-volume text-custompink w-5 mr-2 max-md:ml-8"></i>
            <span className='text-black hover:text-gray-400 transition-colors duration-300 '>+91 9607753148</span>
          </p>
          <p className='flex items-center cursor-pointer '>
            <i className="fa-solid fa-envelope text-custompink w-5 mr-2 max-md:ml-10"></i>
            <span className='text-black hover:text-gray-400 transition-colors duration-300 '>info@rhlf.org</span>
          </p>
        </div>
      </div>

      <div className="section-3 text-start">
        <h3 className='section-title font-bold text-xl max-md:ml-10  '>Quick Links</h3>
        <div className='space-y-2  lg:text-start flex flex-col max-md:ml-1  max-md:
        text-center'>
          <Link to="/privacyPolicy" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
            Privacy Policy
          </Link>
          <Link to="/termsAndCondition" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
            Terms & Condition
          </Link>
          <Link to="/RefundPolicy" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
            Refund Policy
          </Link>
          <a href="/Child_Protection_Policy.pdf" target="_blank" rel="noopener noreferrer" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
            Child Protection Policy
          </a>
          <a href="/POSH_at_workplace.pdf" target="_blank" rel="noopener noreferrer" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
            Posh Policy
          </a>
          
        </div>
      </div>

      <div className="subscribe-form">
        <h3 className='section-title font-bold text-xl  '>Keep Helping Stay Updated.</h3>
        <form className="flex flex-col space-y-2">
          <input type="text" placeholder="First Name" className="input-field" />
          <input type="text" placeholder="Last Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
        <p className="text-[9px] text-gray-400 mt-2 text-start">
          By subscribing, you agree with our privacy policy and our terms of service.
        </p>
      </div>
    </div>

    <div className="logos flex justify-start space-x-2 payment-logos mb-16 ">
      <img src={visa} alt="Visa" className='logo' />
      <img src={mastercard} alt="Mastercard" className='logo' />
      <img src={paytm} alt="Paytm" className='logo' />
      <img src={americanexpress} alt="American Express" className='logo' />
      <img src={secures} alt="Secures" className='logo' />
    </div>
  </div>
</div>

  
      {/* Line and Logo Section */}
      <div className="line-with-logo">
        <hr className="footer-line" />
        <img src={LOGO1} alt="Logo" className="line-logo w-[80px] h-[70px]" />
        <hr className="footer-line" />
      </div>
  
      {/* Follow Us Section */}
      <div className="follow-us text-center mt-4">
        <p className="text-gray-800">Follow Us</p>
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
  
      {/* Additional Links Section */}
      {/* 
      <div className="additional-links text-center mt-4">
        <span className="text-pink-500">Child Protection Policy</span>
        <span className="text-gray-500 mx-2">|</span>
        <span className="text-pink-500">Privacy Policy</span>
        <span className="text-gray-500 mx-2">|</span>
        <span className="text-pink-500">Terms of Use</span>
        <span className="text-gray-500 mx-2">|</span>
        <span className="text-pink-500">Employee Login</span>
      </div>
      */}
  
      {/* Educate Girls Section */}
      <div className="educate-girls text-center mt-4 text-black">
        <p>Real Happiness Of Life Foundation (RHLF) | Is Registered in India Under Section 8 Of the Indian Companies Act, 2013.</p>
        <p>
          @2024 All Rights Reserved. <span className='text-pink-500'>Real Happiness Of Life Foundation.</span>
        </p>
      </div>
    </div>
  );
  
}

export default Footer;
