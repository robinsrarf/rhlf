import "./CSS/App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Homepage from "./Pages/Homepage";
import Aboutus from "./Pages/Aboutus";
import Clinic from "./Pages/Clinic";
import Getinvolved from "./Pages/Getinvolved";
import Contact from "./Pages/Contact";
import Media from "./Pages/Media";
import Programmes from "./Pages/Programmes";
// import CardDetails from "./Pages/CardDetails";
import DonatePage from "./Pages/Donate/DonatePage";
import TermsAndConditions from "./Pages/QuickLinksComponents/TermsConditions";
import RefundPolicy from "./Pages/QuickLinksComponents/RefundPolicy";
import PrivacyPolicy from "./Pages/QuickLinksComponents/PrivacyPolicy";
import DonorList from "./Pages/Donorlist";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "./Pages/NotFound";
import Blog from "./Pages/Blogs/Blog";
import BlogPost from "./Pages/Blogs/BlogPost";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="clinic" element={<Clinic />} />
          <Route path="get-involved" element={<Getinvolved />} />
          <Route path="contact" element={<Contact />} />
          <Route path="media" element={<Media />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="donate/:donateId" element={<DonatePage />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:blogId" element={<BlogPost />} />

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
