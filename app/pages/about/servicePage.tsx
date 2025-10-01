"use client";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
// import Link from "next/link";
import dynamic from "next/dynamic";
import { CheckCircle2 } from "lucide-react";
const TextEffect = dynamic(
  () => import("../../../component/text-effect/page"),
  {
    ssr: false, // <-- disables server-side render for just this component
  }
);
const Section1 = () => {
  return (
    <section className="section1-container mt-[100px]">
      {/* content 1 */}
      <section className="main-container  services-marginTop" id="services">
        <div className="min-h-screen bg-black text-white flex flex-col">
          <div className="sec1-h4 mt-[10px] mb-[20px] mx-auto">
            <h4 className="gradient-text">About Us</h4>
          </div>
          <div className="flex items-center justify-center ">
            <h1 className="text-[center] my-[20px]">
              Take it All in Your Stride
            </h1>
          </div>
          <main className="">
            <div className="w-[80%] mx-[auto] mb-[30px]">
              <p className="my-[20px] leading-[1.5] text-[18px]">
                Pixelatech | Top 1% Performance Marketing Agency in Birmingham
                Welcome to Pixelatech – one of the top 1% digital marketing
                agencies in Birmingham!
              </p>
              <p className="mb-[20px] leading-[1.5] text-[18px]">
                We help businesses grow fast by bringing them more leads, sales,
                and success. Whether you’re a small business or a big brand, we
                make sure the right people find you online through powerful ads
                and smart strategies.
              </p>
              <p className="mb-[20px] leading-[1.5] text-[18px]">
                Our team of experts knows how to run high-performing campaigns
                on Facebook, Instagram, Google, and Meta. We are your trusted
                partner for:
              </p>
            </div>
            <div className="main-container-grid mx-auto gap-[20px] p-8 md:p-12">
              {/* One */}
              <div className="px-[20px] f-email content-box">
                <p className="text-2xl md:text-3xl text-[20px] text-center  font-bold my-[20px]">
                  Lead generation in Birmingham
                </p>
              </div>
              {/* Second */}
              <div className="px-[20px] f-email content-box">
                <p className="text-2xl md:text-3xl text-[20px] text-center  font-bold my-[20px]">
                  B2B lead generation services
                </p>
              </div>
              {/* Third */}
              <div className="px-[20px] f-email content-box">
                <p className="text-2xl md:text-3xl text-[20px] text-center  font-bold my-[20px]">
                  Real estate and legal lead generation
                </p>
              </div>
              {/* four */}
              <div className="px-[20px] f-email content-box">
                <p className="text-2xl md:text-3xl text-[20px] text-center  font-bold my-[20px]">
                  Facebook & Instagram ads for eCommerce
                </p>
              </div>
              {/* five */}
              <div className="px-[20px] f-email content-box">
                <p className="text-2xl md:text-3xl text-[20px] text-center  font-bold my-[20px]">
                  Google Ads for Real Estate, Dental Clinics, Restaurants,
                  Service based businesses & local businesses
                </p>
              </div>
              {/* six */}
              <div className="px-[20px] f-email content-box">
                <p className="text-2xl md:text-3xl text-[20px] text-center  font-bold my-[20px]">
                  Brand marketing & internet marketing in Birmingham
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section className="section3-container3  services-page">
        <div className="main-container-grid mx-auto gap-[20px] p-8 md:p-12">
          {/* One */}
          {/* <div className="flex flex-col gap-[15px]"> */}
          <div className="px-[20px] f-email content-box">
            <p className="text-2xl md:text-3xl text-[20px] text-left leading-[1.5] font-bold my-[20px]">
              <b>
                We don’t just run ads – we build results. From social media lead
                generation to Google Ads management, we use data and creativity
                to help you stand out in the crowd.
              </b>
            </p>
            <p className="text-2xl md:text-3xl text-[16] text-left leading-[1.5] font-bold mb-[20px]">
              At Pixelatech, we believe in simplicity, honesty, and performance.
              Our clients love us because we deliver exactly what we promise —
              targeted leads, affordable campaigns, and measurable growth.
            </p>
            <p className="text-2xl md:text-3xl text-[16] text-left leading-[1.5] font-bold mb-[20px]">
              📍 Based in Birmingham, we proudly serve clients across the UK and
              beyond. Whether you’re searching for a reliable Facebook ads
              agency, a Google Ads expert, or a full-service branding and
              marketing company, you’re in the right place Let’s grow your
              business — one pixel at a time.
            </p>
            <div className="flex justify-center items-center">
              <a
                href="https://calendly.com/abbdulsamadhere/30min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[black]"
              >
                <button className="cta-button my-[20px]">CLICK HERE</button>
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* seconf */}
        <div className="main-container-grid mx-auto gap-[20px] p-8 md:p-12">
          <div className="px-[20px] f-email content-box">
            <h2 className="text-2xl md:text-3xl text-[20px] text-center  font-bold my-[20px]">
              We’ll be your proactive partner
            </h2>
            <p className="text-2xl md:text-3xl text-[20px] text-center  font-bold mb-[10px]">
              If you would like to know more about our Stride Methodology
            </p>
            <div className="flex justify-center items-center">
              <a
                href="https://calendly.com/abbdulsamadhere/30min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[black]"
              >
                <button className="cta-button my-[20px]">CLICK HERE</button>
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section1;
