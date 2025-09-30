import ReactMarkdown from "react-markdown";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "../from-montrose-midtown/style.css";

export const metadata = {
  title: "Social Media Marketing Birmingham | Pixela Tech",
  description:
    "Pixela Tech is a leading social media marketing company in Birmingham. We deliver local SMM services, ads, and training to help businesses grow online.",
};

import Image from "next/image";

const markdownContent = `
## Social Media Marketing Services in Birmingham

* At Pixela Tech, we help businesses grow with effective social media marketing in Birmingham. Whether you run a local shop, a clinic, 
or an online brand, our team creates strategies that connect you with the right audience and bring more leads, sales, and visibility.


## Your Local Social Media Experts

* As a trusted social media marketing company in Birmingham, we understand the local market and how people in the area connect
with businesses online. Our local social media marketing in Birmingham services are built to make sure your brand gets noticed by
the right people at the right time.

## What We Offer

Our team of expert social media marketers in Birmingham and social media marketers in Birmingham Alabama deliver
complete solutions, including:

* Content Creation & Management – Posts, stories, and campaigns that match your brand.
* Paid Advertising – Targeted Facebook, Instagram, LinkedIn, and TikTok ads.
* Community Management – Engaging with your followers to build trust and loyalty.
* Analytics & Reporting – Clear reports that show results you can track.

## Why Choose Pixela Tech?


* A dedicated social media marketing agency in Birmingham with proven results.
* Affordable packages for small businesses and growing brands.
* Creative campaigns designed to generate real engagement and leads.
*	Experienced team trusted by companies across the UK.

## Training & Support

* Want to learn how to manage your own campaigns? Pixela Tech also offers social media marketing courses in Birmingham, 
giving you the skills to run ads, create content, and grow your audience with confidence.


## Let’s Grow Your Brand

* If you’re searching for a professional social media marketing company in Birmingham, or need affordable social media marketing services in Birmingham,
Pixela Tech is here to help.

📍 Based in Birmingham, supporting businesses across the UK and beyond.

👉 Contact us today to get started with tailored social media marketing that brings results.

`;

const AiBlog = () => {
  return (
    <section className="main-container post-main-container mt-[100px]">
    
      <div className=" w-full mx-w-[1250px]">
      
        <div className=" mx-auto max-w-[850px] mb-[30px]">
          <div className="p-[20px]">
            <div className="post-header relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src={"/assets/Social_media_marketing.png"}
                alt="Social_media_marketing"
                fill
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
            {/* Markdown Content */}
            <div className="markdown-content">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="mt-[40px] mb-[15px] font-bold text-2xl ">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-[17px] font-semibold text-white mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="my-[15px] text-gray-200 leading-relaxed">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-white">{children}</strong>
                  ),
                  ol: ({ children }) => (
                    <ol className="px-[12px] pb-[10px] list-decimal list-inside space-y-2">
                      {children}
                    </ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="px-[12px] pb-[10px] list-disc list-inside space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="py-[5px] text-gray-200">{children}</li>
                  ),
                  hr: () => (
                    <div className="border border-gray-500 w-[50px] my-[30px]"></div>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-300">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-800 px-2 py-1 rounded text-sm text-green-400">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <Link
                      href={href || "#"}
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      {children}
                    </Link>
                  ),
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiBlog;
