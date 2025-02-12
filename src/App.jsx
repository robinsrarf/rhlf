import "./CSS/App.css";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "./Components/Outlet";
import Homepage from "./Pages/Homepage";
import Aboutus from "./Pages/Aboutus";
import Clinic from "./Pages/Clinic";
import Getinvolved from "./Pages/Getinvolved";
import Contact from "./Pages/Contact";
import Media from "./Pages/Media";
import Programmes from "./Pages/Programmes";
import CardDetails from "./Pages/CardDetails"; // Import the new CardDetails page
import TermsAndConditions from "./Pages/QuickLinksComponents/TermsConditions";
import RefundPolicy from "./Pages/QuickLinksComponents/RefundPolicy";
import PrivacyPolicy from "./Pages/QuickLinksComponents/PrivacyPolicy";
import DonorList from "./Pages/Donorlist";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "./Pages/NotFound";


// Motion Wrapper for animations
const MotionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MotionWrapper>
                <Homepage />
              </MotionWrapper>
            }
          />
          <Route
            path="about"
            element={
              <MotionWrapper>
                <Aboutus />
              </MotionWrapper>
            }
          />
          <Route
            path="clinic"
            element={
              <MotionWrapper>
                <Clinic />
              </MotionWrapper>
            }
          />
          <Route
            path="get-involved"
            element={
              <MotionWrapper>
                <Getinvolved />
              </MotionWrapper>
            }
          />
          <Route
            path="contact"
            element={
              <MotionWrapper>
                <Contact />
              </MotionWrapper>
            }
          />
          <Route
            path="media"
            element={
              <MotionWrapper>
                <Media />
              </MotionWrapper>
            }
          />
          <Route
            path="programmes"
            element={
              <MotionWrapper>
                <Programmes />
              </MotionWrapper>
            }
          />
          <Route
            path="donate/:id"
            element={
              <MotionWrapper>
                <CardDetails />
              </MotionWrapper>
            }
          />

          {/* Quick Links */}
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="donor-list" element={<DonorList />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
