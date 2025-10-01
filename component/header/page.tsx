"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sections = ["home", "services", "faq", "blog", "about", "contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isServicesOpen, setIsServicesOpen] = useState(false); // for mobile dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {/* Background Effects */}
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
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="sparkle"></div>
        ))}
      </div>

      {/* Navbar */}
      <nav className={`sticky-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link href="/pages/home">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={280}
                height={65}
                className="rounded-[15px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="nav-links flex gap-6">
              <li>
                <Link href="/pages/home" className="text-[white]">
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="dropdown">
                <button className="dropdown-btn">
                  Services <ChevronDown size={18} className="icon" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/pages/meta-ads">Meta Ads</Link>
                  </li>
                  <li>
                    <Link href="/pages/google-ads">Google ads</Link>
                  </li>
                  <li>
                    <Link href="/pages/lead-generation">Lead Generation</Link>
                  </li>
                  <li>
                    <Link href="/pages/web-development">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/pages/seo">SEO Optimization</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/pages/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[white]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[white]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[white]"
                >
                  Contact
                </Link>
              </li>
            </ul>
              <a
                href="https://calendly.com/abbdulsamadhere/30min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[white] cursor-pointer"
              >
            <button className="cta-button text-[white] ">
               Lets Talk
            </button>
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links flex flex-col gap-4">
            <li>
              <Link href="/pages/home" className="text-[white]">
                Home
              </Link>
            </li>

            {/* Mobile Services Dropdown */}
            <li>
              <button
                className="mobile-dropdown-btn"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown size={16} />
              </button>
              <ul className={`mobile-dropdown ${isServicesOpen ? "open" : ""}`}>
                <li>
                  <Link href="/pages/meta-ads">Meta Ads</Link>
                </li>
                <li>
                  <Link href="/pages/google-ads">Google ads</Link>
                </li>
                <li>
                  <Link href="/pages/lead-generation">Lead Generation</Link>
                </li>
                <li>
                  <Link href="/pages/web-development">Web Development</Link>
                </li>
                <li>
                  <Link href="/pages/seo">SEO Optimization</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/pages/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[white]"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/pages/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[white]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pages/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[white]"
              >
                Contact
              </Link>
            </li>
          </ul>
            <a
              href="https://calendly.com/abbdulsamadhere/30min?back=1"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[white] cursor-pointer"
            >
          <button className="mobile-cta-button mt-4">
              Lets Talk
          </button>
            </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
