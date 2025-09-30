"use client";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
// import Link from "next/link";
import dynamic from "next/dynamic";
import { CheckCircle2 } from "lucide-react"; 
const TextEffect = dynamic(() => import("../../../component/text-effect/page"), {
  ssr: false, // <-- disables server-side render for just this component
});
const Section1 = () => {
  return (
    <section className="section1-container mt-[100px]">
      {/* Enhanced Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Morphing Shapes */}
      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      {/* Sparkle Effects */}
      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>

      {/* content 1 */}
      <section className="main-container  services-marginTop" id="services">
        <div className="min-h-screen bg-black text-white flex flex-col">
          <div className="sec1-h4 mt-[10px] mb-[20px] mx-auto">
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
                  cutting-edge AI agent development and intelligent automation.
                  As a leading AI agentic solutions company, we specialize in
                  crafting custom AI agents that transform how businesses
                  interact with data, users, and workflows. Whether you need
                  tailored AI agent development services, a trusted partner for
                  scalable AI solutions, or innovative automation to streamline
                  your operations, Socializo delivers expertise and results at
                  every stage.
                </p>

                <div className="text-left w-full px-4 md:px-0 my-[10px]">
                  <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                    Agents & Automations
                  </h2>
                  <ul className="space-y-4 my-[12px]">
                    <li className="flex items-start my-[10px] gap-[8px]">
                      <CheckCircle2 className="h-6 w-6 icon-services  flex-shrink-0 mt-1" />
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
                  cutting-edge AI agent development and intelligent automation.
                  As a leading AI agentic solutions company, we specialize in
                  crafting custom AI agents that transform how businesses
                  interact with data, users, and workflows. Whether you need
                  tailored AI agent development services, a trusted partner for
                  scalable AI solutions, or innovative automation to streamline
                  your operations, Socializo delivers expertise and results at
                  every stage.
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
                  consultants create high-ROI, data-driven Google Ads strategies
                  that connect your business with the right audience in Houston,
                  Texas, ensuring maximum visibility and growth for your brand.
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
                        Strategic keyword research and bid management by Houston
                        Google Ads experts
                      </strong>
                    </p>
                  </li>
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6    icon-services  flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      <strong>
                        Transparent reporting from a trusted Houston Google Ads
                        agency
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

                {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* <div className="sec2-container">
          <div>
            <div className="sec2-box2-inner">
              <div className="sec2-box2-outer">
                <p>
                  Socializo transformed our lead generation completely. Within
                  60 days, we saw a 250% increase in qualified appointments.
                  Their AI-powered personalization is incredible - prospects
                  actually respond because the messages feel genuinely relevant
                  to their business challenges.
                </p>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            <div className="sec2-box2-inner">
              <div className="sec2-box2-outer">
                <p>
                  The ROI has been phenomenal. We replaced our entire SDR team
                  with Socializo system and not only saved $200K annually but
                  also generated 3x more qualified leads. The automation is so
                  sophisticated that prospects think they are talking to a human
                  sales rep.
                </p>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            <div className="sec2-box2-inner">
              <div className="sec2-box2-outer">
                <p>
                  What impressed us most was the speed of implementation. Within
                  2 weeks, we had a fully automated lead generation system
                  running. The quality of leads improved dramatically, and our
                  sales team can now focus on closing deals instead of
                  prospecting.
                </p>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div> */}

      <div className="section1-container sec3-container mt-[30px] services-page">
   
        <div className="sec1-h4 mt-[0px]">
          <h4 className="gradient-text ">Meet The Founder</h4>
        </div>
        <div className="section3-box-inner">
          <div className="tex-left md:text-center">
            <p className="m-[0]">
              We take the time to deeply understand your ideal customers and
              their unique challenges. Using advanced automation, we craft
              tailored messaging that speaks directly to their needs and clearly
              shows how your company provides the perfect solution, all
              delivered efficiently and intelligently through our AI-driven
              systems.
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
      <section className="section3-container3  services-page">
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
                        Our AI custom solutions analyze your unique audience and
                        craft messages that truly connect, making every
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
                        automate your daily business tasks—helping you save time
                        and reduce manual work.
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
                        real improvements in your business within 60 days, we’ll
                        give you your money back.
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
                        Your AI works around the clock—handling tasks, answering
                        questions, and supporting your team—so you can focus on
                        growing your business.
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
                        Depend on human effort for repetitive tasks, increasing the risk of errors, inefficiency, and wasted resources.
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
                        Operate with disconnected tools and platforms, making it hard to streamline workflows or share data across your organization.

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
                        Offer only basic reports and metrics, without deep analysis or actionable insights to drive smarter business decisions.
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
                        Charge fixed fees with no guarantee of real business improvements, leaving you to bear the risk of underwhelming outcomes.
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
                        Support and services are restricted to business hours, missing chances to solve problems or respond to needs in real time.
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
                  <p className="text-gray-300">With no guarantee of improvement</p>
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
  );
};

export default Section1;
