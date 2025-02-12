import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton'; // Import the WhatsApp button
import { motion } from 'framer-motion';


function Layout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className="w-full">
        <Header />
        <Outlet />
        <Footer />
        <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </div>
    </motion.div>
  );
}

export default Layout;
