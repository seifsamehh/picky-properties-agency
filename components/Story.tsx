"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
// import { ScrollParallax } from "react-just-parallax";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  useGSAP(() => {
    gsap.to("#logo-pin", {
      scrollTrigger: {
        trigger: "#logo-pin",
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
    <section
      className="story min-h-screen overflow-hidden relative py-4"
      id="story"
    >
      <div className="stroy-content flex justify-center items-start gap-6 min-[290px]:px-4 md:px-6 min-[290px]:flex-wrap md:flex-nowrap">
        <div className="left max-w-3xl min-h-screen flex justify-between items-start flex-col gap-6">
          <div className="block-box min-[290px]:text-center md:text-left">
            <Chip
              color="primary"
              variant="flat"
              className="dark:text-black dark:bg-[#8aaee0]"
            >
              Since 2000
            </Chip>
            <p className="text-xl leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus consequuntur earum vel harum perspiciatis id
              temporibus, accusamus tempora consectetur quam ratione perferendis
              eligendi. Fuga illo in repellat modi neque!
            </p>
          </div>
          <div className="block-box min-[290px]:text-center md:text-left">
            <Chip
              color="primary"
              variant="flat"
              className="dark:text-black dark:bg-[#8aaee0]"
            >
              Since 2000
            </Chip>
            <p className="text-xl leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus consequuntur earum vel harum perspiciatis id
              temporibus, accusamus tempora consectetur quam ratione perferendis
              eligendi. Fuga illo in repellat modi neque!
            </p>
          </div>
          <div className="block-box min-[290px]:text-center md:text-left">
            <Chip
              color="primary"
              variant="flat"
              className="dark:text-black dark:bg-[#8aaee0]"
            >
              Since 2000
            </Chip>
            <p className="text-xl leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus consequuntur earum vel harum perspiciatis id
              temporibus, accusamus tempora consectetur quam ratione perferendis
              eligendi. Fuga illo in repellat modi neque!
            </p>
          </div>
        </div>
        <div
          className="middle min-h-[80vh] min-[290px]:hidden 2xl:block"
          id="logo-pin"
        >
          <Image
            src="/assets/logo.png"
            alt="logo"
            aria-label="logo"
            className="dark:bg-white p-6 dark:rounded"
            width={400}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
          />
        </div>
        <div className="right max-w-3xl min-h-screen flex justify-between items-start flex-col gap-6">
          <div className="block-box min-[290px]:text-center md:text-left">
            <Chip
              color="primary"
              variant="flat"
              className="dark:text-black dark:bg-[#8aaee0]"
            >
              Since 2000
            </Chip>
            <p className="text-xl leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus consequuntur earum vel harum perspiciatis id
              temporibus, accusamus tempora consectetur quam ratione perferendis
              eligendi. Fuga illo in repellat modi neque!
            </p>
          </div>
          <div className="block-box min-[290px]:text-center md:text-left">
            <Chip
              color="primary"
              variant="flat"
              className="dark:text-black dark:bg-[#8aaee0]"
            >
              Since 2000
            </Chip>
            <p className="text-xl leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus consequuntur earum vel harum perspiciatis id
              temporibus, accusamus tempora consectetur quam ratione perferendis
              eligendi. Fuga illo in repellat modi neque!
            </p>
          </div>
          <div className="block-box min-[290px]:text-center md:text-left">
            <Chip
              color="primary"
              variant="flat"
              className="dark:text-black dark:bg-[#8aaee0]"
            >
              Since 2000
            </Chip>
            <p className="text-xl leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus consequuntur earum vel harum perspiciatis id
              temporibus, accusamus tempora consectetur quam ratione perferendis
              eligendi. Fuga illo in repellat modi neque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
