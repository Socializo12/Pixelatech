"use client";
import { Phone, Mail,Home, ArrowUp } from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="Footer">
  
      <div className="f-main">
        {/* Logo Section */}
        <div className="contact-grid">
          <div className="f-email p-[0] group  flex justify-center items-center  flex-col  items-center">
            <Image
              src="/assets/logo.png"
              alt="Pixelatech Logo"
              width={250}
              height={70}
              className=" inset-0 w-[280px] h-[65px] object-cover "
            />
            <h3 className="my-[20px] px-[10px]">
              Providing creative ideas for your business
            </h3>
            <p className="px-[10px]">
              A Birmingham marketing squad for real businesses.Proudly wasting
              ad budgets since[2022](just kidding we hate waste).
            </p>
          </div>

          {/* Email */}
          <div className="f-email group flex justify-center items-center ">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors">
                <Mail className="w-6 h-6 text-blue-400 mb-[5px]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-[5px]">Email Us</h4>
                <Link
                  href="mailto:info@thisispixelatech.com"
                  className="text-[white] no-underline
 py-[8px] mb-[5px] hover:text-blue-400 transition-colors text-[white] duration-300 text-lg"
                >
                  info@thisispixelatech.com
                </Link>
                <p className="text-sm text-gray-400 my-[5px]">
                  We respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="f-phone group flex justify-center items-center ">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors">
                <Phone className="w-6 h-6 text-blue-400 mb-[5px]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-[5px]">Call Us</h4>
                <Link
                  href="tel:+1(000)000-000"
                  className="text-[white] no-underline py-[8px] hover:text-blue-400 mb-[5px] text-[white] transition-colors duration-300 text-lg"
                >
                  +1(000)000-000
                </Link>
                <p className="text-sm text-gray-400 my-[5px]">
                  Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>
          </div>
          {/* Address */}
          <div className="f-phone group flex justify-center items-center ">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors">
                <Home className="w-6 h-6 text-blue-400 mb-[5px]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-[5px]">Address</h4>
              
                <p className="text-sm text-gray-400 my-[5px]">
                 Address: Flat 36, 34 Ryland Street Ryland Street, Placido, Birmingham, England, B16 8DB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Social Media */}
        <div className="py-[50px] w-[100%] mx-[auto] flex justify-around items-start gap-8">
          {/* Quick Links */}
          <div className="w-[33%] flex justify-center items-center flex-col max-[auto]">
            <div className="text-left">
            <h4 className="font-semibold text-white mb-[10px] text-[24px]">
              Quick Links
            </h4>
            <ul className="space-y-3 list-none ">
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
                  href="/pages/faq"
                  className="text-[white] no-underline  hover:text-blue-400 transition-colors duration-300"
                >
                  FAQ
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
          </div>
          {/* Services */}
          <div className="w-[33%]  flex justify-center items-center flex-col max-[auto]">
            <div className="text-left">
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
          </div>
          {/* Social Media & Newsletter */}
          <div className="w-[33%] max-[auto] flex flex-col items-start justify-center">
            <div className="">
            <h4 className="font-semibold text-white mb-[10px] text-[24px]">
              Stay Connected
            </h4>
            <div className="flex md:flex-wrap justify-start items-center md:justify-start gap-[20px] my-[20px]">
              <Link
                href="https://www.linkedin.com/company/Pixelatechco/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 rounded-full text-[white] hover:bg-blue-600/30 transition-colors group"
              >
                <FaLinkedin size={26} color="#FFFF" />
              </Link>
              <Link
                href="https://www.instagram.com/Pixelatech.co/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/30 text-[white] transition-colors group "
              >
                <Image
                  src="/assets/instagram.png"
                  alt=""
                  width={40}
                  height={40}
                />
                {/* <FaInstagramSquare size={30} color="#FFFF"  className="border-none"/> */}
              </Link>
              <Link
                href="https://www.facebook.com/p/Pixelatech-100067015986574/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/30 text-[white] transition-colors group"
              >
                <FaFacebook size={26} color="#FFFF" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Follow us for the latest updates on AI-powered lead generation and
              sales automation.
            </p>
            </div>
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
