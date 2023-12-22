"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "../styles/services.module.scss";
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

gsap.registerPlugin(ScrollTrigger);
export default function Services() {
  useGSAP(() => {
    gsap.to(".box", {
      y: -100,
      stagger: 2,
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      duration: 5,
      ease: "none",
    });
  });
  return (
    <section
      className={`${styles.services} services overflow-hidden min-h-[170vh] flex justify-center items-center bg-[#395086] text-[#f0f3fa] dark:bg-[#f0f3fa] dark:text-[#395086]`}
      id="services"
    >
      <div className="boxs flex justify-center items-center gap-4 flex-wrap min-[290px]:pt-6 md:pt-0">
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>01</h3>
          <h4 className={`${custom.className} text-3xl`}>
            Projects Management
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>02</h3>
          <h4 className={`${custom.className} text-3xl`}>Projects Marketing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>03</h3>
          <h4 className={`${custom.className} text-3xl`}>Corporate Services</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>04</h3>
          <h4 className={`${custom.className} text-3xl`}>Resale</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>05</h3>
          <h4 className={`${custom.className} text-3xl`}>Leasing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>06</h3>
          <h4 className={`${custom.className} text-3xl`}>Repricing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>07</h3>
          <h4 className={`${custom.className} text-3xl`}>
            Inventory Management
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>08</h3>
          <h4 className={`${custom.className} text-3xl`}>Market Researches</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>09</h3>
          <h4 className={`${custom.className} text-3xl`}>Market Analysis</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>10</h3>
          <h4 className={`${custom.className} text-3xl`}>Sales Forcasting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>11</h3>
          <h4 className={`${custom.className} text-3xl`}>
            Market & Sales Consultancy
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
        <div className="box min-[290px]:w-[90%] md:w-1/4 md:h-72 bg-[#f0f3fa] text-[#395086] dark:bg-[#395086] dark:text-[#f0f3fa] p-4 rounded-md flex justify-around items-start flex-col">
          <h3 className={`${custom.className} text-5xl font-black`}>12</h3>
          <h4 className={`${custom.className} text-3xl`}>
            Market & Sales Solutions
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            sunt tempora nobis optio quo cum, provident recusandae iure rerum
            repellat unde, assumenda repudiandae, alias quibusdam a voluptatem.
            Voluptatum, necessitatibus?
          </p>
        </div>
      </div>
    </section>
  );
}
