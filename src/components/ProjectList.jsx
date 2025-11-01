"use client";
import ProjectCard from "./ProjectCard";

const react = { name: "React", color: "text-blue-300", bgColor: "bg-blue-900" };
const framerMotion = { name: "Framer", color: "text-pink-100", bgColor: "bg-pink-800" };
const tailwind = { name: "Tailwind", color: "text-teal-900", bgColor: "bg-teal-300" };
const mui = { name: "MUI", color: "text-cyan-800", bgColor: "bg-cyan-300" };
const nodejs = { name: "Node.js", color: "text-green-900", bgColor: "bg-green-300" };
const express = { name: "Express", color: "text-gray-800", bgColor: "bg-gray-400" };
const mongoDb = { name: "MongoDB", color: "text-green-200", bgColor: "bg-green-800" };
const cloudinary = { name: "Cloudinary", color: "text-indigo-800", bgColor: "bg-indigo-200" };
const redux = { name: "Redux", color: "text-red-800", bgColor: "bg-red-200" };
const sql = { name: "SQL", color: "text-pink-800", bgColor: "bg-pink-200" };
const zustand = { name: "Zustand", color: "text-yellow-800", bgColor: "bg-yellow-200" };
const shadCn = { name: "ShadCN", color: "text-gray-800", bgColor: "bg-gray-100" };
const postgreSql = { name: "PostgreSQL", color: "text-blue-800", bgColor: "bg-blue-200" };
const neonDB = { name: "NeonDB", color: "text-cyan-900", bgColor: "bg-cyan-200" };
const nextjs = { name: "Next.js", color: "text-gray-900", bgColor: "bg-gray-300" };
const html = { name: "HTML", color: "text-orange-800", bgColor: "bg-orange-200" };
const css = { name: "CSS", color: "text-blue-800", bgColor: "bg-blue-200" };
const javascript = { name: "JavaScript", color: "text-yellow-800", bgColor: "bg-yellow-200" };
const sockets = { name: "Socket.io", color: "text-black", bgColor: "bg-pink-300" };

const projectsLeft = [
  {
    id: 1,
    title: "Lumin",
    desc: "Lumin is a full-featured Quiz Application that allows users to play, create, and share quizzes in real-time.It’s built for learners and developers who love competition — test your skills, challenge friends, and climb the leaderboard!",
    tech: [react, redux, tailwind, nodejs, express, mongoDb, framerMotion],
    github: "https://github.com/Sundaram-Katare/Lumin",
    live: "https://lumin-alpha.vercel.app/",
    image: "/images/lumin.png",
  },
  {
    id: 2,
    title: "Learnzo",
    desc: "Learnzo is a full-stack e-learning platform where users can explore study materials uploaded by others, share their own knowledge through documents, and collaborate in a growing learning community.",
    tech: [react, redux, tailwind, nodejs, express, mongoDb, tailwind, sql, cloudinary],
    github: "https://github.com/Sundaram-Katare/Learnzo",
    live: "https://e-learning-rosy-gamma.vercel.app/",
    image: "/images/learnzo.png",
  },
  {
    id: 3,
    title: "SafeLinkrr",
    desc: "A full-stack web application that lets users shorten URLs with added security — unsafe/malicious URLs are flagged and blocked using Google's Safe Browsing API.",
    tech: [nodejs, express, react, postgreSql, css, sql],
    github: "https://github.com/Sundaram-Katare/UrlShortener",
    live: "https://url-shortener-lime-two.vercel.app/",
    image: "/images/safe.png",
  },
  {
    id: 4,
    title: "CLI Guru",
    desc: "A command-line tool that provides quick access to various Linux commands and their usage.",
    tech: [nextjs, react, tailwind ],
    github: "https://github.com/Sundaram-Katare/CLI-Guru",
    live: "https://cli-guru-vno8.vercel.app/",
    image: "/images/cli.png"
  },
  {
    id: 5,
    title: "Trailer Binge",
    desc: "A dynamic web app where users can search for any movie and instantly watch its official trailer — all powered by the YouTube Data API.",
    tech: [nodejs, express, react, tailwind, framerMotion  ],
    github: "https://github.com/Sundaram-Katare/Trailer-Binge",
    live: "https://movie-trailer-xi.vercel.app/",
    image: "/images/movie.png"
  }
];

const projectsRight = [
  {
    id: 1,
    title: "Liluxe",
    desc: "Crafted a sleek, responsive landing page for a fashion-forward clothing brand using React, Tailwind CSS, and Material UI.",
    tech: [react, framerMotion, tailwind, mui],
    github: "https://github.com/Sundaram-Katare/Liluxe",
    live: "https://stylespot-orpin.vercel.app/",
    image: "/images/liluxe.png",
  },
  {
    id: 2,
    title: "BuzzNet",
    desc: "BuzzNet Chat App is a full-stack application built for seamless instant messaging between users.It allows people to create or join chat rooms, exchange messages in real time, and stay connected with a clean, responsive UI.",
    tech: [react, nodejs, tailwind, express, mongoDb, tailwind, zustand, shadCn, sockets],
    github: "https://github.com/Sundaram-Katare/BuzzNet",
    live: "https://buzz-net-lime.vercel.app/",
    image: "/images/buzz.png",
  },
  {
    id: 3,
    title: "Plate Pilot",
    desc: "PlatePilot is a scalable backend service for a food ordering platform, supporting authentication, cart management, payment integration, user ratings, and full CRUD for menu items.",
    tech: [nodejs, express, sql, postgreSql, neonDB],
    github: "https://github.com/Sundaram-Katare/Plate-Pilot",
    live: "https://github.com/Sundaram-Katare/Plate-Pilot",
    image: "/images/plate.png"
  },
  {
    id: 4,
    title: "Mic 2 Text",
    desc: "This is a real-time speech-to-text web application built using pure HTML, CSS, and JavaScript. It uses the Web Speech API to convert spoken words into text and features a live audio visualizer using the Web Audio API.",
    tech: [html, css, javascript ],
    github: "https://github.com/Sundaram-Katare/Speech-to-text",
    live: "https://speech-to-text-nine-plum.vercel.app/",
    image: "/images/speech.png"
  }
];

export default function ProjectList() {
  return (
    <div className="min-h-screen p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-black text-white">
      {/* Left Side */}
      <div className="flex flex-col gap-10 items-center border-b-2 md:border-b-0 md:border-r-2 border-[#ECDFCC] pb-10 md:pb-0 md:pr-10">
        {projectsLeft.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-10 items-center md:pl-10">
        {projectsRight.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
