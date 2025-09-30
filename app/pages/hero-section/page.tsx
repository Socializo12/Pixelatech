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
    question: "Will this affect our domain reputation or put us in spam?",
    answer:
      "We use robust email authentication protocols like SPF, DKIM, and DMARC, along with advanced warm-up techniques and strict best practices to protect your domain's reputation. Our team gradually scales outreach and monitors delivery to keep your main domain safe. Clients commonly experience better deliverability rates with our approach.",
  },
  {
    question:
      "What if our ideal customer profile or target market is very specialized?",
    answer:
      "We excel in working with niche markets. Our AI solutions are designed to hyper-target specific industries, roles, and company sizes. By combining data science, audience modeling, and digital channel insights, we help identify and engage prospects who closely match your goals—even in very specialized markets.",
  },
  {
    question:
      "How quickly can we expect results, such as booked meetings or qualified leads?",
    answer:
      "Most organizations start seeing meaningful activity within one to two weeks of launching their campaign. Full optimization typically takes about 30 days, after which you can expect a steady flow of qualified appointments monthly, depending on the size of your market and the strength of your offer.",
  },
  {
    question: "Which platforms and tools does your system work with?",
    answer:
      "Our solutions integrate fluidly with major CRM systems like HubSpot, Salesforce, and Monday.com. For outreach and marketing, we combine our AI-powered platform with tools for Google Ads, Meta Ads (including Facebook and Instagram), and leading social media scheduling platforms. Our approach enhances and adapts to your existing marketing stack.",
  },
  {
    question:
      "How is this different from hiring SDRs or purchasing lead lists?",
    answer:
      "Our AI solutions work 24/7, need no training, and maintain consistent quality. We focus on delivering qualified appointments—prospects who are already engaged and interested, not just raw leads. This approach reduces overhead versus hiring full teams and ensures every contact is nurtured and ready for a sales conversation.",
  },
  {
    question: "Do you offer a guarantee or a refund policy?",
    answer:
      "We provide a 60-day performance guarantee: if you don’t receive at least 10 qualified appointments within your first 60 days, we’ll refund your setup fee and keep working at no additional charge until that target is met. Our performance-driven approach has led to a refund request rate of less than two percent.",
  },
  {
    question: "Do you work with all industries?",
    answer:
      "We partner with most B2B industries and have particular strength in SaaS, professional services, advanced manufacturing, healthcare technology, and financial services. We do not serve multi-level marketing, cryptocurrency, or compliance-restricted industries. We evaluate fit during an initial consultation.",
  },
  {
    question:
      "How do you maintain quality and brand compliance in messaging and ads?",
    answer:
      "Every campaign message and ad creative is reviewed by our team of experts. We build custom strategies reflecting your brand voice and value proposition, ensuring all communication meets your compliance requirements. You maintain final approval on all messaging, and our AI continually adapts to your preferred tone across channels.",
  },
  {
    question:
      "What makes your AI-driven SMM, Google Ads, and Meta Ads different?",
    answer:
      "Our primary focus is custom AI solutions, but we blend these with social media and paid ad strategies for superior reach and efficiency. We use AI algorithms to optimize targeting, content, and bidding, delivering better ROI and improved conversions across every channel—from organic social engagement to paid campaigns on Google and Meta platforms.",
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
    message: ""
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
          message: ""
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
                  <h3 className=" text-[32px] font-bold leading-[1.1] gradient-text ">
                   Creating
                  </h3>
                </div>
                <div className="my-[10px] ">
                  <h3 className="hero-heading text-[62px] font-bold leading-[1.1] hero-title gradient-text ">
                  Powerful Online Presence
                  </h3>
                </div>
                 <div className="my-[10px] ">
                  <h3 className=" text-[32px] font-bold leading-[1.1] gradient-text ">
                    That Are Prepared To
                  </h3>
                </div>
                <div className="my-[10px] ">
                  <h3 className="hero-heading text-[62px] font-bold leading-[1.1] hero-title gradient-text ">
                   Take Your Brand To New Heights?
                  </h3>
                </div>
               
                <div className="my-[10px] ">
                  <p className="px-[5px] text-[20px] leading-[1.4] hero-subtitle">
                    
                  </p>
                </div>
                <div className="my-[10px] ">
                  <button className="hero-cta-btn">
                    Fill Out The Form & Get 70% Off
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
                    See Measurable Growth or Your Money Back
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
              <div className="main-container-grid mx-auto gap-[20px] p-8 md:p-12">
                {/* One */}
                <div className="px-[20px] f-email content-box">
                  <h2 className="text-2xl md:text-3xl text-[28px] text-center  font-bold my-[20px]">
                    Agentic AI
                  </h2>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    Welcome to Socializo, your one-stop destination for
                    cutting-edge AI agent development and intelligent
                    automation. As a leading AI agentic solutions company, we
                    specialize in crafting custom AI agents that transform how
                    businesses interact with data, users, and workflows. Whether
                    you need tailored AI agent development services, a trusted
                    partner for scalable AI solutions, or innovative automation
                    to streamline your operations, Socializo delivers expertise
                    and results at every stage.
                  </p>

                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                      Agents & Automations
                    </h2>
                    <ul className="space-y-4 my-[12px]">
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>AI Agent Development Company That Delivers</b>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>Agentic AI Development Services</b>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>RAG Agent Development & LLM Integration</b>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <b>No-Code AI Automation Services</b>
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
                </div>
                {/* Second */}
                <div className="px-[20px] f-email content-box">
                  <h1 className="text-2xl md:text-3xl text-center text-[28px] font-bold my-[20px]">
                    Web Development
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    Welcome to Socializo, your one-stop destination for
                    cutting-edge AI agent development and intelligent
                    automation. As a leading AI agentic solutions company, we
                    specialize in crafting custom AI agents that transform how
                    businesses interact with data, users, and workflows. Whether
                    you need tailored AI agent development services, a trusted
                    partner for scalable AI solutions, or innovative automation
                    to streamline your operations, Socializo delivers expertise
                    and results at every stage.
                  </p>

                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                      Web Development Services
                    </h2>

                    <ul className="space-y-4 my-[12px]">
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Responsive website design</strong>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>E-commerce website development</strong>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>
                            SEO optimization and performance enhancement
                          </strong>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Web app development in Houston, Texas</strong>
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
                </div>
                {/* Third */}
                <div className="px-[20px] f-email content-box">
                  <h1 className="text-2xl md:text-4xl text-center text-[28px] font-bold my-[20px]">
                    Social Media Marketing
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    At Socializo, we help brands grow with targeted advertising
                    across Facebook, Instagram, TikTok, Snapchat, and Meta
                    platforms. Whether you need a Facebook ads company to drive
                    conversions, an Instagram ads agency to boost engagement, a
                    TikTok ads company for viral reach, or a Snapchat ads agency
                    for creative audience targeting, our team delivers strategic
                    campaigns and measurable results tailored to your goals.
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
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Instagram Ads Services</strong>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Meta Ads Services</strong>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>TikTok Ads Services</strong>
                        </p>
                      </li>
                      <li className="flex items-start my-[10px] gap-[8px]">
                        <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                        <p className="text-lg text-zinc-300">
                          <strong>Snapchat Ads Services</strong>
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
                    Google Ads
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-400 mb-[12px] text-[left]">
                    Socializo is a top Houston Google Ads agency specializing in
                    expert PPC management and campaign optimization for real
                    estate, property management, and more. Our certified
                    consultants create high-ROI, data-driven Google Ads
                    strategies that connect your business with the right
                    audience in Houston, Texas, ensuring maximum visibility and
                    growth for your brand.
                  </p>
                  <div className="text-left w-full px-4 md:px-0 my-[10px]">
                    <h2 className="text-2xl md:text-3xl text-[24px] font-bold my-[20px]">
                      Our Google Ads Services
                    </h2>
                  </div>
                  <ul className="space-y-4 my-[12px]">
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          {" "}
                          Full-service Houston Google Ads management with
                          continuous optimization
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Targeted Google Ads marketing for real estate and
                          property management
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Strategic keyword research and bid management by
                          Houston Google Ads experts
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Transparent reporting from a trusted Houston Google
                          Ads agency
                        </strong>
                      </p>
                    </li>
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                      <p className="text-lg text-zinc-300">
                        <strong>
                          Complete PPC marketing services in Houston to drive
                          leads and sales
                        </strong>
                      </p>
                    </li>
                  </ul>
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
            <div className="tex-left md:text-center">
              <p className="m-[0]">
                We take the time to deeply understand your ideal customers and
                their unique challenges. Using advanced automation, we craft
                tailored messaging that speaks directly to their needs and
                clearly shows how your company provides the perfect solution,
                all delivered efficiently and intelligently through our
                AI-driven systems.
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
                <span className="text-sm">CEO, Socializo</span>
              </h6>
              <a
                href="https://www.linkedin.com/company/socializoco/"
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
                9 Years in AI
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
              Why Choose Socializo Over Traditional Methods?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our custom AI solutions outperform traditional technology
              and consulting approaches
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="sec3-box-inner3">
              {/* The Socializo Method */}
              <div className="sec3-box-outer3">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-[5px]">
                    The Socializo Method
                  </h3>
                  <p className="text-gray-300">
                    Custom AI Solutions Designed for Your Business
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Tailored Communication
                        </h4>
                        <p className="text-gray-300">
                          Our AI custom solutions analyze your unique audience
                          and craft messages that truly connect, making every
                          interaction more meaningful and relevant.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Smart Workflow Automation
                        </h4>
                        <p className="text-gray-300">
                          We build AI systems that organize, prioritize, and
                          automate your daily business tasks—helping you save
                          time and reduce manual work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Multi-Platform Integration
                        </h4>
                        <p className="text-gray-300">
                          Our custom AI seamlessly connects with your favorite
                          tools—email, CRM, chat, and more—so your business runs
                          smoothly across every channel.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Real-Time Data & Insights
                        </h4>
                        <p className="text-gray-300">
                          Get instant access to clear, actionable insights. Our
                          dashboards show you exactly how your AI solutions are
                          performing, so you can make smarter decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Guaranteed Results
                        </h4>
                        <p className="text-gray-300">
                          We stand by our custom AI solutions. If you don’t see
                          real improvements in your business within 60 days,
                          we’ll give you your money back.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          24/7 Intelligent Support
                        </h4>
                        <p className="text-gray-300">
                          Your AI works around the clock—handling tasks,
                          answering questions, and supporting your team—so you
                          can focus on growing your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-400/30">
                  <div className="text-center py-[10px]">
                    <div className="text-3xl font-bold text-green-400 mb-[5px]">
                      Unlock smarter operations within 90 days
                    </div>
                  </div>
                </div>
              </div>
              {/* Traditional Methods */}
              <div className="sec3-box-outer3">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-[5px]">
                    Traditional Tech & Consulting Agencies
                  </h3>
                  <p className="text-gray-300">Outdated Manual Approaches</p>
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
                          One-Size-Fits-All Solutions
                        </h4>
                        <p className="text-gray-300">
                          Rely on generic software or consulting templates that
                          don’t address your business’s unique needs, leading to
                          limited impact and missed opportunities.
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
                          Manual Task Management
                        </h4>
                        <p className="text-gray-300">
                          Depend on human effort for repetitive tasks,
                          increasing the risk of errors, inefficiency, and
                          wasted resources.
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
                          Siloed Systems
                        </h4>
                        <p className="text-gray-300">
                          Operate with disconnected tools and platforms, making
                          it hard to streamline workflows or share data across
                          your organization.
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
                          Surface-Level Reporting
                        </h4>
                        <p className="text-gray-300">
                          Offer only basic reports and metrics, without deep
                          analysis or actionable insights to drive smarter
                          business decisions.
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
                          No Results Assurance
                        </h4>
                        <p className="text-gray-300">
                          Charge fixed fees with no guarantee of real business
                          improvements, leaving you to bear the risk of
                          underwhelming outcomes.
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
                          Limited Availability
                        </h4>
                        <p className="text-gray-300">
                          Support and services are restricted to business hours,
                          missing chances to solve problems or respond to needs
                          in real time.
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
                  Join hundreds of companies who have already made the switch to
                  AI-powered lead generation and are seeing 300% better results.
                </p>
                <button className="cta-button my-[20px]">
                  Get Started Today
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

        <div className="section4-inner faq">
          <div className="sec1-h4 mt-[30px] mb-[15px]">
            <h4 className="gradient-text ">Frequently Asked Questions</h4>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-[10px]">
              Everything You Need to Know About Our AI Lead Generation System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our process,
              results, and guarantees
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

      {/* Blog   */}
      <section className="blog-sectionContainer">
        <div className="sec1-h4 z-1 my-[30px] mx-auto w-[min-content]">
          <h4>Blog</h4>
        </div>
        <div className="card-container">
          {/* left Side */}
          <div className="left-blogCard flex items-center w-full">
            {/* one */}
            <div className="">
              <Link
                href="/pages/ai-dental-realstate"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[white]"
              >
                <div className="sec1s-box1s row-card">
                  <div className="mb-[20px] relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src="/assets/roboard.png"
                      alt="ai-blog"
                      fill
                      className="absolute inset-0 w-full h-full object-fill"
                    />
                  </div>
                  <div className="blog-card-text my-[30px]">
                    <h3 className="text-[20px] font-bold">
                      How AI Solutions Are <br />
                      Transforming Dental Clinics and Real Estate Businesses
                    </h3>
                  </div>
                  <div className=" w-full flex items-center justify-end my-[10px]">
                    <p className="text-[right]">8-Aug-2025</p>
                  </div>
                </div>
              </Link>
            </div>
            {/* two */}
            <div className="">
              <Link
                href="/pages/houston-lead-generation"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[white]"
              >
                <div className="sec1s-box1s row-card">
                  <div className="">
                    <div className="mb-[20px] relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
                      <Image
                        src="/assets/lead-generate.png"
                        alt="lead-generate"
                        fill
                        className="absolute inset-0 w-full h-full object-fill"
                      />
                    </div>
                    <div className="blog-card-text my-[30px]">
                      <h3 className="text-[20px] font-bold">
                        Houston Lead Generation Company for Explosive Growth!
                      </h3>
                    </div>
                    <div className=" w-full flex items-center justify-end my-[10px]">
                      <p className="text-[right]">Jul 13, 2025</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* right Side */}
          <div className="right-blogCard">
             {/* one */}
             <Link
              href="/pages/agentic-ai-trends"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[white]"
            >
              <div className="sec1s-box1s column-card one">
                <div className="column-cards flex flex-row items-center gap-[15px] w-full">
                  <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px] max-w-[50%]">
                    <Image
                      src="/assets/ai-trends-2025.png"
                      alt="agentic-ai-trends"
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* 1 */}
                  <div className="max-w-[50%]">
                    <h3 className="text-[14px] font-bold">
                    Agentic AI Trends 2025
                    </h3>
                  </div>
                  {/* 2 */}
                </div>
                <div className=" w-full flex justify-end mb-[10px]">
                  <p className="text-[right]">September 18, 2025</p>
                </div>
              </div>
            </Link>
             {/* two */}
             <Link
              href="/pages/ai-agent-development"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[white]"
            >
              <div className="sec1s-box1s column-card one">
                <div className="column-cards flex flex-row items-center gap-[15px] w-full">
                  <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px] max-w-[50%]">
                    <Image
                      src="/assets/ai-agents.png"
                      alt="ai-agents"
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* 1 */}
                  <div className="max-w-[50%]">
                    <h3 className="text-[14px] font-bold">
                     AI Agent Development: The Future of Smart Business
                    </h3>
                  </div>
                  {/* 2 */}
                </div>
                <div className=" w-full flex justify-end mb-[10px]">
                  <p className="text-[right]">August 28, 2025</p>
                </div>
              </div>
            </Link>
            {/* three */}
            <Link
              href="/pages/meta-ads-houston"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[white]"
            >
              <div className="sec1s-box1s column-card one">
                <div className="column-cards flex flex-row items-center gap-[15px] w-full ">
                  <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px] max-w-[50%]">
                    <Image
                      src="/assets/meta-add.png"
                      alt="meta"
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* hover:scale-105 transition-transform duration-500 */}
                  </div>
                  {/* 1 */}
                  <div className="max-w-[50%]">
                    <h3 className="text-[14px] font-bold">
                      Meta Ads in Houston: How to Actually Get Sales Without
                      Losing Your Mind
                    </h3>
                  </div>

                  {/* 2 */}
                </div>
                <div className=" w-full flex items-center justify-end my-[10px]">
                  <p className="text-[right]">April 16, 2025</p>
                </div>
              </div>
            </Link>
            {/* four */}
            <Link
              href="/pages/from-montrose-midtown"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[white]"
            >
              <div className="sec1s-box1s column-card one">
                <div className="column-cards flex flex-row items-center gap-[15px] w-full">
                  <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px] max-w-[50%]">
                    <Image
                      src="/assets/google-add.png"
                      alt="socailmedia"
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* 1 */}
                  <div className="max-w-[50%]">
                    <h3 className="text-[14px] font-bold">
                      From Montrose to Midtown: Why Houston Can't Stop Clicking
                      Facebook & Instagram Ads
                    </h3>
                  </div>
                  {/* 2 */}
                </div>
                <div className=" w-full flex justify-end my-[10px]">
                  <p className="text-[right]">Febuary 21, 2025</p>
                </div>
              </div>
            </Link>
           
          </div>
        </div>
      </section>
      {/* Blog End  */}

      {/* Contact   */}
      <section id="contact" className="contact-form-section">
        {/* Enhanced Background Effects */}
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

        <div className="max-w-4xl mx-auto px-4 py-20 contact">
          <div className="text-center mb-12">
            <div className="sec1-h1 z-1 sec1-h4 mb-[30px] inline-block mb-6">
              <h4 className="gradient-text ">Get In Touch</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold my-[10px]">
              Ready to Transform Your Lead Generation?
            </h2>
            <p className="text-xl text-gray-300 max-w-[660px] mt-[10px] mb-[40px] mx-auto">
              Book a free strategy call or send us a message. We will analyze
              your current approach and show you exactly how to get 50+
              qualified leads per month.
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
                          href="mailto:info@socializo.co"
                          className="no-underline text-blue-400 hover:text-blue-300 transition-colors text-[white] line-none"
                        >
                          info@socializo.co
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
