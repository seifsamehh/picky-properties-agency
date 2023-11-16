"use client";

import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { useEffect } from "react";

const custom = localFont({
  src: "../public/fonts/custom.ttf",
  display: "swap",
});

export default function About() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -45]);
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
    <section
      className="about flex justify-start items-center flex-col min-h-screen overflow-hidden relative"
      id="about-us"
    >
      <motion.svg
        className="w-52 h-52 absolute top-0 left-8"
        viewBox="0 0 64 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          rotate: rotate,
        }}
      >
        <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor"></path>
        <path
          d="M1 68L30.9 14.4L62.3 67.1L1 68Z"
          fill="currentColor"
          fillOpacity="0.2"
        ></path>
        <g opacity="0.3">
          <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor"></path>
          <path
            d="M1 68L30.9 14.4L62.3 67.1L1 68Z"
            fill="currentColor"
            fillOpacity="0.2"
          ></path>
        </g>
        <motion.path
          d="M1.1001 54.5L31.0001 0.999999L62.5001 53.6L1.1001 54.5Z"
          stroke="currentColor"
          strokeMiterlimit="10"
          initial={{ pathLength: 0 }} // Initial state of the animation
          animate={controls} // Use the controls from useAnimation
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.path>
        <path
          d="M1.1001 54.5L31.0001 0.999999L62.5001 53.6L1.1001 54.5Z"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeMiterlimit="10"
        ></path>
      </motion.svg>
      <MouseParallax strength={0.05}>
        <h2
          className={`${custom.className} min-[290px]:text-7xl md:text-9xl text-center font-black`}
        >
          About Us
        </h2>
      </MouseParallax>
      <p className="leading-[3rem] max-w-5xl text-center min-[290px]:text-2xl md:text-3xl min-[290px]:px-2 md:px-0 relative z-10">
        BYOTAT is a leading company in the field of real estate marketing,
        projects marketing and marketing consultancy. BYOTAT has been founded as
        a joint venture by a group of skilled workers in this field to provide a
        collection of real estate services in new vision and in different ideas
        based on our belief in the importance of having specialized companies in
        the Egyptian market take upon themselves the task itself and then work
        to develop and to add it, and we have decided to be on of those.
      </p>
      <ScrollParallax isAbsolutelyPositioned strength={-0.2}>
        <Image
          src="/assets/aboutImg.webp"
          alt="about image"
          aria-label="about image"
          className="hero-img absolute"
          style={{ bottom: "-15%" }}
          title="cube"
          width={700}
          height={700}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM89eFHPQAIcQMzAVtK4gAAAABJRU5ErkJggg=="
        />
      </ScrollParallax>
    </section>
  );
}
