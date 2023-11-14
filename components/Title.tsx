"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";

const custom = localFont({
  src: "../public/fonts/custom.ttf",
  display: "swap",
});

export default function Title() {
  const { scrollYProgress } = useScroll();
  const xLeft = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <section className="title min-h-[50vh] overflow-hidden flex justify-around items-center">
      <div className="headings">
        <motion.h2 className={`${custom.className}`} style={{ x: xLeft }}>
          picky
        </motion.h2>
        <motion.h2 className={`${custom.className}`} style={{ x: xRight }}>
          properties
        </motion.h2>
      </div>
    </section>
  );
}
