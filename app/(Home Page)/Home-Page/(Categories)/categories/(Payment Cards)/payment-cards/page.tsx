"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  NeosurfProduct,
  AustraliaNeosurfProducts,
  EuropeNeosurfProducts,
  OpenbucksProduct,
  OpenbucksProducts,
  AstroProduct,
  EgyptAstroProducts,
  EmiratesAstroProducts,
  SaudiAstroProducts,
  USAstroProducts,
  FlexepinProduct,
  AustraliaFlexepinProducts,
  CandaFlexepinProducts,
  EuropeFlexepinProducts,
  MyPrepaidProduct,
  CadProducts,
  MasterMyprepaidProducts,
  VisaMyprepaidProducts,
  PerfectMoneyProduct,
  EuroVouchersPerfectProducts,
  USDVouchersPerfectProducts,
  WebMoneyProduct,
  WebMoneyProducts,
  AmazonProduct,
  AmazonProductSpecial,
  AmazonUsaProducts,
  AmazonUkProducts,
  AmazonAustraliaProducts,
  AmazonCandaProducts,
  AmazonCandaSpecialProducts,
  AmazonUAEProducts,
  AmazonUAESpecialProducts,
  AmazonIEProducts,
  AmazonLUProducts,
  AmazonGermanyProducts,
  NoonProduct,
  NoonSaudiProducts,
  NoonUaeProducts,
  EzpinProduct,
  EzpinProducts,
} from "@/common/PaymentProducts";
import { addToCart } from "@/slices/cartSlice";
import { Toaster, toast } from "sonner";
import Footer from "@/common/Footer";
import HeaderHome from "@/lib/HeaderHome";
import { Tabs, Tab, Card, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../../../../../../../styles/giftCards.scss";
import Link from "next/link";
import { useState } from "react";

const USD_TO_EGP_RATE = 47.78;
export default function page() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const convertCurrency = (price: number): string => {
    if (selectedCurrency === "EGP") {
      return (price * USD_TO_EGP_RATE).toFixed(2);
    }
    return price.toFixed(2);
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // neosurf products
  const handleAddToCartNeosurf = (NeosurfProduct: NeosurfProduct) => {
    dispatch(addToCart(NeosurfProduct));
    toast.success("Successfully added to cart", {
      description: `${NeosurfProduct.name} has been added to your cart.`,
    });
  };
  // openbucks products
  const handleAddToCartOpenbucks = (OpenbucksProduct: OpenbucksProduct) => {
    dispatch(addToCart(OpenbucksProduct));
    toast.success("Successfully added to cart", {
      description: `${OpenbucksProduct.name} has been added to your cart.`,
    });
  };
  // astropay products
  const handleAddToCartAstro = (AstroProduct: AstroProduct) => {
    dispatch(addToCart(AstroProduct));
    toast.success("Successfully added to cart", {
      description: `${AstroProduct.name} has been added to your cart.`,
    });
  };
  // flexepin products
  const handleAddToCartFlexepin = (FlexepinProduct: FlexepinProduct) => {
    dispatch(addToCart(FlexepinProduct));
    toast.success("Successfully added to cart", {
      description: `${FlexepinProduct.name} has been added to your cart.`,
    });
  };
  // myprepaid products
  const handleAddToCartMyPrepaid = (MyPrepaidProduct: MyPrepaidProduct) => {
    dispatch(addToCart(MyPrepaidProduct));
    toast.success("Successfully added to cart", {
      description: `${MyPrepaidProduct.name} has been added to your cart.`,
    });
  };
  // perfect money products
  const handleAddToCartPerfectMoney = (
    PerfectMoneyProduct: PerfectMoneyProduct
  ) => {
    dispatch(addToCart(PerfectMoneyProduct));
    toast.success("Successfully added to cart", {
      description: `${PerfectMoneyProduct.name} has been added to your cart.`,
    });
  };
  // web money products
  const handleAddToCartWebMoney = (WebMoneyProduct: WebMoneyProduct) => {
    dispatch(addToCart(WebMoneyProduct));
    toast.success("Successfully added to cart", {
      description: `${WebMoneyProduct.name} has been added to your cart.`,
    });
  };

  // amazon products
  const handleAddToCartAmazon = (AmazonProduct: AmazonProduct) => {
    dispatch(addToCart(AmazonProduct));
    toast.success("Successfully added to cart", {
      description: `${AmazonProduct.name} has been added to your cart.`,
    });
  };

  // noon products
  const handleAddToCartNoon = (NoonProduct: NoonProduct) => {
    dispatch(addToCart(NoonProduct));
    toast.success("Successfully added to cart", {
      description: `${NoonProduct.name} has been added to your cart.`,
    });
  };

  // ezpin products
  const handleAddToCartEzpin = (EzpinProduct: EzpinProduct) => {
    dispatch(addToCart(EzpinProduct));
    toast.success("Successfully added to cart", {
      description: `${EzpinProduct.name} has been added to your cart.`,
    });
  };
  return (
    <>
      <HeaderHome />
      <section className="payment-cards overflow-hidden">
        <div className="payment-hero flex justify-center items-center flex-col min-h-screen relative">
          <h1
            className={`${raleway.className} min-[290px]:text-6xl md:text-8xl text-center`}
          >
            ANOTHER CARDS
          </h1>
          <Image
            src="https://i.imgur.com/a6tUu6Z.png"
            alt="payment box"
            aria-label="payment box"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="payment-products min-h-screen flex justify-center items-center gap-4 flex-col py-8">
          <div className="hidden">
            <select
              value={selectedCurrency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
              className="bg-[#ff474d] text-white py-2 px-4 rounded-md"
            >
              <option value="USD">USD</option>
              <option value="EGP">EGP</option>
            </select>
          </div>
          <Tabs aria-label="Options" size="lg" className="tabs">
            {/* Neosurf tab */}
            <Tab key="Neosurf" title="Neosurf">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside neosurf */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaNeosurfProducts.map(
                              (NeosurfProduct: NeosurfProduct) => (
                                <div
                                  key={NeosurfProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NeosurfProduct.image}
                                    alt={NeosurfProduct.name}
                                    aria-label={NeosurfProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NeosurfProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NeosurfProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NeosurfProduct.id
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
                                            handleAddToCartNeosurf(
                                              NeosurfProduct
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
                    {/* europe*/}
                    <Tab key="Europen Union" title="Europen Union">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuropeNeosurfProducts.map(
                              (NeosurfProduct: NeosurfProduct) => (
                                <div
                                  key={NeosurfProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NeosurfProduct.image}
                                    alt={NeosurfProduct.name}
                                    aria-label={NeosurfProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NeosurfProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NeosurfProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NeosurfProduct.id
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
                                            handleAddToCartNeosurf(
                                              NeosurfProduct
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
            {/* Openbucks tab */}
            <Tab key="Openbucks" title="Openbucks">
              <Card className="max-w-7xl">
                <CardBody>
                  <div className="open-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                    {OpenbucksProducts.map(
                      (OpenbucksProduct: OpenbucksProduct) => (
                        <div
                          key={OpenbucksProduct.id}
                          className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                        >
                          <Image
                            src={OpenbucksProduct.image}
                            alt={OpenbucksProduct.name}
                            aria-label={OpenbucksProduct.name}
                            width={500}
                            height={500}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                          />
                          <div className="mt-4 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                              {OpenbucksProduct.name}
                            </h5>
                            <div className="flex items-center justify-between">
                              <p className="text-2xl font-bold text-slate-900">
                                {convertCurrency(OpenbucksProduct.price)}{" "}
                                {selectedCurrency}
                              </p>
                              {cartItems.find(
                                (item: { id: number }) =>
                                  item.id === OpenbucksProduct.id
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
                                    handleAddToCartOpenbucks(OpenbucksProduct)
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
            {/* AstroPay tab */}
            <Tab key="AstroPay" title="AstroPay">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside astropay */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* egypt */}
                    <Tab key="Egypt" title="Egypt">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="egypt-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EgyptAstroProducts.map(
                              (AstroProduct: AstroProduct) => (
                                <div
                                  key={AstroProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AstroProduct.image}
                                    alt={AstroProduct.name}
                                    aria-label={AstroProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AstroProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AstroProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AstroProduct.id
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
                                            handleAddToCartAstro(AstroProduct)
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
                    {/* emirates*/}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesAstroProducts.map(
                              (AstroProduct: AstroProduct) => (
                                <div
                                  key={AstroProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AstroProduct.image}
                                    alt={AstroProduct.name}
                                    aria-label={AstroProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AstroProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AstroProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AstroProduct.id
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
                                            handleAddToCartAstro(AstroProduct)
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
                    {/* saudi*/}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiAstroProducts.map(
                              (AstroProduct: AstroProduct) => (
                                <div
                                  key={AstroProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AstroProduct.image}
                                    alt={AstroProduct.name}
                                    aria-label={AstroProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AstroProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AstroProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AstroProduct.id
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
                                            handleAddToCartAstro(AstroProduct)
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
                    {/* us*/}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USAstroProducts.map(
                              (AstroProduct: AstroProduct) => (
                                <div
                                  key={AstroProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AstroProduct.image}
                                    alt={AstroProduct.name}
                                    aria-label={AstroProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AstroProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AstroProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AstroProduct.id
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
                                            handleAddToCartAstro(AstroProduct)
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
            {/* flexepin tab */}
            <Tab key="Flexepin" title="Flexepin">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside flexepin */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="australia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaFlexepinProducts.map(
                              (FlexepinProduct: FlexepinProduct) => (
                                <div
                                  key={FlexepinProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={FlexepinProduct.image}
                                    alt={FlexepinProduct.name}
                                    aria-label={FlexepinProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {FlexepinProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(FlexepinProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === FlexepinProduct.id
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
                                            handleAddToCartFlexepin(
                                              FlexepinProduct
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
                    {/* canda*/}
                    <Tab key="Canda" title="Canda">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {CandaFlexepinProducts.map(
                              (FlexepinProduct: FlexepinProduct) => (
                                <div
                                  key={FlexepinProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={FlexepinProduct.image}
                                    alt={FlexepinProduct.name}
                                    aria-label={FlexepinProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {FlexepinProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(FlexepinProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === FlexepinProduct.id
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
                                            handleAddToCartFlexepin(
                                              FlexepinProduct
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
                    {/* europe*/}
                    <Tab key="Europen Union" title="Europen Union">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuropeFlexepinProducts.map(
                              (FlexepinProduct: FlexepinProduct) => (
                                <div
                                  key={FlexepinProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={FlexepinProduct.image}
                                    alt={FlexepinProduct.name}
                                    aria-label={FlexepinProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {FlexepinProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(FlexepinProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === FlexepinProduct.id
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
                                            handleAddToCartFlexepin(
                                              FlexepinProduct
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
            {/* MyPrepaid center tab */}
            <Tab key="MyPrepaid center" title="MyPrepaid center">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside myprepaid */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* cad */}
                    <Tab key="CAD" title="CAD">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="cad-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {CadProducts.map(
                              (MyPrepaidProduct: MyPrepaidProduct) => (
                                <div
                                  key={MyPrepaidProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={MyPrepaidProduct.image}
                                    alt={MyPrepaidProduct.name}
                                    aria-label={MyPrepaidProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {MyPrepaidProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          MyPrepaidProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === MyPrepaidProduct.id
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
                                            handleAddToCartMyPrepaid(
                                              MyPrepaidProduct
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
                    {/* mastercard */}
                    <Tab key="Mastercard" title="Mastercard">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="master-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {MasterMyprepaidProducts.map(
                              (MyPrepaidProduct: MyPrepaidProduct) => (
                                <div
                                  key={MyPrepaidProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={MyPrepaidProduct.image}
                                    alt={MyPrepaidProduct.name}
                                    aria-label={MyPrepaidProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {MyPrepaidProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          MyPrepaidProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === MyPrepaidProduct.id
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
                                            handleAddToCartMyPrepaid(
                                              MyPrepaidProduct
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
                    {/* visa */}
                    <Tab key="Visa" title="Visa">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="visa-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {VisaMyprepaidProducts.map(
                              (MyPrepaidProduct: MyPrepaidProduct) => (
                                <div
                                  key={MyPrepaidProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={MyPrepaidProduct.image}
                                    alt={MyPrepaidProduct.name}
                                    aria-label={MyPrepaidProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {MyPrepaidProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          MyPrepaidProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === MyPrepaidProduct.id
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
                                            handleAddToCartMyPrepaid(
                                              MyPrepaidProduct
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
            {/* perfect money tab */}
            <Tab key="perfect money" title="perfect money">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside perfect money */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* euro vouchers */}
                    <Tab key="Euro Vouchers" title="Euro Vouchers">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="euro-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuroVouchersPerfectProducts.map(
                              (PerfectMoneyProduct: PerfectMoneyProduct) => (
                                <div
                                  key={PerfectMoneyProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={PerfectMoneyProduct.image}
                                    alt={PerfectMoneyProduct.name}
                                    aria-label={PerfectMoneyProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {PerfectMoneyProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          PerfectMoneyProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === PerfectMoneyProduct.id
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
                                            handleAddToCartPerfectMoney(
                                              PerfectMoneyProduct
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
                    {/* usd vouchers */}
                    <Tab key="USD Vouchers" title="USD Vouchers">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="euro-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USDVouchersPerfectProducts.map(
                              (PerfectMoneyProduct: PerfectMoneyProduct) => (
                                <div
                                  key={PerfectMoneyProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={PerfectMoneyProduct.image}
                                    alt={PerfectMoneyProduct.name}
                                    aria-label={PerfectMoneyProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {PerfectMoneyProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          PerfectMoneyProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === PerfectMoneyProduct.id
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
                                            handleAddToCartPerfectMoney(
                                              PerfectMoneyProduct
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
            {/* webmoney tab */}
            <Tab key="webmoney" title="webmoney">
              <Card className="max-w-7xl">
                <CardBody>
                  <div className="web-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                    {WebMoneyProducts.map(
                      (WebMoneyProduct: WebMoneyProduct) => (
                        <div
                          key={WebMoneyProduct.id}
                          className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                        >
                          <Image
                            src={WebMoneyProduct.image}
                            alt={WebMoneyProduct.name}
                            aria-label={WebMoneyProduct.name}
                            width={500}
                            height={500}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                          />
                          <div className="mt-4 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                              {WebMoneyProduct.name}
                            </h5>
                            <div className="flex items-center justify-between">
                              <p className="text-2xl font-bold text-slate-900">
                                {convertCurrency(WebMoneyProduct.price)}{" "}
                                {selectedCurrency}
                              </p>
                              {cartItems.find(
                                (item: { id: number }) =>
                                  item.id === WebMoneyProduct.id
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
                                    handleAddToCartWebMoney(WebMoneyProduct)
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
            {/* Amazon tab */}
            <Tab key="Amazon" title="Amazon">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside Amazon */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* usa */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="usa-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonUsaProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
                    {/* uk*/}
                    <Tab key="United Kingdom" title="United Kingdom">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonUkProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
                    {/* australia*/}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonAustraliaProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
                    {/* Canda*/}
                    <Tab key="Canda" title="Canda">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonCandaProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
                    {/* Canda special*/}
                    <Tab key="Canda special" title="Canda special">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonCandaSpecialProducts.map(
                              (AmazonProductSpecial: AmazonProductSpecial) => (
                                <div
                                  key={AmazonProductSpecial.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProductSpecial.image}
                                    alt={AmazonProductSpecial.name}
                                    aria-label={AmazonProductSpecial.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProductSpecial.name}
                                    </h5>
                                    <Chip color="danger">Contact Us</Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {AmazonProductSpecial.price}
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
                    {/* Germany */}
                    <Tab key="Germany" title="Germany">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonGermanyProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
                    {/* Uae*/}
                    <Tab key="UAE" title="UAE">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonUAEProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
                    {/* uae special*/}
                    <Tab key="UAE special" title="UAE special">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="uae-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonUAESpecialProducts.map(
                              (AmazonProductSpecial: AmazonProductSpecial) => (
                                <div
                                  key={AmazonProductSpecial.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProductSpecial.image}
                                    alt={AmazonProductSpecial.name}
                                    aria-label={AmazonProductSpecial.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProductSpecial.name}
                                    </h5>
                                    <Chip color="danger">Contact Us</Chip>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {AmazonProductSpecial.price}
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
                    {/* Ireland*/}
                    <Tab key="Ireland" title="Ireland">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonIEProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
                    {/* LUXEMBOURG */}
                    <Tab key="LUXEMBOURG" title="LUXEMBOURG">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AmazonLUProducts.map(
                              (AmazonProduct: AmazonProduct) => (
                                <div
                                  key={AmazonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={AmazonProduct.image}
                                    alt={AmazonProduct.name}
                                    aria-label={AmazonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {AmazonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(AmazonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === AmazonProduct.id
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
                                            handleAddToCartAmazon(AmazonProduct)
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
            {/* Noon tab */}
            <Tab key="Noon" title="Noon">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside Noon */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* saudi */}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="usa-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {NoonSaudiProducts.map(
                              (NoonProduct: NoonProduct) => (
                                <div
                                  key={NoonProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NoonProduct.image}
                                    alt={NoonProduct.name}
                                    aria-label={NoonProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NoonProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NoonProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NoonProduct.id
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
                                            handleAddToCartNoon(NoonProduct)
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
                    {/* uae */}
                    <Tab key="UAE" title="UAE">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="usa-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {NoonUaeProducts.map((NoonProduct: NoonProduct) => (
                              <div
                                key={NoonProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={NoonProduct.image}
                                  alt={NoonProduct.name}
                                  aria-label={NoonProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {NoonProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(NoonProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === NoonProduct.id
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
                                          handleAddToCartNoon(NoonProduct)
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
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            {/* Ezpin tab */}
            <Tab key="Ezpin" title="Ezpin">
              <Card className="max-w-7xl">
                <CardBody>
                  <div className="usa-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                    {EzpinProducts.map((EzpinProduct: EzpinProduct) => (
                      <div
                        key={EzpinProduct.id}
                        className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                      >
                        <Image
                          src={EzpinProduct.image}
                          alt={EzpinProduct.name}
                          aria-label={EzpinProduct.name}
                          width={500}
                          height={500}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                        />
                        <div className="mt-4 pb-5">
                          <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                            {EzpinProduct.name}
                          </h5>
                          <div className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-slate-900">
                              {convertCurrency(EzpinProduct.price)}{" "}
                              {selectedCurrency}
                            </p>
                            {cartItems.find(
                              (item: { id: number }) =>
                                item.id === EzpinProduct.id
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
                                  handleAddToCartEzpin(EzpinProduct)
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
          </Tabs>
        </div>
        <Toaster position="top-right" richColors closeButton />
      </section>
      <Footer />
    </>
  );
}
