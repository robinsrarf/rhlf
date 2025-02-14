import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion";
import Navbar from "../Pages/Header_comp/Navbar";

import BackToTop from "./BackToTop";

function Layout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <Navbar />

        <Outlet />
        <Footer />
        <div className="fixed flex flex-col z-50 w-[55px] bottom-[0.1px] right-5 mb-8 gap-3">
          <WhatsAppButton />
          <BackToTop />
        </div>
      </div>
    </motion.div>
  );
}

export default Layout;
