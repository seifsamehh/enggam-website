"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import styles from "../styles/tourBtn.module.scss";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function TourBtn() {
  const handleClick = () => {
    const driverObj = driver({
      showProgress: true,
      overlayColor: "#0056b3",
      steps: [
        {
          element: "#my-button",
          popover: {
            title: "Welcome To Enggam Website",
            description: "In this tour we will show you how to use the website",
            side: "right",
            align: "start",
          },
        },
        {
          element: "#navLg",
          popover: {
            title: "Navbar",
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
            title: "About Page",
            description: "Here you can know more who we are.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#sale-page",
          popover: {
            title: "Sale Page",
            description: "Here you can see all the products on sale.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#categories",
          popover: {
            title: "Our Categories",
            description: "Here you can see all the categories.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#feedback-page",
          popover: {
            title: "Feedback",
            description: "Here you can give us your feedback.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#profile",
          popover: {
            title: "Profile Page",
            description: "Here you can see your profile.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#cart",
          popover: {
            title: "Cart Page",
            description: "Here you can see your cart.",
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
          element: "#home-categories",
          popover: {
            title: "Categories Section",
            description: "Here you can see all the categories.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#sale-home",
          popover: {
            title: "Sale Section",
            description: "Here you can see some of our sale products.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#home-product",
          popover: {
            title: "Products Section",
            description:
              "Here you can see some of our products. And you can view more products by click on view more button.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#story",
          popover: {
            title: "Our Story Section",
            description:
              "Here you can know more about our story and the keys of succuss.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#support",
          popover: {
            title: "Support Section",
            description: "Here you can know more about our support.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#cta",
          popover: {
            title: "Call To Action Section",
            description: "Here you can contact us anytime.",
            side: "top",
            align: "start",
          },
        },
      ],
    });

    driverObj.drive();
  };
  return (
    <div className={`${styles.tour}`}>
      <button
        id="my-button"
        onClick={handleClick}
        className={`${raleway.className}`}
      >
        Start Tour
      </button>
    </div>
  );
}
