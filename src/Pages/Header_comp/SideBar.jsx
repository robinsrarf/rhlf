import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X, Mail, Phone, ChevronDown, Flashlight } from "lucide-react";
import logo from "/src/assets/images/LOGO1.jpg";

const programmes = {
  "Emergency Medical Support": "/programmes/medical-support",
  "Mission Zero Hunger": "/programmes/zero-hunger",
  "Mission Education Program": "/programmes/education-program",
  "Public Health And Nutrition": "/programmes/health-and-nutrition",
  "Mission Smile Program": "/programmes/smile-program",
  "Disability Elimination Program": "/programmes/elimination-program",
};
const About = {
  "Our Clinics": "/about/clinics",
  "Contact Us": "/about/contacts",
};

function navClass({ isActive }) {
  return isActive
    ? "text-pink-400 font-bold pr-2 pl-2 hover:no-underline"
    : "font-bold pr-2 pl-2 hover:no-underline";
}

function DropDownItem({ Items }) {
  return Object.entries(Items).map(([name, link]) => (
    <>
      <li key={link}>
        <NavLink
          to={link}
          className="hover:no-underline hover:text-pink-400"
          onClick={() => setIsOpen(false)}
        >
          {name}
        </NavLink>
      </li>
    </>
  ));
}

export default function SideBar({ isOpen, setIsOpen }) {
  //   const [isOpen, setIsOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      {/*SideBar for Mobile View*/}
      <nav>
        {isOpen && (
          <div
            className="fixed inset-0 bg-pink-900 bg-opacity-50 z-40"
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
          <div className="flex justify-center items-center gap-20">
            <a href="/">
              <img className="w-20" src={logo} alt="Logo" />
            </a>
            <button onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
          </div>

          {/* Sidebar Links */}
          {[
            { name: "Home", path: "/" },
            { name: "Media", path: "/media" },
            { name: "Get Involved", path: "/get-involved" },
          ].map(({ name, path }) => (
            <div key={path}>
              <NavLink
                to={path}
                className={navClass}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
              <hr />
            </div>
          ))}
          {/*Programmes Drop Down */}
          <div>
            <button
              className="flex justify-between items-center w-full pl-2 font-bold hover:text-pink-400 focus:outline-none"
              onClick={() => setIsProgramOpen(!isProgramOpen)}
            >
              <span>Programmes</span>
              <ChevronDown
                size={20}
                className={` text-gray-900 bg-pink-500 p-1 rounded-3xl transition-transform duration-300 ${
                  isProgramOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isProgramOpen ? "auto" : 0,
                opacity: isProgramOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="pl-5 mt-2 space-y-2">
                <DropDownItem Items={programmes} />{" "}
                {/* Adding Programes sub links */}
              </ul>
            </motion.div>
          </div>
          <hr />
          {/*About Us Dropdown Section */}
          <div>
            <button
              className="flex justify-between items-center w-full pl-2 font-bold hover:text-pink-400 focus:outline-none"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              <span>About Us</span>
              <ChevronDown
                size={20}
                className={`text-gray-900 bg-pink-500 p-1 rounded-3xl transition-transform duration-300 ${
                  isAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isAboutOpen ? "auto" : 0,
                opacity: isAboutOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="pl-5 mt-2 space-y-2">
                <DropDownItem Items={About} /> {/* Adding About Us sub links */}
              </ul>
            </motion.div>
          </div>

          {/* Donate Button */}
          <NavLink
            to="/donate"
            className="p-2 font-bold border-2 border-black rounded-3xl hover:bg-pink-400 hover:text-white text-center hover:no-underline"
            onClick={() => setIsOpen(false)}
          >
            ❤️ DONATE
          </NavLink>

          {/* Contact Links */}
          <a
            href="mailto:needhelp@cleanhearts.com"
            className="hover:no-underline hover:text-pink-400"
          >
            <div className="flex gap-5 items-center">
              <Mail
                size={35}
                className="text-gray-900 bg-pink-500 p-1 rounded-3xl"
              />
              contact@rhlf.org
            </div>
          </a>

          <a
            href="tel:+9102269719935"
            className="hover:no-underline hover:text-pink-400"
          >
            <div className="flex gap-5 items-center">
              <Phone
                size={30}
                className="text-gray-900 bg-pink-500 p-1 rounded-3xl"
              />
              +91-02269719935
            </div>
          </a>
        </motion.div>
      </nav>
    </>
  );
}
