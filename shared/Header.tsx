"use client";

import { useState } from "react";
import { ThemeSwitcher } from "@/lib/ThemeSwitcher";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickHome = () => {
    gsap.to(window, { duration: 2, ease: "power4.out", scrollTo: "#home" });
  };
  const handleClickStory = () => {
    gsap.to(window, { duration: 2, ease: "power4.out", scrollTo: "#story" });
  };
  const handleClickServices = () => {
    gsap.to(window, { duration: 2, ease: "power4.out", scrollTo: "#services" });
  };
  const handleClickCta = () => {
    gsap.to(window, { duration: 2, ease: "power4.out", scrollTo: "#cta" });
  };
  return (
    <>
      <Navbar shouldHideOnScroll className="nav-lg">
        <NavbarBrand>
          <Image
            src="/assets/logo.png"
            alt="logo"
            aria-label="logo"
            className="cursor-pointer"
            width={150}
            height={150}
            priority={true}
            onClick={handleClickHome}
          />
        </NavbarBrand>
        <NavbarContent className="flex gap-4" justify="center">
          <NavbarItem isActive>
            <p onClick={handleClickHome}>Home</p>
          </NavbarItem>
          <NavbarItem>
            <p onClick={handleClickStory}>Our Story</p>
          </NavbarItem>
          <NavbarItem>
            <p onClick={handleClickServices}>Services</p>
          </NavbarItem>
          <NavbarItem>
            <p onClick={handleClickCta}>CTA</p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* small screen */}
      <Navbar
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
        className="nav-sm"
      >
        <NavbarBrand>
          <Image
            src="/assets/logo.png"
            alt="logo"
            aria-label="logo"
            className="cursor-pointer"
            width={150}
            height={150}
            priority={true}
            onClick={handleClickHome}
          />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
