import React, { useRef, useState, useEffect } from 'react';
import Logo from '../assets/images/LOGO1.png';
import { NavLink, useLocation } from 'react-router-dom';
import '../CSS/Header.css';
import Navbar from '../Pages/Header_comp/Navbar';
import MobileNav from './MobileNav';

function Header() {
  const [navcount, setnavcount] = useState(0);
  const navdiv = useRef(null);
  const hamburger = useRef(null);
  const location = useLocation();

  const handlenav = () => {
    if (navcount === 0) {
      navdiv.current.style.display = 'block'; // Ensure it's set to block for the first time
      navdiv.current.style.transform = 'translateX(0)'; // Directly show the sidebar
      setnavcount(1);
      document.body.style.overflowX = 'hidden'; // Prevent horizontal scrolling
    } else {
      navdiv.current.style.transform = 'translateX(100%)';
      setnavcount(0);
      document.body.style.overflowX = 'hidden'; // Allow horizontal scrolling again
    }
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (navdiv.current && !navdiv.current.contains(event.target) && !hamburger.current.contains(event.target)) {
        navdiv.current.style.transform = 'translateX(100%)';
        setnavcount(0);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navdiv, hamburger]);

  // Close sidebar when navigating
  useEffect(() => {
    if (navcount === 1) {
      navdiv.current.style.transform = 'translateX(100%)';
      setnavcount(0);
    }
  }, [location]);

  const closeSidebar = () => {
    navdiv.current.style.transform = 'translateX(100%)';
    setnavcount(0);
    navdiv.current.style.display = 'none'; // Hide the sidebar after closing
  };

  return (
    
    <nav className='w-full px-4 pt-3 max-md:mr-10 max-md:mb-5'>
      <ul className='w-full flex justify-between items-center'>
        {/* Logo  */}
        <div className='w-[100%] z-10 md:w-1/5 max-md:mr-10'>
          <a href="/"><li><img src={Logo} alt="Logo" className='w-[110px] h-auto max-md:w-24 max-md:h-20' /></li></a>
        </div>
        {/* laptop Links starts */}
        <div className='navpage hidden  xl:flex items-center gap-4 font-medium ml-72'>
          <NavLink to="/" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>About us</NavLink>
          <div className="relative group">
            <NavLink to="/programmes" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Programmes</NavLink>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold">Main Programmes</h4>
                  <ul className="space-y-1">
                    <li><NavLink to="/programmes/emergency-medical-support" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Emergency Medical Support</NavLink></li>
                    <li><NavLink to="/programmes/mission-zero-hunger" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Mission Zero Hunger</NavLink></li>
                    <li><NavLink to="/programmes/mission-education" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Mission Education Program</NavLink></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Health & Wellness</h4>
                  <ul className="space-y-1">
                    <li><NavLink to="/programmes/public-health-and-nutrition" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Public Health and Nutrition</NavLink></li>
                    <li><NavLink to="/programmes/mission-smile" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Mission Smile Program</NavLink></li>
                    <li><NavLink to="/programmes/disability-elimination" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={closeSidebar}>Disability Elimination Program</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/clinic" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Our Clinics</NavLink>
          <NavLink to="/getinvolved" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Get Involved</NavLink>
          <NavLink to="/media" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Media</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `relative text-black ${isActive ? 'active' : ''}`} onClick={closeSidebar}>Contact Us</NavLink>
        </div>
        {/* laptop Links ends  */}

        {/* <Navbar 
          containerStyles='hidden xl:flex gap-x-8 items-center w-full '
          linkStyles="relative hover:text-pink-700 transition-all "
          underLineStyles='absolute left-0 top-full h-[2px] bg-pink-300 w-full'
          /> */}

          
          {/* Donate Btn  */}
         <button className="flex items-center bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full px-4 py-2 shadow-sm hover:shadow-lg transition duration-300 max-xl:mr-2 max-md:px-4 max-md:py-2">
          <span className="text-red-500 text-xl mr-2">❤️</span>
          <span className="text-black font-bold text-lg max-md:text-base">DONATE</span>
          </button>

        <div className="mobileview z-10 block xl:hidden" ref={hamburger} onClick={handlenav}>
          <i className="fa-solid fa-bars text-3xl"></i>
        </div>
        

        {/* Mobile Nav links */}
        <div className='sidebar h-[400px] mt-[500px]  bg-white absolute w-screen transform translate-x-full transition-transform duration-300 ease-in-out' ref={navdiv}>
          <ul className='flex h-full w-full flex-col justify-center items-center space-y-6 text-black text-xl pl-8'>
            <li><NavLink to="/" onClick={closeSidebar}>Home</NavLink></li>
            <li className='text-center'><NavLink to="/about" onClick={closeSidebar}>About us</NavLink></li>
            <li><NavLink to="/programmes" onClick={closeSidebar}>Programmes</NavLink></li>
            <li className='text-center'><NavLink to="/clinic" onClick={closeSidebar}>Our Clinics</NavLink></li>
            <li className='text-center'><NavLink to="/getinvolved" onClick={closeSidebar}>Get Involved</NavLink></li>
            <li><NavLink to="/media" onClick={closeSidebar}>Media</NavLink></li>
            <li className='text-center'><NavLink to="/contact" onClick={closeSidebar}>Contact Us</NavLink></li>
          </ul>
        </div>
        {/* <div className='sidebar h-[400px] mt-[500px]  bg-white absolute w-screen transform translate-x-full transition-transform duration-300 ease-in-out' ref={navdiv}>
        <MobileNav/>
        </div> */}
        {/* Mobile Nav links */}

      </ul>
    </nav>
  );
}

export default Header;
