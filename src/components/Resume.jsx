

"use client";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="font-poppins text-[#ECDFCC] px-4 sm:px-8 md:px-16 py-10">
      <h1 className="border-b-2 border-[#ECDFCC] text-3xl sm:text-4xl font-semibold mb-10 text-center md:text-left">
        Resume
      </h1>

      <div className="w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
        {/* Left — Resume Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.freepik.com/premium-vector/human-resources-resume-concept_140689-3932.jpg"
            alt="Resume Preview"
            className="rounded-lg border border-[#ECDFCC]/30 shadow-md hover:shadow-lg transition-all duration-300 max-w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right — Resume Info Card */}
        <motion.div
          className="bg-[#1E1E1E]/40 backdrop-blur-sm border border-[#ECDFCC]/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#ECDFCC]">
            Sundaram Katare
          </h2>
          <p className="text-[#ECDFCC]/70 text-base sm:text-lg mb-6">
            Full Stack Developer skilled in the MERN stack, passionate about crafting efficient backend systems and beautiful frontend interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <a
              href="https://drive.google.com/file/d/1Tkd5bZoisIKjKfqbzFphzQIFw33Ej4ec/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ECDFCC] text-[#1E1E1E] font-semibold px-5 py-2 rounded-md text-sm sm:text-base hover:opacity-80 transition-all duration-300"
            >
              View Resume
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=your-file-id"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#ECDFCC] text-[#ECDFCC] font-semibold px-5 py-2 rounded-md text-sm sm:text-base hover:bg-[#ECDFCC] hover:text-[#1E1E1E] transition-all duration-300"
            >
              Download
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

