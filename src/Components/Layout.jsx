import { Outlet } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
import icon from "../assets/images/ARF.png";
import Navbar from "../Pages/Header_comp/Navbar";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import { Suspense } from "react";

function Layout() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <div className="absolute top-[40vh] flex h-fit w-fit items-center justify-center text-white">
            <img src={icon} alt="Loading..." className="animate-pulse w-20" />
          </div>
        </div>
      }
    >
      <div className="w-full">
        <Navbar />

        <Outlet />
        {/* <Footer /> */}
        <div className="fixed bottom-[0.1px] right-5 z-50 mb-8 flex w-[55px] flex-col gap-3">
          <WhatsAppButton />
          <BackToTop />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default Layout;
