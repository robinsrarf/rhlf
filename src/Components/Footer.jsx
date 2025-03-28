import { useState } from "react";
import "../CSS/Footer.css";
import footerBg from "../assets/images/footer-bg.png";
import mastercard from "../assets/images/mastercard.svg";
import paytm from "../assets/images/Paytm New.svg";
import visa from "../assets/images/visa.svg";
import secures from "../assets/images/securelogo.svg";
import americanexpress from "../assets/images/Americanexpresslogo.jpeg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [loaded, setLoaded] = useState(false);
  return (
    <footer className="w-full border-t-8 border-pink-600 bg-gray-100 pt-2 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-3 lg:px-20">
        {/* Address Section */}
        <div className="text-center md:text-left">
          <h3 className="mb-3 text-xl font-bold">Address</h3>
          <p className="leading-relaxed">
            H.no. 4453, Sathe Nagar near Manoj Kirana Store, Narpoli, Bhiwandi,
            Thane, Maharashtra-421305
          </p>
          <p>PAN no. AALCR3060M</p>
          <p>
            Registration no.{" "}
            <span className="font-medium">U85300MH2021NPL368070</span>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.360039332275!2d73.0417286!3d19.2713426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdaa5aaaaaab%3A0x6cfa52641767c98!2sReal%20Happiness%20Of%20Life%20Foundation!5e0!3m2!1sen!2sin!4v1700000000000"
            className={`${loaded ? "" : "scale-0"} mt-4 h-40 w-full rounded-lg border`}
            allowFullScreen=""
            loading="lazy"
            onLoad={() => setLoaded(true)}
          ></iframe>
        </div>

        {/* Get in Touch & Quick Links */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-xl font-bold">Get in Touch!</h3>
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-pink-500"></i> THANE,
              MAHARASHTRA, INDIA
            </p>
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-pink-500"></i> +91 9607753148
            </p>
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-pink-500"></i>{" "}
              info@rhlf.org
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="privacy-policy" className="w-fit hover:text-pink-500">
                Privacy Policy
              </Link>
              <Link
                to="terms-and-conditions"
                className="w-fit hover:text-pink-500"
              >
                Terms & Conditions
              </Link>
              <Link to="refund-policy" className="w-fit hover:text-pink-500">
                Refund Policy
              </Link>
              <a
                href="/Child_Protection_Policy.pdf"
                target="_blank"
                className="w-fit hover:text-pink-500"
              >
                Child Protection Policy
              </a>
              <a
                href="/POSH_at_workplace.pdf"
                target="_blank"
                className="w-fit hover:text-pink-500"
              >
                POSH Policy
              </a>
            </nav>
          </div>
        </div>

        {/* Newsletter & Payments */}
        <div className="space-y-8 text-center md:text-left">
          <div>
            <h3 className="mb-3 text-xl font-bold">Stay Updated</h3>
            <form className="space-y-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded border p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded border p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded border p-2"
              />
              <button
                type="submit"
                className="w-full rounded bg-pink-500 p-2 text-white hover:bg-pink-600"
              >
                Subscribe
              </button>
              <p className="text-sm text-neutral-500">
                By subscribing, you agree with our privacy policy and our terms
                of service.
              </p>
            </form>
          </div>
          <div className="flex justify-center space-x-4 md:justify-start lg:place-self-center">
            <img src={visa} alt="Visa" className="h-8" />
            <img src={mastercard} alt="Mastercard" className="h-8" />
            <img src={paytm} alt="Paytm" className="h-8" />
            <img src={americanexpress} alt="American Express" className="h-8" />
            <img src={secures} alt="Secure" className="h-8" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-center space-x-4">
        <hr className="w-full" />
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
        <hr className="w-full" />
      </div>
      <div
        className="mt-5 flex h-20 items-center justify-center border-t bg-cover text-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <p>
          &copy; 2024 All Rights Reserved.{" "}
          <a href="#" className="text-pink-800">
            Real Happiness Of Life Foundation
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
