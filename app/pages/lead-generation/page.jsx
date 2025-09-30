import ReactMarkdown from "react-markdown";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "../from-montrose-midtown/style.css";

export const metadata = {
  title: "Lead Generation Services Birmingham | Pixela Tech",
  description:
    "Pixela Tech offers expert lead generation services in Birmingham. From local businesses to dentists, we deliver quality leads that grow your sales.",
};

import Image from "next/image";

const markdownContent = `
## Lead Generation Services in Birmingham Pixela Tech

Lead Generation Birmingham

At Pixela Tech, we make it easy for businesses to find the right customers. 
Our lead generation services in Birmingham are built to bring you more calls, more bookings, and more sales.
Whether you are a small shop or a big brand, our job is simple: get you quality leads that turn into paying clients.

## Our Lead Generation Services

We use proven tools and smart strategies to grow your business:

* Online lead generation Birmingham Capture customers searching for your services online.
* Social media lead generation for small businesses Birmingham  Facebook, Instagram, and LinkedIn campaigns that bring leads straight to you.
* LinkedIn lead generation Birmingham Reach the right decision-makers and grow your B2B leads.
* Birmingham Invisalign lead generation Targeted campaigns that bring in patients looking for Invisalign treatments.
* Birmingham lead generation for dentists Tailored plans that fill your dental practice with more patients.
* Lead generation networking Birmingham Building real connections that turn into business opportunities.


## Why Choose Pixela Tech?

There are many lead generation agencies in Birmingham, but here is why clients choose us:

* Affordable, simple plans anyone can understand.
* Local experts with knowledge of the Birmingham market.
* Campaigns that focus on quality leads, not just numbers.
* Trusted team of lead generation professionals in Birmingham Alabama and across the UK.

We are not just another agency—we are your growth partner.

## Local & Global Reach

We proudly serve clients in Birmingham, UK, and also support businesses in Birmingham, AL.
Whether you need help locally or across markets, Pixela Tech is the lead generation agency Birmingham companies rely on.

## Let is Grow Your Leads

Looking for the best lead generation services Birmingham has to offer? With Pixela 
Tech, you will get a clear plan, measurable results, and more customers.

📍 Based in Birmingham, serving UK and international clients.

👉 Contact us today to start generating leads with Pixela Tech.

`;

const AiBlog = () => {
  return (
    <section className="main-container post-main-container mt-[100px]">
      <div className=" w-full mx-w-[1250px]">
        <div className=" mx-auto max-w-[850px] mb-[30px]">
          <div className="p-[20px]">
            <div className="post-header relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src={"/assets/Lead_Generation.png"}
                alt="Lead_Generation"
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
