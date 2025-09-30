import ReactMarkdown from "react-markdown";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "../from-montrose-midtown/style.css";

export const metadata = {
  title: "SEO Services in Birmingham | Affordable & Professional",
  description:
    "Pixela Tech offers affordable SEO services in Birmingham. From local SEO to healthcare and e-commerce, we help your business rank higher and get more customers.",
};

import Image from "next/image";

const markdownContent = `
## SEO Services in Birmingham Pixela Tech

Affordable & Professional SEO Services in Birmingham

* At Pixela Tech, we offer SEO services in Birmingham that help your business get found on Google. Whether you run a small shop, a clinic, or a growing brand, our team builds strategies that bring you more visitors, calls, and customers.
* We believe good SEO should be simple and clear. That is why we provide affordable local SEO services in Birmingham without confusing jargon or hidden tricks.

## What Our SEO Services Include

Our team delivers complete SEO solutions designed to fit your goals:

* Local SEO services in Birmingham Get your business visible in local searches and maps.
* Affordable SEO services in Birmingham UK Budget-friendly packages for small and mid-sized businesses.
* Professional SEO services in Birmingham Expert strategies for lasting results.
* Dermatology SEO services in Birmingham Tailored SEO for dermatology clinics and medical practices.
* Best SEO services in Birmingham  Campaigns focused on measurable growth.
* No matter your industry, our SEO service in Birmingham is built to help you stand out and grow.

## Why Choose Pixela Tech for SEO?

* Local experts who understand Birmingham businesses.
* Clear, step-by-step strategies you can follow.
* Affordable pricing to match your budget.
* Real results backed by reports and analytics.
* With us, SEO is not just about rankings—it is about customers and growth.

## Industries We Help With SEO

We provide specialized SEO services for:

* Local shops & service providers
* Dental & healthcare clinics
* Real estate agencies
* Dermatology clinics
* E-commerce & online stores

If you are looking for the best SEO services in Birmingham, Pixela Tech has you covered.

## Let is Get Started
Want more leads and sales from Google? Choose Pixela Tech for affordable local SEO services in Birmingham.

📍 Based in Birmingham, working with businesses across the UK.

👉 Contact us today and see why we are trusted for professional SEO services in Birmingham.

`;

const AiBlog = () => {
  return (
    <section className="main-container post-main-container mt-[100px]">
    
      <div className=" w-full mx-w-[1250px]">
      
        <div className=" mx-auto max-w-[850px] mb-[30px]">
          <div className="p-[20px]">
            <div className="post-header relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src={"/assets/Seo.png"}
                alt="Seo"
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
