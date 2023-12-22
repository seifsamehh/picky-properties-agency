"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";

const Autograf = localFont({
  src: [
    {
      path: "../public/fonts/AutografPersonalUseOnly-mOBm.ttf",
    },
    {
      path: "../public/fonts/AutografPersonalUseOnly-mOBm.woff2",
    },
  ],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);
export default function Message() {
  useGSAP(() => {
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".para",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  });
  return (
    <section className="message min-h-screen overflow-hidden flex justify-center items-center relative">
      <div className="message-content max-w-3xl flex flex-col gap-10 min-[290px]:p-4 md:p-0">
        <p className="para min-[290px]:text-xl md:text-3xl min-[290px]:text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          ratione accusamus ut vitae ipsam eaque sapiente consectetur maiores
          nulla! Voluptatem pariatur delectus officiis ratione cumque
          exercitationem vel, rerum atque iusto? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolor nesciunt enim quam est.
          Voluptatum, nemo libero. Dolorum dicta officia veniam voluptate,
          quasi, doloremque eligendi molestias omnis debitis qui nemo
          repudiandae! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium laudantium commodi dolore vel delectus esse deleniti omnis
          molestias iure ea, quam ut, ipsa neque unde aliquam sint aliquid.
          Perspiciatis, ex! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusantium architecto aliquam commodi magnam nostrum dolore
          quibusdam rerum at possimus, consequuntur doloremque suscipit deleniti
          ipsum, aut reprehenderit repellendus assumenda, laborum
          exercitationem.
        </p>
        <h5 className={`${Autograf.className} text-3xl`}>M.Hammed</h5>
      </div>
      <svg
        className="w-56 h-56 absolute top-10 left-10 min-[290px]:hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 189 189"
      >
        <path
          fill="currentColor"
          d="M87.5 184.7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.7-.7-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M87.5 184.7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.7-.7-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M65.8 163c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M65.8 163c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M44.1 141.3c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M44.1 141.3c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path fill="currentColor" d="M23.7 122.9a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M23.7 122.9a2 2 0 100-4 2 2 0 000 4z"
        />
        <path
          fill="currentColor"
          d="M.6 97.8c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M.6 97.8c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M107 165.3c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M107 165.3c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M85.2 143.6c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M85.2 143.6c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M63.5 121.8c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M63.5 121.8c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path fill="currentColor" d="M43.1 103.5a2 2 0 10.001-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M43.1 103.5a2 2 0 10.001-4 2 2 0 000 4z"
        />
        <path fill="currentColor" d="M21.4 81.7a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M21.4 81.7a2 2 0 100-4 2 2 0 000 4z"
        />
        <path
          fill="currentColor"
          d="M127.8 149.3a2 2 0 10-.001-4.001 2 2 0 00.001 4.001z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M127.8 149.3a2 2 0 10-.001-4.001 2 2 0 00.001 4.001z"
        />
        <path
          fill="currentColor"
          d="M106 127.5a2 2 0 10.001-3.999A2 2 0 00106 127.5z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M106 127.5a2 2 0 10.001-3.999A2 2 0 00106 127.5z"
        />
        <path
          fill="currentColor"
          d="M82.9 102.4c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M82.9 102.4c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M61.2 80.7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M61.2 80.7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M39.4 58.9c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M39.4 58.9c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M145.799 126.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M145.799 126.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M124.1 104.7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M124.1 104.7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M102.299 83c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M102.299 83c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2.1 0-2.8z"
        />
        <path fill="currentColor" d="M82 64.6a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M82 64.6a2 2 0 100-4 2 2 0 000 4z"
        />
        <path
          fill="currentColor"
          d="M58.9 39.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M58.9 39.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M165.2 107c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M165.2 107c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.7-.8-.7-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M143.5 85.3c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M143.5 85.3c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M121.8 63.6c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M121.8 63.6c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path fill="currentColor" d="M101.4 45.2a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M101.4 45.2a2 2 0 100-4 2 2 0 000 4z"
        />
        <path fill="currentColor" d="M79.7 23.5a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M79.7 23.5a2 2 0 100-4 2 2 0 000 4z"
        />
        <path fill="currentColor" d="M186.1 91a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M186.1 91a2 2 0 100-4 2 2 0 000 4z"
        />
        <path fill="currentColor" d="M164.3 69.3a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M164.3 69.3a2 2 0 100-4 2 2 0 000 4z"
        />
        <path
          fill="currentColor"
          d="M141.2 44.1c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M141.2 44.1c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M119.499 22.4c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M119.499 22.4c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8z"
        />
        <path
          fill="currentColor"
          d="M97.7.6c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.7-.8-2 0-2.8z"
        />
        <path
          fill="currentColor"
          fillOpacity=".2"
          d="M97.7.6c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.7-.8-2 0-2.8z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-56 h-56 absolute bottom-10 right-36 min-[290px]:hidden md:block"
        viewBox="0 0 163 160"
      >
        <g fill="currentColor" clipPath="url(#a)">
          <path d="M153.199 6.923V149.86H9.501v9.383h153.131V6.923h-9.433z" />
          <path
            fillOpacity=".2"
            d="M153.199 6.923V149.86H9.501v9.383h153.131V6.923h-9.433z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h162.632v159.244H0z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}
