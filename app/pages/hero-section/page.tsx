"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CheckCircle2 } from "lucide-react";
import { ChevronDown } from "lucide-react";
import {
  Mail,
  Phone,
  User,
  Building,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import "../contact/contact.css";

// import "./style.css";
const TextEffect = dynamic(
  () => import("../../../component/text-effect/page"),
  {
    ssr: false,
  }
);

const faqQuestions = [
  {
    question:
      "Will SEO or Google Ads affect our website’s ranking or reputation?",
    answer:
      "Not at all. At Pixelatech, we follow Google’s best practices for SEO and run optimized PPC campaigns that improve visibility without harming your site’s reputation. Our team monitors performance closely to ensure safe, effective growth.",
  },
  {
    question: "What if our business has a very niche audience?",
    answer:
      "No problem. We specialize in targeted strategies for both broad and niche markets. Whether it’s SEO, social media, or PPC ads, we tailor campaigns to reach the exact audience you want, even in very specific industries.",
  },
  {
    question: "How quickly can we expect results from your services?",
    answer:
      "Results depend on the service. With Google Ads and PPC, you can see leads and traffic almost immediately. SEO and social media typically take a few weeks to build momentum, but they deliver long-term, sustainable growth.",
  },
  {
    question: "Which platforms and tools do you work with?",
    answer:
      "We work with all major platforms, including Google Ads, Facebook, Instagram, TikTok, and LinkedIn. For websites, we use modern tools and frameworks to build fast, responsive sites that integrate smoothly with your existing systems.",
  },
  {
    question:
      "How is this different from hiring a freelancer or managing campaigns in-house?",
    answer:
      "Pixelatech gives you a full team of experts in web development, SEO, social media, and paid ads—without the high cost of hiring in-house. We bring proven strategies, continuous optimization, and measurable results you can rely on.",
  },
  {
    question: "Do you offer any guarantee or refund policy?",
    answer:
      "Yes, we believe in results. If you don’t see measurable improvements within the agreed timeline, we’ll continue working at no extra cost until we hit the targets. Your success is our top priority.",
  },
  {
    question: "Do you work with all industries?",
    answer:
      "Yes, we partner with a wide range of industries, including real estate, healthcare, e-commerce, SaaS, and professional services. During our consultation, we make sure we’re the right fit for your business goals.",
  },
  {
    question: "How do you ensure quality and brand consistency?",
    answer:
      "Every website, campaign, and ad is customized to match your brand’s voice and identity. You always have final approval on content and creatives, and we continuously optimize to maintain consistency and quality.",
  },
  {
    question: "What makes Pixelatech’s approach different?",
    answer:
      "Unlike traditional agencies, we combine web development, SEO, social media, Google Ads, and lead generation into one integrated strategy. This gives your business better reach, higher ROI, and faster growth across all channels.",
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;

  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const index = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setSubmitStatus("idle");

  //   try {
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000));

  //     // Here you would typically send the data to your backend
  //     console.log("Form submitted:", formData1);

  //     setSubmitStatus("success");
  //     setFormData1({
  //       name: "",
  //       email: "",
  //       phone: "",

  //       message: "",
  //     });
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //     setSubmitStatus("error");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  // New Code Added ===================================================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "loading" | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
    }
  };

  // New Code Added ===================================================

  return (
    <div className="mainContainer-section">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-main services">
          <div className="hero-sec">
            <div className="hero-content">
              <div className="flex flex-col justify-center items-center">
                <div className="my-[10px] ">
                  <h3 className=" text-[42px] hero-heading hero-title  font-bold leading-[1.1] gradient-text ">
                    Build a Strong Online Presence with Pixelatech
                  </h3>
                </div>
                <div className="my-[10px] ">
                  <h3 className="hero-heading text-[32px] font-bold leading-[1.1] gradient-text ">
                    Ready to take your business to the next level?
                  </h3>
                </div>
                <div className="my-[10px] text-left">
                  <h3 className=" text-[32px] text-left hero-title font-bold leading-[1.1] gradient-text ">
                    We specialize in:
                  </h3>
                </div>
                <div className="my-[10px] ">
                  <ul className=" text-[20px] text-left">
                    <li>
                      <b className="pe-[6px]">Google Ads & PPC </b>
                      <span className="ps-[px] text-[20px]">-</span> Drive
                      instant traffic and sales with smart, targeted campaigns.
                    </li>
                    <li>
                      <b className="pe-[6px]">Web Development </b>
                      <span className="ps-[px] text-[20px]">-</span> Modern,
                      responsive websites that bring your brand to life.
                    </li>
                    <li>
                      <b className="pe-[6px]">SEO </b>
                      <span className="ps-[px] text-[20px]">-</span> Get found
                      on Google and stay ahead of your competitors.
                    </li>
                    <li>
                      <b className="pe-[6px]">Social Media Marketing </b>
                      <span className="ps-[px] text-[20px]">-</span> Grow your
                      audience and build lasting connections.
                    </li>
                    <li>
                      <b className="pe-[6px]">Lead Generation </b>
                      <span className="ps-[px] text-[20px]">-</span> Turn clicks
                      into loyal customers.
                    </li>
                  </ul>
                  {/* <h3 className="hero-heading text-[62px] font-bold leading-[1.1] hero-title gradient-text ">
                   Take Your Brand To New Heights?
                  </h3> */}
                </div>

                <div className="my-[10px] ">
                  <p className="px-[5px] text-[20px] leading-[1.4] hero-subtitle"></p>
                </div>
                <div className="my-[10px] ">
                  <button className="hero-cta-btn">
                    <a
                      href="https://calendly.com/abbdulsamadhere/30min?back=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline text-[black]"
                    >
                      {" "}
                      💡 Book a free 30 minutes consultation
                    </a>
                  </button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-800 my-[20px] ">
                  <svg
                    className="w-8 h-8 text-[#91ff91] border-2 rounded-[15px] mx-[10px] border-green-600 gap-6 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                  <span className="ps-4">
                    See real growth or get your money back.
                  </span>
                </div>
                <div className="w-full px-4 md:px-8 mt-4 text-center">
                  <TextEffect />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // Hero Section End */}

      {/* Services  */}
      <section className="section1-container ">
        <section className="main-container  services" id="services">
          <div className="min-h-screen bg-black text-white flex flex-col">
            <div className="sec1-h4 mt-[10px] mb-[20px] mx-auto w-[max-content]">
              <h4 className="gradient-text">What We Do</h4>
            </div>
            <main className="">
              <div className="main-container-grid  mx-auto gap-[20px] p-8 md:p-12">
                {/* One */}
                <div className="px-[20px] f-email content-box">
                  <h2 className="text-2xl md:text-3xl text-[28px] text-center  font-bold my-[20px]">
                    Google Ads (PPC Management)
                  </h2>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    Welcome to Pixelatech, your one-stop destination for
                    powerful Google Ads and PPC management. As a trusted digital
                    marketing partner, we specialize in creating high-performing
                    ad campaigns that maximize ROI and bring measurable results.
                    Whether you need targeted PPC campaigns, a reliable partner
                    for ongoing ad optimization, or smart strategies to lower
                    costs and increase conversions, Pixelatech delivers
                    expertise and results at every stage.
                  </p>

                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                      Campaigns & Optimization
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold my-[20px]">
                      PPC Management Company That Delivers
                    </h3>
                    <ul className="space-y-4 my-[12px]">
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>Complete PPC Management Services</b>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>Google Ads Campaign Setup & Optimization</b>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>Keyword Research & Bid Management</b>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>
                            Landing Page Optimization for Higher Conversions
                          </b>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>Performance Tracking & Data-Driven Results</b>
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
                </div>
                {/* Second */}
                <div className="=px-[20px] f-email content-box ">
                  <h1 className="text-2xl md:text-3xl  text-center text-[28px] font-bold my-[20px]">
                    Lead Generation
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    Pixelatech is a trusted Houston lead generation company
                    specializing in connecting businesses with qualified
                    prospects through smart digital strategies. Our expert team
                    designs high-converting campaigns that deliver real leads
                    for industries like real estate, property management, and
                    more. With data-driven targeting and proven methods, we help
                    your business grow by consistently bringing the right
                    audience to your sales funnel.
                  </p>
                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl text-[24px] font-bold my-[20px]">
                      Our Lead Generation Services
                    </h2>
                  </div>
                  <ul className="space-y-4 my-[12px]">
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Full-service Houston lead generation with ongoing
                          optimization
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Targeted campaigns for real estate and property
                          management
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Strategic audience research and funnel building by
                          Houston experts
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Transparent reporting from a trusted Houston lead
                          generation partner
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Complete digital marketing solutions to drive leads
                          and sales
                        </strong>
                      </p>
                    </li>
                  </ul>
                </div>
                {/* Third */}
                <div className="px-[20px] f-email content-box">
                  <h1 className="text-2xl md:text-4xl text-center text-[28px] font-bold my-[20px]">
                    Social Media Marketing
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    At Pixelatech, we specialize in helping businesses grow with
                    powerful Meta Ads campaigns across Facebook and Instagram.
                    Whether your goal is to increase sales, drive website
                    traffic, or boost brand awareness, our expert team designs
                    and manages ads that deliver real results. From precise
                    targeting to creative ad design and ongoing optimization, we
                    make sure every campaign maximizes ROI.
                  </p>
                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                      Social Media Marketing Services Ads
                    </h2>
                    <ul className="space-y-4 my-[12px]">
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Facebook Ads Services</strong>
                          <span>
                            – Run high-converting campaigns tailored to your
                            audience.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Instagram Ads Services</strong>
                          <span>
                            – Boost engagement and reach with visually
                            compelling ads.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Audience Targeting & Retargeting</strong>
                          <span>
                            – Reach the right people at the right time.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Creative Ad Design & Copywriting</strong>
                          <span>
                            – Eye-catching visuals and persuasive messaging.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Performance Tracking & Optimization</strong>
                          <span>
                            – Data-driven improvements for better ROI.
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
                </div>
                {/* four */}
                <div className="=px-[20px] f-email content-box">
                  <h1 className="text-2xl md:text-3xl  text-center text-[28px] font-bold my-[20px]">
                    SEO Optimization
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    Pixelatech is a trusted Houston SEO company specializing in
                    helping businesses rank higher on search engines and attract
                    the right audience. Our expert team uses proven strategies
                    to improve visibility, increase organic traffic, and
                    generate qualified leads. From local SEO for small
                    businesses to advanced optimization for competitive
                    industries, we deliver results that drive long-term growth.
                  </p>
                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl text-[24px] font-bold my-[20px]">
                      Our SEO Services
                    </h2>
                  </div>
                  <ul className="space-y-4 my-[12px]">
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Full-service Houston SEO with ongoing optimization
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Local SEO strategies for real estate, property
                          management, and more
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          In-depth keyword research and content optimization by
                          SEO experts
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Transparent reporting from a trusted Houston SEO
                          partner
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Complete SEO solutions to boost traffic, leads, and
                          sales
                        </strong>
                      </p>
                    </li>
                  </ul>
                </div>
                {/* Five */}

                <div className="px-[20px] f-email content-box">
                  <h1 className="text-2xl md:text-3xl text-center text-[28px] font-bold my-[20px]">
                    Web Development
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    Welcome to Pixelatech, your one-stop destination for modern
                    and professional web development services. As a trusted
                    digital solutions company, we specialize in building
                    responsive, user-friendly, and performance-driven websites
                    that help businesses grow online. Whether you need a custom
                    website, a reliable partner for e-commerce development, or a
                    web app to streamline your operations, Pixelatech delivers
                    expertise and results at every stage.
                  </p>

                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                      Web Development Services
                    </h2>

                    <ul className="space-y-4 my-[12px]">
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Responsive Website Design</strong>
                          <span>
                            – Mobile-friendly websites that look great on any
                            device.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>E-Commerce Website Development</strong>
                          <span>
                            – Secure, scalable, and sales-focused online stores.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>
                            SEO Optimization & Performance Enhancement
                          </strong>
                          <span>
                            – Websites built to rank higher and load faster.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Web App Development in Houston, Texas</strong>
                          <span>
                            – Tailored web applications to fit your business
                            needs.
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
                </div>
              </div>
            </main>
          </div>
        </section>
        <div className="section1-container sec3-container services">
          <div className="sec1-h4 mt-[0px]">
            <h4 className="gradient-text ">Meet The Founder</h4>
          </div>
          <div className="section3-box-inner">
            <div className="text-[left]">
              <p className="m-[0] text-[left]">
                We take the time to truly understand your business and your
                ideal customers. Through smart strategies like Google Ads, SEO,
                social media, and web solutions, we craft messaging that speaks
                directly to their needs and highlights how your brand offers the
                right solution. Every campaign is designed to deliver results
                efficiently and effectively, helping your business grow with
                confidence.
              </p>
            </div>

            <div className="flex items-center gap-[16px] flex-wrap justify-center w-full">
              <div className="relative w-[95px] h-[95px] overflow-hidden rounded-full">
                <Image
                  src="/assets/i1.png"
                  alt="Abdul Samad - CEO"
                  width={95}
                  height={95}
                  className="object-cover rounded-full"
                />
              </div>
              <h6 className="text-gray-400 text-[20px]">
                <span className="text-white text-lg font-semibold">
                  Abdul Samad
                </span>
                <br />
                <span className="text-sm">CEO, Pixelatech</span>
              </h6>
              <a
                href="https://www.linkedin.com/company/Pixelatechco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: "100%", height: "100%" }}
                >
                  <path d="M20.447 20.452h-3.554V14.89c0-1.327-.026-3.036-1.85-3.036-1.85 0-2.132 1.444-2.132 2.936v5.662H9.356V9h3.414v1.561h.048c.476-.9 1.637-1.848 3.368-1.848 3.598 0 4.263 2.368 4.263 5.451v6.288zM5.337 7.433a2.06 2.06 0 01-2.06-2.06 2.06 2.06 0 012.06-2.06 2.06 2.06 0 012.06 2.06 2.06 2.06 0 01-2.06 2.06zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.273V1.727C24 .774 23.206 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center items-center gap-[25px] mt-12">
            <div className="flex items-center gap-[10px] px-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <svg
                className="w-[35px] h-[35px] text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-white font-semibold text-[18px] underline decoration-solid">
                9 Years in Marketing
              </span>
            </div>

            <div className="flex items-center gap-[10px] px-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <svg
                className="w-[35px] h-[35px] text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-white underline decoration-solid font-semibold">
                90+ Projects Completed
              </span>
            </div>
          </div>
        </div>
        <section className="section3-container3  services">
          <div className="sec1-h4 my-[20px] w-[max-content] mx-[auto]">
            <h4 className="gradient-text">Comparison</h4>
          </div>

          <div className="text-center mt-[30px] mb-[50px]">
            <h2 className="text-3xl md:text-4xl font-bold pb-[10px]">
              Why Choose Pixelatech Over Traditional Methods?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our custom Marketing solutions outperform traditional
              technology and consulting approaches
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="sec3-box-inner3">
              {/* The Pixelatech Method */}
              <div className="sec3-box-outer3">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-[5px]">
                    The Pixelatech Method
                  </h3>
                  <p className="text-gray-300">
                    Smart Digital Solutions Designed for Your Business
                  </p>
                </div>
                <div className="space-y-6">
                  {/* <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Tailored Strategies
                        </h4>
                        <p className="text-gray-300">
                          We take the time to understand your audience and craft
                          campaigns that connect—whether it’s through websites,
                          ads, or social media—so your brand makes a real
                          impact.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Web Development That Works
                        </h4>
                        <p className="text-gray-300">
                          Our websites are fast, responsive, and designed to
                          convert. From business sites to e-commerce, we build
                          platforms that support your growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Google Ads & PPC Management
                        </h4>
                        <p className="text-gray-300">
                          We run targeted ad campaigns that deliver measurable
                          results—driving traffic, leads, and sales for your
                          business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          SEO for Visibility
                        </h4>
                        <p className="text-gray-300">
                          We optimize your site to rank higher on Google,
                          bringing more traffic and helping you stay ahead of
                          your competition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Social Media Marketing
                        </h4>
                        <p className="text-gray-300">
                          From Facebook to Instagram, we create engaging
                          campaigns that grow your audience and build stronger
                          connections.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Lead Generation That Converts
                        </h4>
                        <p className="text-gray-300">
                          Our strategies are designed to turn visitors into real
                          customers, filling your pipeline with qualified leads.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Clear Reporting
                        </h4>
                        <p className="text-gray-300">
                          We keep things transparent with easy-to-understand
                          reports so you always know how your campaigns are
                          performing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Dedicated Support
                        </h4>
                        <p className="text-gray-300">
                          Our team is here for you every step of the way—helping
                          you scale with confidence.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-400/30 transition hover:scale-105 hover:shadow-lg cursor-pointer">
                  <a
                    href="https://calendly.com/abbdulsamadhere/30min?back=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-[white] cursor-[pointer]   "
                  >
                    <div className="text-center py-[10px]">
                      <div className="text-3xl font-bold text-green-400 mb-[5px]">
                        Unlock smarter operations within 90 days
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Traditional Methods */}
              <div className="sec3-box-outer3">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-[5px]">
                    Traditional Marketing & Tech Agencies
                  </h3>
                  <p className="text-gray-300">
                    Outdated Approaches That Hold Businesses Back
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Generic Strategies
                        </h4>
                        <p className="text-gray-300">
                          Rely on one-size-fits-all campaigns that fail to
                          connect with your unique audience—resulting in low
                          impact and wasted budgets.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Slow & Manual Workflows
                        </h4>
                        <p className="text-gray-300">
                          Depend on outdated methods that take too much time and
                          often lead to inefficiency or missed opportunities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Disconnected Marketing Channels
                        </h4>
                        <p className="text-gray-300">
                          Operate with separate tools and platforms, making it
                          hard to create consistent messaging or track
                          performance across channels.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Basic Reporting Only
                        </h4>
                        <p className="text-gray-300">
                          Provide surface-level numbers without clear
                          insights—leaving you guessing about what’s really
                          driving results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          No Guarantee of Success
                        </h4>
                        <p className="text-gray-300">
                          Charge fixed fees with no promise of measurable
                          growth, putting all the risk on you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Limited Support
                        </h4>
                        <p className="text-gray-300">
                          Offer help only during business hours, leaving you
                          without answers when you need them most.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-red-900/30 to-gray-900/30 rounded-xl border border-red-400/30">
                  <div className="text-center py-[10px]">
                    <div className="text-3xl font-bold text-red-400 mb-[5px]">
                      Higher Overheads
                    </div>
                    <p className="text-gray-300">
                      With no guarantee of improvement
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom CTA Section */}
            <div className="text-center my-[20px] md:w-auto  mx-auto">
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-[20px] border border-blue-400/30">
                <h3 className="text-2xl font-bold my-[10px]">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-gray-300 my-[10px] max-w-2xl mx-auto">
                  Join businesses that trust Pixelatech for web development,
                  SEO, social media, Google Ads, and lead generation—and see
                  real growth in traffic, leads, and sales.
                </p>
                <button className="cta-button my-[20px]">
                  <a
                    href="https://calendly.com/abbdulsamadhere/30min?back=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-[black]"
                  >
                    {" "}
                    Get Started Today
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Services End  */}

      {/* FAQ   */}
      <section id="faq" className="section4-container4 ">
        {/* Enhanced Background Effects */}

        <div className="section4-inner faq">
          <div className="sec1-h4 mt-[30px] mb-[15px]">
            <h4 className="gradient-text ">Frequently Asked Questions</h4>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-[10px]">
              Everything You Need to Know About Pixelatech
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our web
              development, SEO, social media,Google Ads,
              <br /> and lead generation services—how we work, the results you
              can expect, and our commitment to your success.
            </p>
          </div>

          <div className="section4-box4">
            {faqQuestions.map((item, index) => (
              <div key={index} className="section4-box-tab">
                <button onClick={() => toggle(index)} className="w-full">
                  <span className="text-left">{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="text-gray-300  leading-relaxed">
                      <p className="px-[20px] pb-[10px]">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ End  */}

      {/* Contact   */}
      <section id="contact" className="contact-form-section">
        {/* Enhanced Background Effects */}

        <div className="max-w-4xl mx-auto px-4 py-20 contact">
          <div className="text-center mb-12">
            <div className="sec1-h1 z-1 sec1-h4 mb-[30px] inline-block mb-6">
              <h4 className="gradient-text ">Get In Touch</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold my-[10px]">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 text-left max-w-[660px] mt-[10px] mb-[40px] mx-auto">
              Book a free strategy call or send us a message. Our team will
              review your current website and marketing efforts, then show you
              exactly how to get more traffic, higher rankings, stronger social
              engagement, and a steady flow of qualified leads.
            </p>
          </div>

          <section className="section-contact  items-start">
            {/* Contact Information */}
            <div className="gap-[10px] mt-[30px] flex flex-row-reverse flex-wrap justify-center items-center w-full ">
              <div className="content-box py-[50px] px-[20px] ">
                <h3 className="text-2xl font-bold py-[10px] mb-6">
                  Let is Start a Conversation
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 my-[20px]">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full gap-[16px] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-400" />
                      <div className="flex items-center justify-start gap-[10px]">
                        <p className="font-semibold">Call Us</p>
                        <a
                          href="tel:+1 832-304-5611"
                          className="no-underline text-blue-400 text-[white] hover:text-blue-300 transition-colors"
                        >
                          +1 832-304-5611
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 my-[20px]">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full gap-[16px] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                      <div className="flex items-center justify-start gap-[10px]">
                        <p className="font-semibold">Email Us</p>
                        <a
                          href="mailto:info@Pixelatech.co"
                          className="no-underline text-blue-400 hover:text-blue-300 transition-colors text-[white] line-none"
                        >
                          info@Pixelatech.co
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="content-box ">
                <h3 className="text-xl font-bold py-[10px]">
                  What You will Get:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center flex-wrap sm:px-[7px] py-[10px]  gap-[6px]">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Free 25-minute strategy session</span>
                  </li>
                  <li className="flex items-center flex-wrap sm:px-[7px] py-[10px]  gap-[6px]">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Custom lead generation plan</span>
                  </li>
                  <li className="flex items-center flex-wrap sm:px-[7px] py-[10px]  gap-[6px]">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>ROI projection for your business</span>
                  </li>
                  <li className="flex items-center flex-wrap sm:px-[7px] py-[10px] gap-[6px]">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>No commitment required</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full p-[20px] content-box relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="form-group py-[15px]">
                    <label htmlFor="name" className="form-label">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input "
                      // className={`form-input ${errors.name ? "error" : ""}`}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="form-group py-[15px]">
                    <label htmlFor="email" className="form-label">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      className="form-input"
                      required
                      // className={`form-input ${errors.email ? "error" : ""}`}
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="form-group py-[15px]">
                    <label htmlFor="phone" className="form-label">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      // className={`form-input ${errors.phone ? "error" : ""}`}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="form-group py-[15px]">
                    <label htmlFor="message" className="form-label">
                      <MessageSquare className="w-4 h-4" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business and lead generation goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      required
                      rows={4}
                      // className={`form-input resize-none ${errors.message ? "error" : ""}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="form-submit-btn w-[min-content]  disabled:opacity-50"

                    // className={`form-submit-btn ${isSubmitting ? "submitting" : ""}`}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  {/* Success/Error Messages */}
                  {status === "success" && (
                    <p className="text-green-600 text-center font-semibold my-[10px]">
                      ✅ Email sent successfully! We will get back to you within
                      24 hours.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-center font-semibold my-[10px]">
                      ❌ Something went wrong. Try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <div className="text-center mt-[20px]">
            <p className="text-gray-400 mb-[7px]">
              Trusted by 500+ B2B Companies Worldwide
            </p>
            <div className="flex justify-center items-center gap-[16px] flex-wrap opacity-60">
              <div className="flex items-center ">
                <div className="text-2xl font-bold text-blue-400">24hr</div>
                <div className="text-sm">ResponseTime</div>
              </div>
              <div className="w-px h-8 bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center ">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-8 bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center ">
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact End  */}
    </div>
  );
};

export default index;
