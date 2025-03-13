import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, Mail, Phone, ChevronDown } from "lucide-react";
import logo from "/src/assets/images/LOGO1.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const sidebarLinks = [
  { title: "Home", path: "/", sublinks: [] },
  { title: "About Us", path: "/aboutus", sublinks: [] },
  {
    title: "Programmes",
    path: "/programmes",
    sublinks: [
      {
        title: "Emergency Medical Support",
        path: "/programmes/medical-support",
      },
      { title: "Mission Zero Hunger", path: "/programmes/zero-hunger" },
      {
        title: "Mission Education Program",
        path: "/programmes/education-program",
      },
      {
        title: "Public Health And Nutrition",
        path: "/programmes/health-and-nutrition",
      },
      { title: "Mission Smile Program", path: "/programmes/smile-program" },
      {
        title: "Disability Elimination Program",
        path: "/programmes/elimination-program",
      },
    ],
  },
  { title: "Our Clinics", path: "/about/clinics", sublinks: [] },
  { title: "Get Involved", path: "/about/getinvolved", sublinks: [] },
  { title: "Media", path: "/media", sublinks: [] },
  { title: "Contact Us", path: "/about/contactus", sublinks: [] },
];

function navClass({ isActive }) {
  return `font-bold px-2 hover:no-underline ${isActive ? "text-pink-400" : ""}`;
}

export default function SideBar({ isOpen, setIsOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      {/* Sidebar Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-pink-900 bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col space-y-6 overflow-y-auto bg-white p-5 shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <a href="/">
            <img className="w-20" src={logo} alt="Logo" />
          </a>
          <button onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex w-full flex-col gap-4">
          {sidebarLinks.map(({ title, path, sublinks }) => (
            <div key={path}>
              {sublinks.length > 0 ? (
                <div>
                  <button
                    className="flex w-full items-center justify-between pl-2 font-bold hover:text-pink-400 focus:outline-none"
                    onClick={() =>
                      setOpenDropdown(openDropdown === title ? null : title)
                    }
                  >
                    <span>{title}</span>
                    <ChevronDown
                      size={20}
                      className={`rounded-3xl bg-pink-500 p-1 text-gray-900 transition-transform duration-300 ${
                        openDropdown === title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openDropdown === title ? "auto" : 0,
                      opacity: openDropdown === title ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-1 space-y-2 pl-5">
                      {sublinks.map(({ title, path }) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            className="hover:text-pink-400 hover:no-underline"
                            onClick={() => setIsOpen(false)}
                          >
                            {title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ) : (
                <NavLink
                  to={path}
                  className={navClass}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </NavLink>
              )}
              <hr className="mt-3" />
            </div>
          ))}
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
        <div className="flex flex-col space-y-2">
          <a
            href="mailto:contact@rhlf.org"
            className="flex items-center gap-3 px-3 hover:no-underline"
          >
            <Mail size={30} strokeWidth={3} className="p-1 text-black" />
            <span className="font-medium text-gray-800">contact@rhlf.org</span>
          </a>
          <a
            href="tel:+9102269719935"
            className="flex items-center gap-3 px-3 hover:no-underline"
          >
            <Phone size={30} strokeWidth={3} className="p-1 text-black" />
            <span className="font-medium text-gray-800">+91-02269719935</span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex w-full items-center justify-center gap-4">
          <a href="#" className="text-blue-900">
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://x.com/rhlfofficial"
            target="_"
            className="text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.youtube.com/@rhlfofficialngo"
            target="_"
            className="text-red-500"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/rhlfofficial/"
            target="_"
            className="text-pink-600"
          >
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-blue-700" target="_">
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </>
  );
}
