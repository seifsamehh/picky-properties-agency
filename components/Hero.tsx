"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Chip } from "@nextui-org/react";
import { ScrollParallax } from "react-just-parallax";
import localFont from "next/font/local";

const custom = localFont({
  src: [
    {
      path: "../public/fonts/custom.woff2",
    },
    {
      path: "../public/fonts/custom.ttf",
    },
  ],
  display: "swap",
});

export default function Hero() {
  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 2,
      stagger: 0.5,
      ease: "power4.out",
    });
  });
  return (
    <section className="heroo overflow-hidden min-h-screen relative flex justify-center items-center flex-col gap-6">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ScrollParallax strength={-0.3}>
        <svg
          className="w-10 h-10 hero-svg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 87 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.007 0.992676L43.4657 17.602C43.8567 31.7627 55.2441 43.1501 69.4047 43.5411L86.0141 43.9997L69.4047 44.4583C55.2441 44.8493 43.8567 56.2368 43.4657 70.3974L43.007 87.0068L42.5484 70.3974C42.1574 56.2368 30.77 44.8493 16.6093 44.4583L0 43.9997L16.6093 43.5411C30.77 43.1501 42.1574 31.7627 42.5484 17.602L43.007 0.992676Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M43.007 0.992676L43.4657 17.602C43.8567 31.7627 55.2441 43.1501 69.4047 43.5411L86.0141 43.9997L69.4047 44.4583C55.2441 44.8493 43.8567 56.2368 43.4657 70.3974L43.007 87.0068L42.5484 70.3974C42.1574 56.2368 30.77 44.8493 16.6093 44.4583L0 43.9997L16.6093 43.5411C30.77 43.1501 42.1574 31.7627 42.5484 17.602L43.007 0.992676Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </ScrollParallax>
      <div className="hero-content">
        <h1
          className={`${custom.className} heading min-[290px]:text-6xl md:text-9xl min-[290px]:text-center`}
        >
          Picky
        </h1>
        <h2
          className={`${custom.className} heading min-[290px]:text-6xl md:text-9xl min-[290px]:text-center`}
        >
          Properties
        </h2>
      </div>
      <Chip
        color="primary"
        variant="flat"
        className="absolute bottom-24 left-auto dark:text-black dark:bg-[#8aaee0]"
      >
        Scroll To Start Our Journey
      </Chip>
    </section>
  );
}
