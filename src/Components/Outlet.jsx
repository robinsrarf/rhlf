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
        {/* <Footer /> */}
        <div className="fixed bottom-[0.1px] right-5 z-50 mb-8 flex w-[55px] flex-col gap-3">
          <WhatsAppButton />
          <BackToTop />
        </div>
      </div>
    </motion.div>
  );
}

export default Layout;
