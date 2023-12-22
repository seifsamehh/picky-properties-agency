"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
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
export default function Footer() {
  const currentYear = new Date().getFullYear();
  useGSAP(() => {
    gsap.from(".picky", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".picky",
        start: "top 80%", // Adjust the start position according to your needs
        end: "bottom 20%", // Adjust the end position according to your needs
        scrub: true,
      },
    });
  });
  return (
    <footer className="footer min-h-screen overflow-hidden flex justify-around items-start flex-col p-8 bg-[#395086] text-[#f0f3fa] dark:bg-[#f0f3fa] dark:text-[#395086]">
      <div className="top">
        <h4 className={`${custom.className} picky`}>
          ( We are so picky about details... )
        </h4>
      </div>
      <div className="middle">
        <div className="middle-content">
          <div className="cta" id="cta">
            <h5 className={`${custom.className}`}>CONTACT US TODAY!</h5>
            <Link
              href="mailto:seiffsameh00@gmail.com"
              target="_blank"
              title="contact us"
              className="bg-[#f0f3fa] text-[#395086] py-2 px-4 rounded-md"
            >
              <button>Send Us A Message Now</button>
            </Link>
          </div>
          <div className="informations flex justify-between items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-12 md:gap-0">
            <div className="address">
              <h6 className={`${custom.className}`}>Visit Us</h6>
              <p className="max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui,
                esse, amet laborum aliquam fugit ab veniam natus quam molestias,
                corrupti alias eum eveniet minus. Ullam maxime expedita cumque
                quam!
              </p>
            </div>
            <div className="call">
              <h6 className={`${custom.className}`}>Call Us</h6>
              <div className="mobiles">
                <p>0123456789</p>
                <p>0123456789</p>
              </div>
            </div>
            <div className="mail">
              <h6 className={`${custom.className}`}>Write Us</h6>
              <div className="mails">
                <p>seiffsameh00@gmail</p>
                <p>seiffsameh00@gmail</p>
              </div>
            </div>
            <div className="social">
              <h6 className={`${custom.className}`}>Social Media</h6>
              <div className="social-icons flex justify-start items-center gap-5">
                {/*  whatsapp */}
                <Link
                  href="https://wa.me/+201060865699"
                  target="_blank"
                  title="whatsapp"
                  aria-label="whatsapp"
                >
                  <FaWhatsapp />
                </Link>
                {/*  Facebook */}
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  title="facebook"
                  aria-label="facebook"
                >
                  <FiFacebook />
                </Link>
                {/*  linkedin */}
                <Link
                  href="https://www.linkedin.com/in/seif-eldin-sameh-81b8661b7/"
                  target="_blank"
                  title="linkedIn"
                  aria-label="linkedIn"
                >
                  <FiLinkedin />
                </Link>
                {/*  instagram */}
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  title="instagram"
                  aria-label="instagram"
                >
                  <FiInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; {currentYear}. All Rights Reserved.</p>
        <p>
          Developed by
          <br />
          <Link
            href="https://seif-sameh-mern.vercel.app/"
            target="_blank"
            title="Visit Seif's website"
            className={`${Autograf.className}`}
          >
            Seif Eldin Sameh
          </Link>
        </p>
      </div>
    </footer>
  );
}
