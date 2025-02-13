import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton"; 
import { motion } from "framer-motion";
import Navbar from "../Pages/Header_comp/Navbar";

function Layout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <Navbar></Navbar>
        <Outlet />
        <Footer />
        <WhatsAppButton /> {/* Add the WhatsApp button here */}
      </div>
    </motion.div>
  );
}

export default Layout;
