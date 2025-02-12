import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/programmes", name: "Programmes" },
  { path: "/privacy-policy", name: "Save Life" },
  { path: "/media", name: "Explore Campaigns" },
  { path: "/child-protection", name: "Public Health And Nutrition" },
  { path: "/donate", name: "Monthly Donation" }, // Adjusted for dynamic routing
  { path: "/clinic", name: "Our Clinics" },
  { path: "/get-involved", name: "Get Involved" },
  { path: "/contact", name: "Contact Us" },
];

const Navbar = ({ containerStyles, linkStyles, underLineStyles }) => {
  const location = useLocation();

  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive =
          location.pathname === link.path ||
          (link.path === "/donate" && location.pathname.startsWith("/donate/"));

        return (
          <NavLink
            to={link.path === "/donate" ? "/donate/1" : link.path} // Example ID for Donate
            className={`${linkStyles} capitalize line-clamp-2 w-full`}
            key={index}
          >
            {isActive && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
