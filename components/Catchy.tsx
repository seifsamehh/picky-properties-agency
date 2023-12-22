"use client";

import { ScrollParallax } from "react-just-parallax";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Catchy() {
  useGSAP(() => {
    gsap.to(".catchy-left", {
      scrollTrigger: {
        trigger: ".catchy-left",
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
      duration: 10,
      ease: "none",
    });
  });
  return (
    <section className="catchy min-h-screen overflow-hidden flex justify-around items-start min-[290px]:flex-wrap md:flex-nowrap">
      <div className="left catchy-left min-[290px]:h-full md:h-[70vh]">
        <p className="max-w-5xl min-[290px]:text-3xl md:text-5xl min-[290px]:text-center md:text-left min-[290px]:px-4 md:px-0">
          You may see that all of these shades are blue, but this is not true
          because{" "}
          <span className="font-black text-[#638ecb] dark:text-[#6dcff6]">
            we are so picky about details.
          </span>
        </p>
      </div>
      <div className="right">
        <div className="colors min-h-screen flex justify-center items-center gap-5">
          <ScrollParallax strength={-0.9}>
            <div className="color min-[290px]:w-12 md:w-20 min-[290px]:h-[50vh] md:h-screen bg-[#6dcff6]"></div>
          </ScrollParallax>
          <ScrollParallax strength={-0.8}>
            <div className="color min-[290px]:w-12 md:w-20 min-[290px]:h-[50vh] md:h-screen bg-[#00bff3]"></div>
          </ScrollParallax>
          <ScrollParallax strength={-0.7}>
            <div className="color min-[290px]:w-12 md:w-20 min-[290px]:h-[50vh] md:h-screen bg-[#00aeef]"></div>
          </ScrollParallax>
          <ScrollParallax strength={-0.6}>
            <div className="color min-[290px]:w-12 md:w-20 min-[290px]:h-[50vh] md:h-screen bg-[#0076a3] dark:bg-[#38a1ca]"></div>
          </ScrollParallax>
          <ScrollParallax strength={-0.5}>
            <div className="color min-[290px]:w-12 md:w-20 min-[290px]:h-[50vh] md:h-screen bg-[#005b7f] dark:bg-[#3089ac]"></div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
}
