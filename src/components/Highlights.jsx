"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HighlightCard from "./HighlightCard";
import { useState } from "react";

const highlightsData = [
  {
    id: 1,
    title: "Web Developer Intern",
    organization: "@PHICSIT",
    description: "June 2024 – August 2024",
    buttonText: "View",
    dotColor: "bg-green-700",
    url: "https://www.linkedin.com/posts/sundaram-katare5_internship-webdevelopment-learninginpublic-activity-7368993891427037188-HEQO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAKzyMBwb4eXt9DlvtlgOeMl64COBehWJU", // example
  },
  {
    id: 2,
    title: "Open Source Achievement",
    organization: "@OpenSourceConnectIndia",
    description: (<h1><span className="font-bold text-black bg-[#ECDFCC] px-1 rounded-md animate-bounce">15th</span> position among <span className="font-bold text-black bg-[#ECDFCC] px-1 rounded-md animate-bounce">10K+</span> participants</h1>),
    buttonText: "View",
    dotColor: "bg-red-500",
    url: "https://www.osconnect.org/leaderboard",
  },
  {
    id: 3,
    title: "Full Stack Projects",
    organization: "",
    description: (<h1><span className="font-bold text-black bg-[#ECDFCC] px-1 rounded-md animate-bounce">6+</span> Full Stack Projects</h1>),
    buttonText: "View",
    dotColor: "bg-green-700",
    url: "/project",
  },
  {
    id: 4,
    title: "DSA",
    organization: "@LeetCode + @GFG",
    description: (<h1><span className="font-bold text-black bg-[#ECDFCC] px-1 rounded-md animate-bounce">400+</span> Problems Solved</h1>),
    buttonText: "View",
    dotColor: "bg-green-700",
    url: "https://codolio.com/profile/Sundaram",
  },
  {
    id: 5,
    title: "Open Source Contributions",
    organization: "@GitHub",
    description: "Contributed to multiple public repositories",
    buttonText: "View",
    dotColor: "bg-yellow-500",
    url: "https://github.com/Sundaram-Katare",
  },
  {
    id: 6,
    title: "HackerRank SQL — 3★",
    organization: "@HackerRank",
    description: "Achieved 3-star rating in HackerRank SQL challenges (proficient in joins, aggregations, and window functions).",
    buttonText: "View",
    dotColor: "bg-green-700",
    url: "https://www.hackerrank.com/profile/sundaramkatare53"
  }
];

export default function Highlights() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="font-poppins text-[#ECDFCC] px-4 sm:px-8 md:px-16 py-10">
      <h1 className="border-b-2 border-[#ECDFCC] text-3xl sm:text-4xl font-semibold mb-10 text-center md:text-left">
        Achievements & Highlights
      </h1>

      <div className="flex justify-center">
        <Timeline
          position="alternate-reverse"
          className="w-full max-w-5xl flex flex-col md:flex-row md:justify-center"
        >
          {highlightsData.map((item, idx) => (
            <TimelineItem key={item.id}>
              <TimelineSeparator>
                <TimelineDot className={`h-6 w-6 ${item.dotColor}`} />
                {idx !== highlightsData.length - 1 && (
                  <TimelineConnector className="bg-[#ECDFCC]" />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <HighlightCard item={item} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
