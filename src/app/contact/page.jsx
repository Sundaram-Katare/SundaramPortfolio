"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS or backend API here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar />
    <section className="font-poppins text-[#ECDFCC] px-4 sm:px-8 md:px-16 py-10">
      <h1 className="border-b-2 border-[#ECDFCC] text-3xl sm:text-4xl font-semibold mb-10 text-center md:text-left">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side — Contact Info */}
        <motion.div
          className="bg-[#1E1E1E]/40 backdrop-blur-sm border border-[#ECDFCC]/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#ECDFCC]">
            Let's Connect 🤝
          </h2>
          <p className="text-[#ECDFCC]/70 text-base sm:text-lg mb-6">
            Feel free to reach out for collaborations, opportunities, or just to
            say hi!
          </p>

          <ul className="space-y-4 text-[#ECDFCC]/80">
            <li className="flex items-center  gap-1">
               <MdEmail size={24} /> <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:sundaramkatare53@gmail.com"
                className="text-white hover:text-blue-300 "
              >
              sundaramkatare53@gmail.com
              </a>
            </li>
            <li className="flex items-center  gap-1">
              <FaLinkedin size={24} /> <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/sundaram-katare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                linkedin.com/in/sundaram-katare
              </a>
            </li>
            <li className="flex items-center  gap-1">
              <FaGithub size={24} /> <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/Sundaram-Katare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                github.com/Sundaram-Katare
              </a>
            </li>

            <li className="flex items-center  gap-1">
              <FaSquareXTwitter size={24} /> <span className="font-medium">X:</span>{" "}
              <a
                href="https://github.com/Sundaram-Katare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                x.com/SundaramKatare
              </a>
            </li>

            <li className="flex items-center  gap-1">
              <SiPeerlist size={24} /> <span className="font-medium">Peerlist:</span>{" "}
              <a
                href="https://github.com/Sundaram-Katare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                peerlist.com/Sundaram-Katare
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right Side — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#1E1E1E]/40 backdrop-blur-sm border border-[#ECDFCC]/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-[#ECDFCC]/30 rounded-md p-3 text-[#ECDFCC] placeholder-[#ECDFCC]/50 focus:outline-none focus:border-[#ECDFCC] transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-[#ECDFCC]/30 rounded-md p-3 text-[#ECDFCC] placeholder-[#ECDFCC]/50 focus:outline-none focus:border-[#ECDFCC] transition-all duration-300"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full bg-transparent border border-[#ECDFCC]/30 rounded-md p-3 text-[#ECDFCC] placeholder-[#ECDFCC]/50 focus:outline-none focus:border-[#ECDFCC] transition-all duration-300"
            />

            <button
              type="submit"
              className="bg-[#ECDFCC] text-[#1E1E1E] font-semibold px-5 py-2 rounded-md text-sm sm:text-base hover:opacity-80 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
    </>
  );
}
