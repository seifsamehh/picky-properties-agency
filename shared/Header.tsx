"use client";

import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { ThemeSwitcher } from "@/lib/ThemeSwitcher";

export default function Header() {
  return (
    <>
      {/* lg screen */}
      <header className="lg-header" id="lg-header">
        <Navbar shouldHideOnScroll className="nav">
          <NavbarBrand>
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              aria-label="logo"
              title="logo"
              width={150}
              height={150}
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM89eFHPQAIcQMzAVtK4gAAAABJRU5ErkJggg=="
            />
          </NavbarBrand>
          <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem isActive aria-current="page">
              <p
                className="cursor-pointer"
                id="home-page"
                aria-label="home"
                title="home"
                onClick={(event) => {
                  event.preventDefault();
                  const homeSection = document.querySelector("#home");
                  homeSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                HOME
              </p>
            </NavbarItem>
            <NavbarItem>
              <p
                className="cursor-pointer"
                id="about-page"
                aria-label="about us"
                title="about us"
                onClick={(event) => {
                  event.preventDefault();
                  const aboutSection = document.querySelector("#about-us");
                  aboutSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                ABOUT US
              </p>
            </NavbarItem>
            <NavbarItem>
              <p
                className="cursor-pointer"
                id="story-page"
                aria-label="our story"
                title="our story"
                onClick={(event) => {
                  event.preventDefault();
                  const storySection = document.querySelector("#story");
                  storySection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                OUR STORY
              </p>
            </NavbarItem>
            <NavbarItem>
              <p
                className="cursor-pointer"
                id="services-page"
                aria-label="our services"
                title="our services"
                onClick={(event) => {
                  event.preventDefault();
                  const serviceSection = document.querySelector("#service");
                  serviceSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                OUR SERVICES
              </p>
            </NavbarItem>
            <NavbarItem>
              <p
                className="cursor-pointer"
                id="work-page"
                aria-label="worked with"
                title="worked with"
                onClick={(event) => {
                  event.preventDefault();
                  const workSection = document.querySelector("#work");
                  workSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                WORKED WITH
              </p>
            </NavbarItem>
            <NavbarItem>
              <p
                className="cursor-pointer"
                id="cta-page"
                aria-label="cta"
                title="cta"
                onClick={(event) => {
                  event.preventDefault();
                  const ctaSection = document.querySelector("#cta");
                  ctaSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CTA
              </p>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>
      {/* sm screen */}
      <header className="sm-header">
        <Navbar shouldHideOnScroll className="nav">
          <NavbarBrand>
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              aria-label="logo"
              title="logo"
              width={150}
              height={150}
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM89eFHPQAIcQMzAVtK4gAAAABJRU5ErkJggg=="
            />
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>
    </>
  );
}
