"use client";
import { Phone, Mail, ArrowUp } from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="Footer">
      {/* Main Footer Content */}

      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>

      <div className="f-main">
        {/* Logo Section */}

        {/* Contact Information Grid */}
        <div className="contact-grid">
          <div className=" p-[0] group flex flex-col  items-center">
            <Image
              src="/assets/logo.png"
              alt="Socializo Logo"
              width={300}
              height={70}
              className="mx-auto filter drop-shadow-lg rounded-[15px]"
            />
            <h3 className="my-[20px]">
              Providing creative ideas for your business
            </h3>
            <p className="px-[12px]">
              A Birmingham marketing squad for real businesses.Proudly wasting
              ad budgets since[2022](just kidding we hate waste).
            </p>
          </div>

          {/* Email */}
          <div className="f-email group">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors">
                <Mail className="w-6 h-6 text-blue-400 mb-[5px]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-[5px]">Email Us</h4>
                <Link
                  href="mailto:info@socializo.co"
                  className="text-[white] py-[8px] mb-[5px] hover:text-blue-400 transition-colors text-[white] duration-300 text-lg"
                >
                  info@socializo.co
                </Link>
                <p className="text-sm text-gray-400 my-[5px]">
                  We respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="f-phone group">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors">
                <Phone className="w-6 h-6 text-blue-400 mb-[5px]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-[5px]">Call Us</h4>
                <Link
                  href="tel:+1 832-304-5611"
                  className="text-[white] py-[8px] hover:text-blue-400 mb-[5px] text-[white] transition-colors duration-300 text-lg"
                >
                  +1 832-304-5611
                </Link>
                <p className="text-sm text-gray-400 my-[5px]">
                  Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Social Media */}
        <div className="py-[50px] contact-grid gap-8">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-[10px] text-[24px]">
              Quick Links
            </h4>
            <ul className="space-y-3 list-none">
              <li className="py-[10px] ">
                <Link
                  href="/pages/home"
                  className="text-[white] no-underline  hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li className="py-[10px] ">
                <Link
                  href="/pages/services"
                  className="text-[white] no-underline  hover:text-blue-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="py-[10px] text-[white] no-underline  hover:text-blue-400 transition-colors duration-300">
                <Link
                  href="/pages/about"
                  className="text-[white] no-underline  hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
          
              {/* <li className="py-[10px] ">
                 <NavLink
                  href="#about"
                  className="text-[white] no-underline  hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                  
              </li> */}
              <li className="py-[10px]">
                <Link
                  href="/pages/contact"
                  className=" text-[white] no-underline  hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-[10px] text-[24px]">
              Our Services
            </h4>
            <ul className="space-y-3 list-none">
              <li className="py-[10px]">
                <span className="text-[white]">Social Media Marketing</span>
              </li>
              <li className="py-[10px]">
                <span className="text-[white]">Web Development</span>
              </li>
              <li className="py-[10px]">
                <span className="text-[white]">Lead Generation</span>
              </li>
              <li className="py-[10px]">
                <span className="text-[white]">Google Ads</span>
              </li>
              <li className="py-[10px]">
                <span className="text-[white]">Seo</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-[10px] text-[24px]">
              Stay Connected
            </h4>
            <div className="flex md:flex-wrap justify-center items-center md:justify-start gap-[20px] my-[20px]">
              <Link
                href="https://www.linkedin.com/company/socializoco/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 rounded-full text-[white] hover:bg-blue-600/30 transition-colors group"
              >
                <FaLinkedin size={30} color="#FFFF" />
              </Link>
              <Link
                href="https://www.instagram.com/socializo.co/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/30 text-[white] transition-colors group "
              >
                <Image
                  src="/assets/instagram.png"
                  alt=""
                  width={50}
                  height={50}
                />
                {/* <FaInstagramSquare size={30} color="#FFFF"  className="border-none"/> */}
              </Link>
              <Link
                href="https://www.facebook.com/p/Socializo-100067015986574/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/30 text-[white] transition-colors group"
              >
                <FaFacebook size={30} color="#FFFF" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Follow us for the latest updates on AI-powered lead generation and
              sales automation.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="f-copy">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright 2025, Thisispixelatech LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm my-[10px]">
            <Link
              href="#"
              className="text-[white] hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[white] hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[white] hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
