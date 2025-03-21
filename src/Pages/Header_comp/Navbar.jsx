import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Mail, Phone, ChevronDown } from "lucide-react";
import logo from "/src/assets/images/LOGO1.jpg";
import SideBar from "./SideBar";

// Function for active NavLink styling
function navClass({ isActive }) {
  return isActive
    ? "text-pink-400 font-bold pr-2 pl-2 hover:no-underline"
    : "font-bold pr-2 pl-2 hover:no-underline";
}

// Function for Donate button styling
function donateButtonClass({ isActive }) {
  return isActive
    ? "bg-pink-400 text-white font-bold p-2 border-pink-300 rounded-3xl border-2 hover:no-underline shadow-sm hover:shadow-lg transition duration-300"
    : "font-bold p-2 border-black rounded-3xl border-2 hover:no-underline shadow-sm hover:shadow-lg transition duration-300";
}

// Component for dropdown menu items
function DropDownItem({ programName, directTo }) {
  return (
    <li>
      <NavLink
        to={directTo}
        className="block px-4 py-2 text-black hover:bg-gray-200 hover:no-underline"
      >
        {programName}
      </NavLink>
    </li>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 flex w-full items-center bg-white py-1 pl-5 pr-3 shadow-md transition duration-300 hover:shadow-sm lg:pr-10 ${
          isVisible ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* LOGO */}
        <div>
          <a href="/">
            <img className="w-20 lg:w-24" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="ml-auto hidden lg:flex">
          <ul className="flex space-x-6">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            {/* Programmes Dropdown */}
            <div className="group relative z-50">
              <NavLink to="/programmes" className={navClass}>
                Programmes
              </NavLink>
              <div className="absolute left-0 hidden w-48 rounded bg-white shadow-lg group-hover:block">
                {/* Main Programmes */}
                <div>
                  <h4 className="px-4 py-2 font-bold">Main Programmes</h4>
                  <ul className="py-2">
                    <DropDownItem
                      programName="Emergency Medical Support"
                      directTo="/programmes/medical-support"
                    />
                    <DropDownItem
                      programName="Mission Zero Hunger"
                      directTo="/programmes/zero-hunger"
                    />
                    <DropDownItem
                      programName="Mission Education Program"
                      directTo="/programmes/education-program"
                    />
                  </ul>
                </div>

                {/* Health & Wellness */}
                <div>
                  <h4 className="px-4 py-2 font-bold">Health & Wellness</h4>
                  <ul className="py-2">
                    <DropDownItem
                      programName="Public Health And Nutrition"
                      directTo="/programmes/health-and-nutrition"
                    />
                    <DropDownItem
                      programName="Mission Smile Program"
                      directTo="/programmes/smile-program"
                    />
                    <DropDownItem
                      programName="Disability Elimination Program"
                      directTo="/programmes/elimination-program"
                    />
                  </ul>
                </div>
              </div>
            </div>

            {/*About Us Drop Down*/}
            <div className="group relative">
              <NavLink to="/about" className={navClass}>
                About Us
              </NavLink>
              <div className="absolute left-0 hidden w-48 rounded bg-white shadow-lg group-hover:block">
                <ul className="py-2">
                  <DropDownItem
                    programName="Our Clinics"
                    directTo="/about/clinics"
                  />
                </ul>
                <ul className="py-2">
                  <DropDownItem
                    programName="Contact Us"
                    directTo="/about/contact"
                  />
                </ul>
              </div>
            </div>

            <NavLink to="/media" className={navClass}>
              Media
            </NavLink>
            <NavLink to="/get-involved" className={navClass}>
              Get Involved
            </NavLink>

            {/* Donate Button */}
            <div>
              <NavLink to="/donate" className={donateButtonClass}>
                ❤️ DONATE
              </NavLink>
            </div>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto lg:hidden">
          <NavLink to="/donate" className={donateButtonClass}>
            ❤️ DONATE
          </NavLink>
        </div>
        <button className="ml-2 lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={30} />
        </button>
      </nav>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="h-24"></div>
    </>
  );
}
export default Navbar;
