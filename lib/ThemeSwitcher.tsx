"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BiSun, BiMoon } from "react-icons/bi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="faded" id="theme-switcher">
          Theme
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="light" textValue="light" startContent={<BiSun />}>
          <button onClick={() => setTheme("light")}>Light Mode</button>
        </DropdownItem>
        <DropdownItem key="dark" textValue="dark" startContent={<BiMoon />}>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
