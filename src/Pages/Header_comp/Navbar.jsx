import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/images/LOGO1.jpg";

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
      <nav className={`flex fixed top-0 bg-white items-center w-full pl-5 pr-10 py-3 shadow-md hover:shadow-sm transition duration-300 z-50 ${isVisible?"opacity-0 pointer-events-none":" opacity-100"}`}>
        {/* LOGO */}
        <div>
          <a href="/">
            <img className="w-24" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex ml-auto">
          <ul className="flex space-x-6">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            {/* Programmes Dropdown */}
            <div className="relative group z-50">
              <NavLink to="/programmes" className={navClass}>
                Programmes
              </NavLink>
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded hidden group-hover:block">
                {/* Main Programmes */}
                <div>
                  <h4 className="font-bold px-4 py-2">Main Programmes</h4>
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
                  <h4 className="font-bold px-4 py-2">Health & Wellness</h4>
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
            <div className="relative group">
              <NavLink to="/about" className={navClass}>
                About Us
              </NavLink>
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded hidden group-hover:block">
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
        <button className="lg:hidden ml-auto" onClick={() => setIsOpen(true)}>
          <Menu size={32} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-5 flex flex-col space-y-6"
      >
        {/* Close Button */}
        <button className="self-end" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>

        {/* Sidebar Links */}
        {[
          { name: "Home", path: "/" },
          { name: "Programmes", path: "/programmes" },
          { name: "Media", path: "/media" },
          { name: "About Us", path: "/about" },
          { name: "Get Involved", path: "/get-involved" },
        ].map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className="text-lg font-bold hover:text-pink-400 hover:no-underline"
            onClick={() => setIsOpen(false)}
          >
            {name}
          </NavLink>
        ))}

        {/* Donate Button */}
        <NavLink
          to="/donate"
          className="p-2 border-2 border-black rounded-3xl hover:bg-pink-400 hover:text-white text-center hover:no-underline"
          onClick={() => setIsOpen(false)}
        >
          ❤️ DONATE
        </NavLink>
      </motion.div>
      <div className="h-32"></div>
    </>
  );
}

export default Navbar;
