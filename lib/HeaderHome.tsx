"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import {
  HiChevronDown,
  HiOutlineGift,
  HiOutlineInformationCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { BiJoystick, BiHomeAlt, BiCategory } from "react-icons/bi";
import { LiaCcVisa } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

export default function HeaderHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* large screen */}
      <Navbar
        shouldHideOnScroll
        className="bg-primary text-background lg-navbar"
        id="navLg"
      >
        <NavbarBrand className="basis-full">
          <Image
            src="/enggam-white.png"
            alt="logo"
            aria-label="logo"
            className="cursor-pointer"
            width={150}
            height={150}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          />
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4 nav-links" justify="center">
          <NavbarItem isActive>
            <Link
              href="/Home-Page"
              className="text-white flex justify-center items-center gap-1"
              id="home-page"
              aria-label="Home"
            >
              <BiHomeAlt />
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/Home-Page/about-us"
              className="text-white flex justify-center items-center gap-1"
              id="about-page"
              aria-label="About Us"
            >
              <HiOutlineInformationCircle />
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/Home-Page/sale-page"
              className="text-white flex justify-center items-center gap-1"
              id="sale-page"
              aria-label="Sale"
            >
              <HiOutlineShoppingCart />
              Sale
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger id="categories">
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-background text-lg"
                  endContent={<HiChevronDown size={16} />}
                  radius="sm"
                  variant="solid"
                >
                  <BiCategory />
                  Categories
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="enggam categories"
              className="w-[340px] rounded-md"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                as={Link}
                href="/Home-Page/categories/gift-cards"
                key="Gift-Cards"
                startContent={<HiOutlineGift />}
                aria-label="Gift Cards"
              >
                Gift Cards
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="/Home-Page/categories/game-cards"
                key="Game-Cards"
                startContent={<BiJoystick />}
                aria-label="Game Cards"
              >
                Game Cards
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="/Home-Page/categories/payment-cards"
                key="Another-Cards"
                startContent={<LiaCcVisa />}
                aria-label="Another Cards"
              >
                Another Cards
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link
              href="/Home-Page/feedback"
              className="text-white flex justify-center items-center gap-1"
              id="feedback-page"
              aria-label="Feedback"
            >
              <VscFeedback />
              Feedback
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="items-center">
          <NavbarItem className="lg:flex" id="profile">
            <UserButton afterSignOutUrl="/" />
          </NavbarItem>
          <NavbarItem className="lg:flex" id="cart">
            <Link href="/Home-Page/cart" title="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-bag"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
              </svg>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* small screen */}
      <Navbar
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
        className="bg-primary text-background sm-navbar"
      >
        <NavbarBrand>
          <Image
            src="/enggam-white.png"
            alt="logo"
            aria-label="logo"
            className="cursor-pointer"
            width={150}
            height={150}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        {/* menu */}
        <NavbarMenu className="bg-primary menu">
          <NavbarMenuItem>
            <Link
              href="/Home-Page"
              aria-label="Home"
              className="flex justify-start items-center gap-1"
            >
              <BiHomeAlt />
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/Home-Page/about-us"
              aria-label="About Us"
              className="flex justify-start items-center gap-1"
            >
              <HiOutlineInformationCircle />
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/Home-Page/sale-page"
              aria-label="Sale"
              className="flex justify-start items-center gap-1"
            >
              <HiOutlineShoppingCart />
              Sale
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/Home-Page/categories/gift-cards"
              aria-label="Gift Cards"
              className="flex justify-start items-center gap-1"
            >
              <HiOutlineGift />
              Gift Cards
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/Home-Page/categories/game-cards"
              aria-label="Game Cards"
              className="flex justify-start items-center gap-1"
            >
              <BiJoystick />
              Game Cards
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/Home-Page/categories/payment-cards"
              aria-label="Another Cards"
              className="flex justify-start items-center gap-1"
            >
              <LiaCcVisa />
              Another Cards
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/Home-Page/feedback"
              aria-label="Feedback"
              className="flex justify-start items-center gap-1"
            >
              <VscFeedback />
              Feedback
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <UserButton afterSignOutUrl="/" />
          </NavbarMenuItem>
          <NavbarItem className="lg:flex" id="cart">
            <Link
              href="/Home-Page/cart"
              title="cart"
              className="flex justify-start items-center gap-1"
            >
              Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-bag"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
              </svg>
            </Link>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
