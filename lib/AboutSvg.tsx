"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AboutSvg() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the scroll progress as a value between 0 and 1
      const scrollProgress = scrollPosition / (documentHeight - windowHeight);

      // Update the animation based on the scroll progress
      controls.set({ pathLength: scrollProgress });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className="absolute bottom-0"
    >
      <motion.path
        d="M40.358734130859375,289.6860656738281C99.55155944824219,264.12553151448566,305.08220926920575,137.21972147623697,395.51568603515625,136.32286071777344C485.94916280110675,135.4259999593099,517.7876993815104,278.77425893147785,582.9595947265625,284.3049011230469C648.1314900716146,289.8355433146159,752.6158142089844,188.6397450764974,786.5470581054688,169.5067138671875"
        fill="none"
        strokeWidth="38"
        stroke="#00b4d8"
        strokeLinecap="round"
        strokeDasharray="0 0"
        transform="matrix(-1.047375,0,0,1.047375,833.0402430534361,-23.093352159500114)"
        initial={{ pathLength: 0 }} // Initial state of the animation
        animate={controls} // Use the controls from useAnimation
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1000">
          <stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop>
          <stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
