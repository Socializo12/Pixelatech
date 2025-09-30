import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "../from-montrose-midtown/style.css";

export const metadata = {
  title: "Web Development Services Birmingham | Pixela Tech",
  description:
    "Pixela Tech offers custom web design & development services in Birmingham. From ecommerce to WordPress, we build responsive, SEO-friendly websites.",
};

import Image from "next/image";

const markdownContent = `
## Web Development Services in Birmingham

At Pixela Tech, we provide professional web development services in Birmingham that help
businesses grow online. From small local shops to large companies, 
we design and build websites that are fast, secure, and built to turn visitors into customers.

## Custom Web Design & Development

Your business is unique, and your website should be too. Our team offers custom web design & development
services in Birmingham AL, tailored to your brand and goals. We also provide professional web design 
& development services in Birmingham AL for clients who want modern, user-friendly websites that leave 
a lasting impression.

## Responsive Web Development

Most people visit websites on their phones. That is why we deliver responsive web development services in Birmingham. With our 
responsive web design and development services in Birmingham AL, your site will look and work perfectly on desktops, tablets, and mobiles.

## Ecommerce Web Development

Selling online is easier with the right website. Pixela Tech offers ecommerce web development services in 
Birmingham that make it simple to manage products, take payments, and grow your online store.

## WordPress Development

We specialise in WordPress web development services in Birmingham, giving you websites that are easy to update,
SEO-friendly, and built to scale as your business grows.

## Outsource Web Development

Need extra support without hiring in-house developers? Many companies choose to outsource web development services in Birmingham to Pixela Tech.
We take care of the design, development, and launch, so you can focus on running your business.

## Why Choose Pixela Tech?

* Expert team with years of experience
* SEO-friendly and conversion-focused websites
* Local and international web development projects
* Transparent pricing with no hidden costs
* Ongoing support after launch

Whether you are looking for web design and development services in Birmingham, web design & development services Birmingham AL, 
or even niche solutions like developing RESTful web services with Jersey 2.0 (Birmingham Packt Publishing),
Pixela Tech has the right skills to deliver.

## Let is Build Your Website

Your website is the face of your business online. Let Pixela Tech create a site that looks amazing,
works smoothly, and brings you more leads.
Contact us today for expert web design & development services in Birmingham.

`;

const AiBlog = () => {
  return (
    <section className="main-container post-main-container mt-[100px]">
      <div className=" w-full mx-w-[1250px]">
        <div className=" mx-auto max-w-[850px] mb-[30px]">
          <div className="p-[20px]">
            <div className="post-header relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src={"/assets/Web_Development.png"}
                alt="Web_Development"
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
