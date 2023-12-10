"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Chip } from "@nextui-org/react";
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
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ["0", "-100px"]);
  return (
    <section className="heroo overflow-hidden min-h-screen relative flex justify-center items-center">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <motion.div className="hero-content" style={{ translateY }}>
        <motion.h1
          className={`${custom.className} min-[290px]:text-6xl md:text-9xl min-[290px]:text-center md:text-left`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
        >
          Picky
        </motion.h1>
        <motion.h2
          className={`${custom.className} min-[290px]:text-6xl md:text-9xl min-[290px]:text-center md:text-left`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
        >
          Properties
        </motion.h2>
      </motion.div>
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
