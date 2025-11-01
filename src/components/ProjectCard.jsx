"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl font-poppins overflow-hidden bg-gradient-to-b from-[#353227] to-[#3D3C3A] shadow-lg flex flex-col justify-between w-full max-w-md mx-auto"
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 p-4 md:p-6 text-center">
        <h1 className="text-xl md:text-2xl font-semibold text-white">{project.title}</h1>

        <div className="px-2 py-1 rounded-md bg-[#ECDFCC]/10 font-poppins text-start text-sm font-light flex">
           <p>{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {project.tech.map((tech) => (
            <Skill key={tech.name} tech={tech} />
          ))}
        </div>

        <div className="flex justify-between gap-4 mt-2">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            className="bg-black text-white px-5 py-2 rounded-lg text-sm md:text-base font-medium"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </motion.a>

          <motion.a
            href={project.live}
            whileHover={{ scale: 1.1 }}
            className="bg-[#E6DDC4] text-black px-5 py-2 rounded-lg text-sm md:text-base font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
