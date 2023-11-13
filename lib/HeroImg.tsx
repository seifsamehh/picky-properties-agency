"use client";

import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";

export default function HeroImg() {
  return (
    <ScrollParallax
      isAbsolutelyPositioned
      lerpEase={0.09}
      strength={-0.6}
      zIndex={-1}
    >
      <Image
        src="/assets/heroImg.webp"
        alt="hero image"
        aria-label="hero image"
        className="hero-img absolute bottom-0"
        width={700}
        height={700}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM89eFHPQAIcQMzAVtK4gAAAABJRU5ErkJggg=="
      />
    </ScrollParallax>
  );
}
