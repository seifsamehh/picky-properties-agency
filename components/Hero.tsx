import HeroImg from "@/lib/HeroImg";
import TourBtn from "@/lib/TourBtn";
import Image from "next/image";
import localFont from "next/font/local";

const aldhabi = localFont({
  src: "../public/fonts/Aldhabi.ttf",
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
        className={`${aldhabi.className} text-center min-[290px]:text-7xl md:text-[15rem] leading-[12rem] uppercase font-black`}
      >
        Picky Properties
      </h1>
      <TourBtn />
      <HeroImg />
    </section>
  );
}
