"use client";

import { useState } from "react";
import { ThemeSwitcher } from "@/lib/ThemeSwitcher";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar shouldHideOnScroll className="nav-lg">
        <NavbarBrand>
          <Image
            src="/assets/logo.png"
            alt="logo"
            aria-label="logo"
            width={150}
            height={150}
            priority={true}
          />
        </NavbarBrand>
        <NavbarContent className="flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link href="/" aria-current="page">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/our-story">Our Story</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/services">Services</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/cooperated">Cooperated With</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/cta">CTA</Link>
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
            width={150}
            height={150}
            priority={true}
          />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarMenu className="menu">
            <NavbarMenuItem>
              <Link href="/">Home</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/our-story">Our Story</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/services">Services</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/cooperated">Cooperated With</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/cta">CTA</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <ThemeSwitcher />
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
    </>
  );
}
