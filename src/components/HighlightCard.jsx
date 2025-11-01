"use client";
import { motion } from "framer-motion";

export default function HighlightCard({ item }) {
  return (
    <motion.div
      className="bg-[#1E1E1E]/40 backdrop-blur-sm border border-[#ECDFCC]/30 rounded-2xl p-5 sm:p-6 mb-6 shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-[#ECDFCC] mb-2">
        {item.title}
      </h2>
      {item.organization && (
        <p className="text-[#ECDFCC]/80 mb-1 text-sm sm:text-base">
          {item.organization}
        </p>
      )}
      <p className="text-[#ECDFCC]/60 mb-4 text-sm sm:text-base">
        {item.description}
      </p>

      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ECDFCC] text-[#1E1E1E] font-semibold px-4 py-2 rounded-md text-sm sm:text-base hover:opacity-80 transition-all duration-300"
        >
          {item.buttonText}
        </a>
      )}
    </motion.div>
  );
}
