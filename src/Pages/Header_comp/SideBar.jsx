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
          className="hover:text-pink-400 hover:no-underline"
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
            className="fixed inset-0 z-40 bg-pink-900 bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
        )}
        {/* Mobile Sidebar */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col space-y-6 bg-white p-5 shadow-lg"
        >
          {/* Close Button */}
          <div className="flex items-center justify-center gap-20">
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
              className="flex w-full items-center justify-between pl-2 font-bold hover:text-pink-400 focus:outline-none"
              onClick={() => setIsProgramOpen(!isProgramOpen)}
            >
              <span>Programmes</span>
              <ChevronDown
                size={20}
                className={`rounded-3xl bg-pink-500 p-1 text-gray-900 transition-transform duration-300 ${
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
              <ul className="mt-2 space-y-2 pl-5">
                <DropDownItem Items={programmes} />{" "}
                {/* Adding Programes sub links */}
              </ul>
            </motion.div>
          </div>
          <hr />
          {/*About Us Dropdown Section */}
          <div>
            <button
              className="flex w-full items-center justify-between pl-2 font-bold hover:text-pink-400 focus:outline-none"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              <span>About Us</span>
              <ChevronDown
                size={20}
                className={`rounded-3xl bg-pink-500 p-1 text-gray-900 transition-transform duration-300 ${
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
              <ul className="mt-2 space-y-2 pl-5">
                <DropDownItem Items={About} /> {/* Adding About Us sub links */}
              </ul>
            </motion.div>
          </div>

          {/* Donate Button */}
          <NavLink
            to="/donate"
            className="rounded-3xl border-2 border-black p-2 text-center font-bold hover:bg-pink-400 hover:text-white hover:no-underline"
            onClick={() => setIsOpen(false)}
          >
            ❤️ DONATE
          </NavLink>

          {/* Contact Links */}
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:needhelp@cleanhearts.com"
              className="flex items-center gap-3 p-3 hover:no-underline"
            >
              <Mail
                size={30}
                className="rounded-xl bg-pink-500 p-2 text-white"
              />
              <span className="font-medium text-gray-800">
                contact@rhlf.org
              </span>
            </a>

            <a
              href="tel:+9102269719935"
              className="flex items-center gap-3 p-3 hover:no-underline"
            >
              <Phone
                size={30}
                className="rounded-xl bg-pink-500 p-2 text-white"
              />
              <span className="font-medium text-gray-800">+91-02269719935</span>
            </a>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
