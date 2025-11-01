"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageCompo from "./ImageCompo";

const textArray = [
  "Full Stack Developer",
  "Backend Developer",
  "UI/UX Designer",
];

export default function HeroCompo() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < currentText.length) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length); // Move to next text
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 md:px-16 lg:px-24 py-10 max-w-7xl w-full">
        {/* Left side - Image */}
        <div className="flex justify-center items-center order-1 md:order-none">
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] flex justify-center items-center">
            <ImageCompo />
          </div>
        </div>

        {/* Right side - Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl font-semibold text-white font-poppins"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hey 👋, I'm
            <br />
            Sundaram Katare
          </motion.h1>

          <motion.h1
            className="mt-2 text-5xl sm:text-6xl md:text-5xl font-bold text-[#ECDFCC] font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {displayedText}
            <motion.span
              className="inline-block w-[3px] h-10 bg-[#ECDFCC] ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.h1>

          <div className="p-4 mt-6 flex gap-8 items-center">
            <button className="px-2 py-1 border rounded-xl bg-[#ECDFCC] text-black hover:scale-125 transition-all duration-300  cursor-pointer text-2xl font-semibold "
                    onClick={() => window.open("/project", "_blank")}
            >See my work</button>


            <button className="px-2 py-1 border rounded-xl bg-[#ECDFCC] text-black hover:scale-125 transition-all duration-300 text-2xl cursor-pointer font-semibold "
                    onClick={() => window.open("/contact", "_blank")}
            >Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
}
