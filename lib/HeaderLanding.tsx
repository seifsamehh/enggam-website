"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
import { BiJoystick, BiHomeAlt, BiCategory, BiLogIn } from "react-icons/bi";
import { LiaCcVisa } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import Image from "next/image";

export default function HeaderLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* large screen */}
      <Navbar
        shouldHideOnScroll
        className="bg-primary text-background lg-navbar"
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
              href="/"
              className="text-white flex justify-center items-center gap-1"
              aria-label="Home"
            >
              <BiHomeAlt />
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/about-us"
              aria-label="About Us"
              className="text-white flex justify-center items-center gap-1"
            >
              <HiOutlineInformationCircle />
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/sign-in"
              className="text-white flex justify-center items-center gap-1"
              aria-label="Sale"
            >
              <HiOutlineShoppingCart />
              Sale
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
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
                href="/sign-in"
                aria-label="Gift-Cards"
                key="Gift-Cards"
                startContent={<HiOutlineGift />}
              >
                Gift Cards
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="/sign-in"
                aria-label="Game-Cards"
                key="Game-Cards"
                startContent={<BiJoystick />}
              >
                Game Cards
              </DropdownItem>
              <DropdownItem
                as={Link}
                href="/sign-in"
                aria-label="Another-Cards"
                key="Another-Cards"
                startContent={<LiaCcVisa />}
              >
                Another Cards
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link
              href="/sign-in"
              aria-label="Feedback"
              className="text-white flex justify-center items-center gap-1"
            >
              <VscFeedback />
              Feedback
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Link href="/sign-in" className="text-white" aria-label="Login">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/sign-up"
              className="bg-background"
              aria-label="Sign Up"
            >
              Sign Up
            </Button>
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
            <Link href="/" aria-label="Home">
              <BiHomeAlt />
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/about-us" aria-label="About Us">
              <HiOutlineInformationCircle />
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/sign-in" aria-label="sale">
              <HiOutlineShoppingCart />
              sale
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/sign-in" aria-label="Gift Cards">
              <HiOutlineGift />
              Gift Cards
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/sign-in" aria-label="Game Cards">
              <BiJoystick />
              Game Cards
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/sign-in" aria-label="Another Cards">
              <LiaCcVisa />
              Another Cards
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/sign-in" aria-label="Login">
              <BiLogIn />
              Login
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/sign-up" aria-label="Sign Up">
              <BiLogIn />
              Sign Up
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/sign-in" aria-label="Feedback">
              <VscFeedback />
              Feedback
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
