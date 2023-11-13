"use client";

import { ScrollParallax } from "react-just-parallax";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import AboutSvg from "@/lib/AboutSvg";

const aldhabi = localFont({
  src: "../public/fonts/Aldhabi.ttf",
  display: "swap",
});

export default function About() {
  return (
    <section
      className="about flex justify-center items-center flex-col min-h-screen overflow-hidden relative"
      id="about-us"
    >
      <AboutSvg />
      <ScrollParallax>
        <h2
          className={`${aldhabi.className} min-[290px]:text-7xl md:text-[15rem] text-center font-black`}
        >
          ABOUT US
        </h2>
      </ScrollParallax>
      <p className="leading-[3rem] max-w-5xl text-center text-4xl relative z-10">
        We are part of byotat real estate. Byotat is a leading companyin thhe
        field of real estate marketing. Projects marketing and marketing
        consultancy.
      </p>
    </section>
  );
}
