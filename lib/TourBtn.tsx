"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import styles from "../styles/tourBtn.module.scss";

export default function TourBtn() {
  const handleClick = () => {
    const driverObj = driver({
      showProgress: true,
      overlayColor: "#03045e",
      steps: [
        {
          element: "#my-button",
          popover: {
            title: "Welcome To Picky Properties Website",
            description:
              "In this tour you will know more about Picky Properties.",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#lg-header",
          popover: {
            title: "Navigation Bar",
            description:
              "Here you can find all the navigation links of the website. And also you can find theme switcher.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#home-page",
          popover: {
            title: "Home Page",
            description: "Here you can find the main content of the website.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#about-page",
          popover: {
            title: "About Us Section",
            description: "Here you can know more who we are.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#story-page",
          popover: {
            title: "Our Story Section",
            description:
              "Here you can know how we started and our deatailed story.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#services-page",
          popover: {
            title: "Services Section",
            description: "Here you can find our services.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#work-page",
          popover: {
            title: "Worked With Section",
            description: "Here you can find the companies that we worked with.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#cta-page",
          popover: {
            title: "CTA Section",
            description: "Here you can Contact us.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#hello-theme-dark-light",
          popover: {
            title: "Theme",
            description: "Here you can change the theme.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#hero",
          popover: {
            title: "Hero Section",
            description: "Here you can see the intro of the website.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#about-us",
          popover: {
            title: "About Us Section",
            description: "Here you can know more who we are.",
            side: "bottom",
            align: "center",
          },
        },
      ],
    });

    driverObj.drive();
  };
  return (
    <div className={`${styles.tour}`}>
      <button id="my-button" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
}
