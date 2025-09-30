import ReactMarkdown from "react-markdown";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "../from-montrose-midtown/style.css";

export const metadata = {
  title: "Google Ads & PPC Management Birmingham | Pixela Tech",
  description:
    "Pixela Tech is a trusted Google Ads agency in Birmingham. Our PPC experts manage campaigns that bring more leads, sales, and growth for your business.",
};

import Image from "next/image";

const markdownContent = `
## Google Ads & PPC Management in Birmingham

At Pixela Tech, we help businesses in Birmingham grow with smart Google Ads management services. 
Whether you are a local shop, dentist, or eCommerce store, our job is simple:
bring you more customers through effective ads that work.

## Why Choose Pixela Tech as Your Google Ads Agency in Birmingham?

Running ads is easy, but making them profitable needs skill.That is where we come in.
As a trusted Google Ads agency in Birmingham, we set up, manage, and optimise campaigns so you spend less and earn more.

* Affordable & transparent pricing
* Dedicated Google Ads manager in Birmingham for your account
* Data-driven strategy to lower cost per click
* High-quality leads & sales growth

We are not just another Google Ads company in Birmingham—we act like your in-house team.


## Our Google Ads Management Services in Birmingham

We offer a full range of PPC management services in Birmingham, including:

* Search Ads Get seen when people are looking for your product or service.
* Display Ads Show your brand across websites and apps.
* Shopping Ads Perfect for eCommerce stores.
* Remarketing Ads Remind people who visited your website to come back.
* Amazon PPC Management in Birmingham  Grow your Amazon sales with expert ad campaigns.

Every campaign is handled by a Google Ads expert in Birmingham who knows how to make your money work harder.

## Local & Professional PPC Management in Birmingham

If you are searching for:

* Birmingham PPC management agency
* Best Google Ads expert in Birmingham
* Professional PPC manager Birmingham

then Pixela Tech is the partner you need. We bring local knowledge, years of experience, and a results-first mindset.

## Google Ads Training in Birmingham

Want to manage your own ads? We also provide Google Ads training courses in Birmingham.
Learn directly from a Google Ads specialist in Birmingham and gain the skills to run campaigns yourself.

## Get Started with Pixela Tech Today

Ready to grow your business with targeted ads? Whether you need Google paid ads in Birmingham or full PPC management,
Pixela Tech is here to help.

👉 Contact us today to speak with a Google Ads manager in Birmingham and start getting better leads and sales.

`;

const AiBlog = () => {
  return (
    <section className="main-container post-main-container mt-[100px]">
      <div className=" w-full mx-w-[1250px]">
        <div className=" mx-auto max-w-[850px] mb-[30px]">
          <div className="p-[20px]">
            <div className="post-header relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src={"/assets/Google_Ads.png"}
                alt="Google_Ads"
                fill
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
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
