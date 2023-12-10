"use client";

import { ScrollParallax } from "react-just-parallax";

export default function Catchy() {
  return (
    <section className="catchy min-h-screen overflow-hidden flex justify-around items-center min-[290px]:flex-wrap md:flex-nowrap">
      <div className="left">
        <p className="max-w-5xl text-5xl min-[290px]:text-center md:text-left">
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
