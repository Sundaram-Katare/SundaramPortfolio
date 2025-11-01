"use client";
import { motion } from "framer-motion";

export default function Skill({ tech }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${tech.color} ${tech.bgColor} font-semibold text-xs md:text-xs font-medium text-center px-3 py-1 rounded-xl`}
    >
      {tech.name}
    </motion.div>
  );
}
