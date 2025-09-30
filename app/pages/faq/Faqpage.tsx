"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

const Section4 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section4-container4 ">
      <div className="section4-inner services-marginTop mb-[50px]">
        <div className="sec1-h4 mt-[30px] mb-[15px]">
          <h4 className="gradient-text ">Frequently Asked Questions</h4>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-[10px]">
            Everything You Need to Know About Our AI Lead Generation System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about our process, results,
            and guarantees
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
  );
};

export default Section4;
