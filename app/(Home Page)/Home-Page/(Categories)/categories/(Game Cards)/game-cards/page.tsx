"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  PubgProduct,
  PubgProducts,
  PubgUCProduct,
  PubgucProducts,
  PubgBattleProduct,
  PubgBattleProducts,
  FreefireDiamondProduct,
  FreefireDiamondProducts,
  TopupFreefireProduct,
  TopupFreefireProducts,
  MaxFreefireProduct,
  MaxFreefireProducts,
  MaxMalaysiaFreefireProduct,
  MaxMalaysiaFreefireProducts,
  FreefireBrazilProduct,
  FreefireBrazilProducts,
  FreefireColombiaProduct,
  FreefireColombiaProducts,
  RobloxProduct,
  RobloxEuropeProducts,
  RobloxUKProducts,
  RobloxUSProducts,
  FortniteProduct,
  FortniteUSProducts,
  LeagueProduct,
  LeagueTurkeyProducts,
  LeagueAustraliaProducts,
  LeagueBrazilProducts,
  MobileLegendsProduct,
  MobileBangProducts,
  MobileDiamondsTopUpProduct,
  MobileDiamondsTopUpProducts,
  LudoProduct,
  LudoGlobalProducts,
  RobloxAustraliaProducts,
  RobloxBrazilProducts,
  RobloxCandaProducts,
  RobloxFranceProducts,
  RobloxGermanyProducts,
  RobloxMalaysiaProducts,
  RobloxSingaporeProducts,
} from "@/common/GameProducts";
import { addToCart } from "@/slices/cartSlice";
import { Toaster, toast } from "sonner";
import HeaderHome from "@/lib/HeaderHome";
import { Tabs, Tab, Card, CardBody, Chip } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../../../../../../../styles/giftCards.scss";
import Link from "next/link";
import Footer from "@/common/Footer";

