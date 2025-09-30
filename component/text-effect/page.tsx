"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextSlider from "../slider/page";

const keywords = ["Google Ads", "Web Development", "Seo", "Socail Media Marketing", "Lead Generation"];

const TextEffect = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % keywords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-auto w-full bg-black flex items-center justify-center my-[60px] text-white text-center">
        <div className="">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug text-center">
         At Pixelatech, we empower businesses with smart digital solutions that deliver results.
            <div className="relative h-[60px] mt-8 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={keywords[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute text-purple-400 "
                >
                  {keywords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          {/* <p className="mt-6 text-sm text-gray-400">
            This text changes via JavaScript (no scroll)
          </p> */}
        </div>
      </div>

      <div className="my-[30px]">
        <TextSlider />
      </div>
    </>
  );
};

export default TextEffect;
