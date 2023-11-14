import HeroImg from "@/lib/HeroImg";
import TourBtn from "@/lib/TourBtn";
import Image from "next/image";
import localFont from "next/font/local";

const custom = localFont({
  src: "../public/fonts/custom.ttf",
  display: "swap",
});

export default function Hero() {
  return (
    <section
      className="hero flex justify-center items-center flex-col min-[290px]:h-[70vh] md:min-h-screen overflow-hidden relative"
      id="hero"
    >
      <p className="min-[290px]:text-xl md:text-2xl text-center">
        Real Estate Marketing
      </p>
      <Image
        src="/assets/Underline-1.svg"
        alt="underline"
        aria-label="underline"
        width={400}
        height={400}
        loading="lazy"
      />
      <h1
        className={`${custom.className} text-center min-[290px]:text-5xl md:text-9xl leading-[12rem] font-black`}
      >
        Picky Properties
      </h1>
      <TourBtn />
      <HeroImg />
    </section>
  );
}