export default function page() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // pubg products
  const handleAddToCart = (PubgProduct: PubgProduct) => {
    dispatch(addToCart(PubgProduct));
    toast.success("Successfully added to cart", {
      description: `${PubgProduct.name} has been added to your cart.`,
    });
  };
  // freefire products
  const handleAddToCartFreefire = (
    FreefireDiamondProduct: FreefireDiamondProduct
  ) => {
    dispatch(addToCart(FreefireDiamondProduct));
    toast.success("Successfully added to cart", {
      description: `${FreefireDiamondProduct.name} has been added to your cart.`,
    });
  };
  // freefire brazil products
  const handleAddToCartFreefireBrazil = (
    FreefireBrazilProduct: FreefireBrazilProduct
  ) => {
    dispatch(addToCart(FreefireBrazilProduct));
    toast.success("Successfully added to cart", {
      description: `${FreefireBrazilProduct.name} has been added to your cart.`,
    });
  };
  // freefire colombia products
  const handleAddToCartFreefireColombia = (
    FreefireColombiaProduct: FreefireColombiaProduct
  ) => {
    dispatch(addToCart(FreefireColombiaProduct));
    toast.success("Successfully added to cart", {
      description: `${FreefireColombiaProduct.name} has been added to your cart.`,
    });
  };
  // roblox  products
  const handleAddToCartRoblox = (RobloxProduct: RobloxProduct) => {
    dispatch(addToCart(RobloxProduct));
    toast.success("Successfully added to cart", {
      description: `${RobloxProduct.name} has been added to your cart.`,
    });
  };
  // fortnite  products
  const handleAddToCartFortnite = (FortniteProduct: FortniteProduct) => {
    dispatch(addToCart(FortniteProduct));
    toast.success("Successfully added to cart", {
      description: `${FortniteProduct.name} has been added to your cart.`,
    });
  };
  // league  products
  const handleAddToCartLeague = (LeagueProduct: LeagueProduct) => {
    dispatch(addToCart(LeagueProduct));
    toast.success("Successfully added to cart", {
      description: `${LeagueProduct.name} has been added to your cart.`,
    });
  };
  // mobile legends products
  const handleAddToCartMobile = (
    MobileLegendsProduct: MobileLegendsProduct
  ) => {
    dispatch(addToCart(MobileLegendsProduct));
    toast.success("Successfully added to cart", {
      description: `${MobileLegendsProduct.name} has been added to your cart.`,
    });
  };
  // ludo products
  const handleAddToCartLudo = (LudoProduct: LudoProduct) => {
    dispatch(addToCart(LudoProduct));
    toast.success("Successfully added to cart", {
      description: `${LudoProduct.name} has been added to your cart.`,
    });
  };
  return (
    <>
      <HeaderHome />
      <section className="game-cards overflow-hidden">
        <div className="game-hero flex justify-center items-center flex-col min-h-screen relative">
          <h1 className={`${raleway.className} text-8xl text-center`}>
            GAME CARDS
          </h1>
          <Image
            src="https://i.imgur.com/PxTV6dy.png"
            alt="game box"
            aria-label="game box"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="game-products min-h-screen flex justify-center items-center flex-col py-8">
          <Tabs aria-label="Options" size="lg" className="tabs">
            {/* pubg tab */}
            <Tab key="Pubg" title="Pubg">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside pubg */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* Game recharge */}
                    <Tab key="Game Recharge" title="Game Recharge">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {PubgProducts.map((PubgProduct: PubgProduct) => (
                              <div
                                key={PubgProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={PubgProduct.image}
                                  alt={PubgProduct.name}
                                  aria-label={PubgProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {PubgProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {PubgProduct.price} $
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === PubgProduct.id
                                    ) ? (
                                      <button
                                        disabled
                                        className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        Added to Cart
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() =>
                                          handleAddToCart(PubgProduct)
                                        }
                                        className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="mr-2 h-6 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                          />
                                        </svg>
                                        Add to Cart
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* pubg uc */}
                    <Tab key="UC with ID" title="UC with ID">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="pubg-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {PubgucProducts.map(
                              (PubgUCProduct: PubgUCProduct) => (
                                <div
                                  key={PubgUCProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={PubgUCProduct.image}
                                    alt={PubgUCProduct.name}
                                    aria-label={PubgUCProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {PubgUCProduct.name}
                                    </h5>
                                    <Chip color="danger">
                                      Contact Us with your ID
                                    </Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {PubgUCProduct.price} $
                                      </p>
                                      <Link
                                        href="mailto:enggam729@gmail.com"
                                        target="_blank"
                                        title="contact us"
                                        className="rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        Contact Us
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* pubg battlecoin */}
                    <Tab
                      key="Mobile Lite BattleCoin"
                      title="Mobile Lite BattleCoin"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="pubg-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {PubgBattleProducts.map(
                              (PubgBattleProduct: PubgBattleProduct) => (
                                <div
                                  key={PubgBattleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={PubgBattleProduct.image}
                                    alt={PubgBattleProduct.name}
                                    aria-label={PubgBattleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {PubgBattleProduct.name}
                                    </h5>
                                    <Chip color="danger">
                                      Contact Us with your ID
                                    </Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {PubgBattleProduct.price} $
                                      </p>
                                      <Link
                                        href="mailto:enggam729@gmail.com"
                                        target="_blank"
                                        title="contact us"
                                        className="rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        Contact Us
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            {/* freefire tab */}
            <Tab key="FreeFire" title="FreeFire">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside freefire */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* Diamonds Main */}
                    <Tab key="Diamonds Main" title="Diamonds Main">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="free-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {FreefireDiamondProducts.map(
                              (
                                FreefireDiamondProduct: FreefireDiamondProduct
                              ) => (
                                <div
                                  key={FreefireDiamondProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={FreefireDiamondProduct.image}
                                    alt={FreefireDiamondProduct.name}
                                    aria-label={FreefireDiamondProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {FreefireDiamondProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {FreefireDiamondProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === FreefireDiamondProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartFreefire(
                                              FreefireDiamondProduct
                                            )
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* topup id */}
                    <Tab
                      key="Diamonds Topup With ID"
                      title="Diamonds Topup With ID"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="pubg-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {TopupFreefireProducts.map(
                              (TopupFreefireProduct: TopupFreefireProduct) => (
                                <div
                                  key={TopupFreefireProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={TopupFreefireProduct.image}
                                    alt={TopupFreefireProduct.name}
                                    aria-label={TopupFreefireProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {TopupFreefireProduct.name}
                                    </h5>
                                    <Chip color="danger">
                                      Contact Us with your ID
                                    </Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {TopupFreefireProduct.price} $
                                      </p>
                                      <Link
                                        href="mailto:enggam729@gmail.com"
                                        target="_blank"
                                        title="contact us"
                                        className="rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        Contact Us
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* MAX INDONESIA Vouchers */}
                    <Tab
                      key="MAX INDONESIA Vouchers"
                      title="MAX INDONESIA Vouchers"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="max-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {MaxFreefireProducts.map(
                              (MaxFreefireProduct: MaxFreefireProduct) => (
                                <div
                                  key={MaxFreefireProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={MaxFreefireProduct.image}
                                    alt={MaxFreefireProduct.name}
                                    aria-label={MaxFreefireProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {MaxFreefireProduct.name}
                                    </h5>
                                    <Chip color="danger">
                                      Contact Us with your ID
                                    </Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {MaxFreefireProduct.price} $
                                      </p>
                                      <Link
                                        href="mailto:enggam729@gmail.com"
                                        target="_blank"
                                        title="contact us"
                                        className="rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        Contact Us
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* MAX Malaysia Vouchers */}
                    <Tab
                      key="MAX Malaysia Vouchers"
                      title="MAX Malaysia Vouchers"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="max-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {MaxMalaysiaFreefireProducts.map(
                              (
                                MaxMalaysiaFreefireProduct: MaxMalaysiaFreefireProduct
                              ) => (
                                <div
                                  key={MaxMalaysiaFreefireProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={MaxMalaysiaFreefireProduct.image}
                                    alt={MaxMalaysiaFreefireProduct.name}
                                    aria-label={MaxMalaysiaFreefireProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {MaxMalaysiaFreefireProduct.name}
                                    </h5>
                                    <Chip color="danger">
                                      Contact Us with your ID
                                    </Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {MaxMalaysiaFreefireProduct.price} $
                                      </p>
                                      <Link
                                        href="mailto:enggam729@gmail.com"
                                        target="_blank"
                                        title="contact us"
                                        className="rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        Contact Us
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* brazil */}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {FreefireBrazilProducts.map(
                              (
                                FreefireBrazilProduct: FreefireBrazilProduct
                              ) => (
                                <div
                                  key={FreefireBrazilProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={FreefireBrazilProduct.image}
                                    alt={FreefireBrazilProduct.name}
                                    aria-label={FreefireBrazilProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {FreefireBrazilProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {FreefireBrazilProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === FreefireBrazilProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartFreefireBrazil(
                                              FreefireBrazilProduct
                                            )
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* colombia */}
                    <Tab key="Colombia" title="Colombia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="colombia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {FreefireColombiaProducts.map(
                              (
                                FreefireColombiaProduct: FreefireColombiaProduct
                              ) => (
                                <div
                                  key={FreefireColombiaProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={FreefireColombiaProduct.image}
                                    alt={FreefireColombiaProduct.name}
                                    aria-label={FreefireColombiaProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {FreefireColombiaProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {FreefireColombiaProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === FreefireColombiaProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartFreefireColombia(
                                              FreefireColombiaProduct
                                            )
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            {/* roblox tab */}
            <Tab key="Roblox" title="Roblox">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside roblox */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* Europe */}
                    <Tab key="Europen Union" title="Europen Union">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxEuropeProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* uk */}
                    <Tab key="United Kingdom" title="United Kingdom">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxUKProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* usa */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxUSProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxAustraliaProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* Brazil */}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxBrazilProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* Canda */}
                    <Tab key="Canda" title="Canda">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxCandaProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* France */}
                    <Tab key="France" title="France">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxFranceProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* Germany */}
                    <Tab key="Germany" title="Germany">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxGermanyProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* Malaysia */}
                    <Tab key="Malaysia" title="Malaysia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxMalaysiaProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* Singapore */}
                    <Tab key="Singapore" title="Singapore">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RobloxSingaporeProducts.map(
                              (RobloxProduct: RobloxProduct) => (
                                <div
                                  key={RobloxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RobloxProduct.image}
                                    alt={RobloxProduct.name}
                                    aria-label={RobloxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RobloxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {RobloxProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RobloxProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartRoblox(RobloxProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            {/* Fortnite tab */}
            <Tab key="Fortnite" title="Fortnite">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside fortnite */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* usa */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {FortniteUSProducts.map(
                              (FortniteProduct: FortniteProduct) => (
                                <div
                                  key={FortniteProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={FortniteProduct.image}
                                    alt={FortniteProduct.name}
                                    aria-label={FortniteProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {FortniteProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {FortniteProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === FortniteProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartFortnite(
                                              FortniteProduct
                                            )
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            {/* league of legends tab */}
            <Tab key="League of Legends" title="League of Legends">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside league of legends */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* turkey */}
                    <Tab key="Turkey" title="Turkey">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {LeagueTurkeyProducts.map(
                              (LeagueProduct: LeagueProduct) => (
                                <div
                                  key={LeagueProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={LeagueProduct.image}
                                    alt={LeagueProduct.name}
                                    aria-label={LeagueProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {LeagueProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {LeagueProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === LeagueProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartLeague(LeagueProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {LeagueAustraliaProducts.map(
                              (LeagueProduct: LeagueProduct) => (
                                <div
                                  key={LeagueProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={LeagueProduct.image}
                                    alt={LeagueProduct.name}
                                    aria-label={LeagueProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {LeagueProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {LeagueProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === LeagueProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartLeague(LeagueProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* brazil */}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {LeagueBrazilProducts.map(
                              (LeagueProduct: LeagueProduct) => (
                                <div
                                  key={LeagueProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={LeagueProduct.image}
                                    alt={LeagueProduct.name}
                                    aria-label={LeagueProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {LeagueProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {LeagueProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === LeagueProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartLeague(LeagueProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            {/* mobile legends tab */}
            <Tab key="Mobile Legends" title="Mobile Legends">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside mobile legends */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* BANG BANG Pins “Vouchers” */}
                    <Tab
                      key="BANG BANG Pins “Vouchers”"
                      title="BANG BANG Pins “Vouchers”"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {MobileBangProducts.map(
                              (MobileLegendsProduct: MobileLegendsProduct) => (
                                <div
                                  key={MobileLegendsProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={MobileLegendsProduct.image}
                                    alt={MobileLegendsProduct.name}
                                    aria-label={MobileLegendsProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {MobileLegendsProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {MobileLegendsProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === MobileLegendsProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartMobile(
                                              MobileLegendsProduct
                                            )
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    {/* Diamonds TopUp */}
                    <Tab key="Diamonds TopUp" title="Diamonds TopUp">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="top-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {MobileDiamondsTopUpProducts.map(
                              (
                                MobileDiamondsTopUpProduct: MobileDiamondsTopUpProduct
                              ) => (
                                <div
                                  key={MobileDiamondsTopUpProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={MobileDiamondsTopUpProduct.image}
                                    alt={MobileDiamondsTopUpProduct.name}
                                    aria-label={MobileDiamondsTopUpProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {MobileDiamondsTopUpProduct.name}
                                    </h5>
                                    <Chip color="danger">
                                      Contact Us with your ID
                                    </Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {MobileDiamondsTopUpProduct.price} $
                                      </p>
                                      <Link
                                        href="mailto:enggam729@gmail.com"
                                        target="_blank"
                                        title="contact us"
                                        className="rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                      >
                                        Contact Us
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            {/* yalla ludo tab */}
            <Tab key="Yalla ludo" title="Yalla ludo">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside ludo */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* Global */}
                    <Tab key="Global" title="Global">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="ludo-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {LudoGlobalProducts.map(
                              (LudoProduct: LudoProduct) => (
                                <div
                                  key={LudoProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={LudoProduct.image}
                                    alt={LudoProduct.name}
                                    aria-label={LudoProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {LudoProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {LudoProduct.price} $
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === LudoProduct.id
                                      ) ? (
                                        <button
                                          disabled
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          Added to Cart
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            handleAddToCartLudo(LudoProduct)
                                          }
                                          className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                          Add to Cart
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        <Toaster position="top-right" richColors closeButton />
      </section>
      <Footer />
    </>
  );
}
