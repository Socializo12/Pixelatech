"use client";
const TextEffect = () => {
  const texts = [
    "AI Agentic Solutions for Smarter Business Growth  ",
    "Automation That Delivers Results ",
    "Future-Ready B2B Systems ",
    "Intelligent Automation ",
    "Data-Driven Insights ",
  ];

  return (
    <div className="w-full overflow-hidden whitespace-nowrap mt-4 px-4">
      <div className="inline-block animate-marquee">
        {texts.map((text, i) => (
          <span
            key={i}
            className="inline-block text-[18px] content-box mx-[10px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-blue-600 mx-8"
          >
            {text}
          </span>
        ))}
        {/* Duplicate the texts once more for seamless loop */}
        {texts.map((text, i) => (
          <span
            key={`dup-${i}`}
            className="inline-block text-[18px] content-box mx-[10px]  sm:text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-blue-600 mx-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextEffect;
