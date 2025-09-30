"use client";
import React from "react";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const Blog = () => {
  return (
    <section className="main-blogContainer" id="blog">
      
      <div className="container-Blog ">
        <div className="sec1-h4  mx-auto w-[max-content] z-1">
          <h4 className="">Blog</h4>
        </div>

        {/* Content 2 */}
      </div>
      {/* New Code Blog 1 */}
      <div className="main-card ">
        {/* box1 */}
        <Link
          href="/pages/agentic-ai-trends"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[white]"
        >
          <div className="mt-[20px] px-[20px] mb-[30px] card-blog  content-box ">
            <h1 className="text-[26px] mb-[10px] pt-[20px] text-red-300 font-bold leading-tight">
              Agentic AI Trends 2025: What Businesses Need to Know
            </h1>
            <p className="my-[20px] text-[left]">
              Artificial Intelligence is no longer just a tool—its becoming an
              active participant in business decision-making, customer service,
              and innovation. In 2025, agentic AI is one of the top strategic
              technology trends reshaping industries. Unlike traditional AI
              systems that wait for prompts, agentic AI agents can plan, take
              initiative, and collaborate with other systems to achieve goals.
            </p>
            <p className="text-3xl font-bold text-[lightblue] text-[left] text-red-500 my-[20px]">
              <span className="cursor-pointer rounded-lg bg-[gray] rounded-[10px] px-[10px] text-[white] py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[5px]" />
                Articles
              </span>
              <span className="ps-[5px] text-[white]"> September 18, 2025</span>
            </p>
            <div className="bg-neutral-800"></div>
            <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/assets/ai-trends-2025.png"
                alt="ai-trends-2025"
                fill
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
          </div>
        </Link>
        {/* box2 */}
        <Link
          href="/pages/ai-agent-development"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[white]"
        >
          <div className="mt-[20px] px-[20px] mb-[30px] card-blog  content-box ">
            <h1 className="text-[26px] mb-[10px] pt-[20px] text-red-300 font-bold leading-tight">
              AI Agent Development: The Future of Smart Business
            </h1>
            <p className="my-[20px] text-[left]">
              Have you heard about AI agent development but not sure why
              everyone is talking about it? Don’t move without reading this
              blog—because the way businesses grow and operate is changing
              forever.
            </p>
            <p className="text-3xl font-bold text-[lightblue] text-[left] text-red-500 my-[20px]">
              <span className="cursor-pointer rounded-lg bg-[gray] rounded-[10px] px-[10px] text-[white] py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[5px]" />
                Articles
              </span>
              <span className="ps-[5px] text-[white]"> August 28, 2025</span>
            </p>
            <div className="bg-neutral-800"></div>
            <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/assets/ai-agents.png"
                alt="ai-agent-development"
                fill
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
          </div>
        </Link>
        {/* box3 */}
        <Link
          href="/pages/ai-dental-realstate"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[white]"
        >
          <div className="mt-[20px] px-[20px] mb-[30px] card-blog content-box ">
            <h1 className="text-[26px] mb-[10px] pt-[20px] text-red-300 font-bold leading-tight">
              How AI Solutions Are Transforming Dental Clinics and Real Estate
              Businesses
            </h1>
            <p className="my-[20px] text-[left]">
              Both dental clinics and real estate businesses are using AI
              solutions to grow faster, work smarter, and improve customer
              experiences. Whether it’s AI business process optimization
              solutions to save time or AI solutions for business to enhance
              marketing, these industries are quickly adapting to this
              technology.
            </p>
            <p className="text-3xl font-bold text-[lightblue] text-[left] text-red-500 my-[20px]">
              <span className="cursor-pointer rounded-lg bg-[gray] rounded-[10px] px-[10px] text-[white] py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[5px]" />
                Articles
              </span>
              <span className="ps-[5px] text-[white]"> Auguts 8, 2025</span>
            </p>
            <div className="bg-neutral-800"></div>
            <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/assets/roboard.png"
                alt="Houston Facebook Instagram Ads"
                fill
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
          </div>
        </Link>
        {/* box4*/}
        <Link
          href="/pages/houston-lead-generation"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[white]"
        >
          <div className="mt-[20px] px-[20px] mb-[30px] card-blog  content-box ">
            <h1 className="text-[26px] mb-[10px] pt-[20px] text-red-300 font-bold leading-tight">
              Houston Lead Generation Company for Explosive Growth!
            </h1>
            <p className="my-[20px] text-[left]">
              Hey there, Houston business owners! Want more customers knocking
              on your door? You are in the right place. At Pixelatech.co, we are
              your friendly neighborhood experts at finding perfect customers
              for your business.
            </p>
            <p className="text-3xl font-bold text-[lightblue] text-[left] text-red-500 my-[20px]">
              <span className="cursor-pointer rounded-lg bg-[gray] rounded-[10px] px-[10px] text-[white] py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[5px]" />
                Articles
              </span>
              <span className="ps-[5px] text-[white]"> Jul 13, 2025</span>
            </p>
            <div className="bg-neutral-800"></div>
            <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/assets/lead-generate.png"
                alt="Houston Facebook Instagram Ads"
                fill
                className="absolute inset-0 w-full h-full object-fill "
              />
            </div>
          </div>
        </Link>
        {/* box5 */}
        <Link
          href="/pages/meta-ads-houston"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[white]"
        >
          <div className="mt-[20px] px-[20px] mb-[30px] card-blog  content-box">
            <h1 className="text-[26px] mb-[10px] pt-[20px] text-red-300 font-bold leading-tight">
              Meta Ads in Houston: How to Actually Get Sales Without Losing Your
              Mind
            </h1>
            <p className="my-[20px] text-[left]">
              Hey Houston business owners! Lets be real Facebook and Instagram
              ads can feel like trying to parallel park a monster truck on
              Westheimer. You are either wasting cash on ads nobody clicks… or
              worse, crickets.
            </p>
            <p className="text-3xl font-bold text-[lightblue] text-[left] text-red-500 my-[20px]">
              <span className="cursor-pointer rounded-lg bg-[gray] rounded-[10px] px-[10px] text-[white] py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[5px]" />
                Articles
              </span>
              <span className="ps-[5px] text-[white]"> April 16, 2025</span>
            </p>
            <div className="bg-neutral-800"></div>
            <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/assets/meta-add.png"
                alt="Houston Facebook Instagram Ads"
                fill
                className="absolute inset-0 w-full h-full object-fill "
              />
            </div>
          </div>
        </Link>
        {/* box6 */}
        <Link
          href="/pages/from-montrose-midtown"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[white]"
        >
          <div className="mt-[20px] px-[20px] mb-[30px] card-blog  content-box ">
            <h1 className="text-[26px] mb-[10px] pt-[20px] text-red-300 font-bold leading-tight">
              From Montrose to Midtown: Why Houston Can’t Stop Clicking Facebook
              &amp; Instagram Ads
            </h1>
            <p className="my-[20px] text-[left]">
              Forget boring sales pitches. Great ads are like talking to a
              neighbor. We are Facebook ads experts who make ads so fun, folks
              do not even realize they are clicking Buy!
            </p>
            <p className="text-3xl font-bold text-[lightblue] text-[left] text-red-500 my-[20px]">
              <span className="cursor-pointer rounded-lg bg-[gray] rounded-[10px] px-[10px] text-[white] py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[5px]" />
                Articles
              </span>
              <span className="ps-[5px] text-[white]"> Febuary 21, 2025</span>
            </p>
            <div className="bg-neutral-800"></div>
            <div className="relative aspect-[1000/563] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/assets/google-add.png"
                alt="Houston Facebook Instagram Ads"
                fill
                className="absolute inset-0 w-full h-full object-fill "
              />
            </div>
          </div>
        </Link>
        {/* box7 */}
      </div>
    </section>
  );
};

export default Blog;
