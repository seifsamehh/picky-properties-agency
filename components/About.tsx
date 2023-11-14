"use client";

import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { motion } from "framer-motion";
// import AboutSvg from "@/lib/AboutSvg";
import localFont from "next/font/local";

const custom = localFont({
  src: "../public/fonts/custom.ttf",
  display: "swap",
});

export default function About() {
  return (
    <section
      className="about flex justify-start items-center flex-col min-h-screen overflow-hidden relative"
      id="about-us"
    >
      <ScrollParallax isAbsolutelyPositioned strength={-0.2}>
        <motion.svg
          width="100%"
          height="auto"
          viewBox="0 0 984 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0"
        >
          <motion.path
            id="path"
            initial={{ pathLength: 0, strokeDashoffset: "3583.49px" }}
            animate={{ pathLength: 1, strokeDashoffset: "0px" }}
            transition={{
              repeat: Infinity, // Animates the path indefinitely
              repeatType: "reverse", // Reverses the animation after each cycle
              ease: "easeInOut", // Uses a linear easing function for smooth transition
              duration: 5, // Duration of each cycle
            }}
            d="M-5.72205e-06 248H39.7333C41.9425 248 43.7333 246.209 43.7333 244V136.512C43.7333 135.297 44.2858 134.148 45.2349 133.389L81.6515 104.261C84.2706 102.166 88.15 104.031 88.15 107.385V244C88.15 246.209 89.9409 248 92.15 248H120.708C122.917 248 124.708 246.209 124.708 244V161.135C124.708 158.926 126.499 157.135 128.708 157.135H177.767C179.976 157.135 181.767 158.926 181.767 161.135V244C181.767 246.209 183.558 248 185.767 248H213.983C216.192 248 217.983 246.209 217.983 244V81.591C217.983 80.53 218.405 79.5124 219.155 78.7623L252.055 45.8689C253.617 44.3072 256.149 44.3072 257.711 45.8689L290.611 78.7623C291.362 79.5124 291.783 80.53 291.783 81.591V244C291.783 246.209 293.574 248 295.783 248H321.95C324.159 248 325.95 246.209 325.95 244V191.879C325.95 189.67 327.741 187.879 329.95 187.879H371.15C373.359 187.879 375.15 189.67 375.15 191.879V244C375.15 246.209 376.941 248 379.15 248H406.683C408.892 248 410.683 246.209 410.683 244V144.738C410.683 142.529 412.474 140.738 414.683 140.738H422.467C423.13 140.738 423.667 140.201 423.667 139.539V139.539C423.667 117.185 441.788 99.0634 464.142 99.0634H474.106C474.931 99.0634 475.6 99.7325 475.6 100.558V136.738C475.6 138.947 477.391 140.738 479.6 140.738H484.583C486.792 140.738 488.583 142.529 488.583 144.738V244C488.583 246.209 490.374 248 492.583 248H518.75C520.959 248 522.75 246.209 522.75 244V52.6968C522.75 49.1334 527.058 47.3486 529.578 49.8681L566.678 86.9606C567.428 87.7108 567.85 88.7283 567.85 89.7893V244C567.85 246.209 569.641 248 571.85 248H594.6C596.809 248 598.6 246.209 598.6 244V186.413C598.6 184.204 600.391 182.413 602.6 182.413H652C654.209 182.413 656 184.204 656 186.413V244C656 246.209 657.791 248 660 248H682.75C684.959 248 686.75 246.209 686.75 244V33.7673C686.75 32.7063 687.172 31.6887 687.922 30.9386L716.039 2.82757C717.601 1.26585 720.133 1.26585 721.695 2.82757L749.811 30.9386C750.562 31.6887 750.983 32.7063 750.983 33.7673V244C750.983 246.209 752.774 248 754.983 248H779.1C781.309 248 783.1 246.209 783.1 244V173.88C783.1 156.708 797.02 142.788 814.192 142.788V142.788C831.363 142.788 845.283 156.708 845.283 173.88V244C845.283 246.209 847.074 248 849.283 248H868.617C870.826 248 872.617 246.209 872.617 244V104.43C872.617 102.221 874.408 100.43 876.617 100.43H936.267C938.476 100.43 940.267 102.221 940.267 104.43V244C940.267 246.209 942.058 248 944.267 248H984"
            strokeWidth="2.5"
            stroke="#00b4d8"
          ></motion.path>
        </motion.svg>
      </ScrollParallax>
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
    </section>
  );
}
