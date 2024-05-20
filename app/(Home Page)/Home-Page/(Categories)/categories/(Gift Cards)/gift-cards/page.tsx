"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  ItuneProduct,
  ChinaProducts,
  CanadaProducts,
  AustraliaProducts,
  UKProducts,
  USProducts,
  EmiratesProducts,
  SaudiArabiaProducts,
  GermanyProducts,
  GoogleProduct,
  AustraliaGoogleProducts,
  BrazilGoogleProducts,
  EmiratesGoogleProducts,
  GermanyGoogleProducts,
  SaudiArabiaGoogleProducts,
  USGoogleProducts,
  NetflixProduct,
  AustraliaNetflixProducts,
  BrazilNetflixProducts,
  CandaNetflixProducts,
  EmiratesNetflixProducts,
  UKNetflixProducts,
  USNetflixProducts,
  RazerProduct,
  BrazilRazerProducts,
  CandaRazerProducts,
  EuropeRazerProducts,
  MalaysiaRazerProducts,
  TurkeyRazerProducts,
  TurkeyGoogleProducts,
  USRazerProducts,
  SteamProduct,
  AustraliaSteamProducts,
  EmiratesSteamProducts,
  EuropeSteamProducts,
  BrazilSteamProducts,
  KuawitSteamProducts,
  SaudiSteamProducts,
  TurkeySteamProducts,
  UKSteamProducts,
  USSteamProducts,
  PsnProduct,
  AustraliaPsnProducts,
  EmiratesPsnProducts,
  EuropePsnProducts,
  GermanyPsnProducts,
  KuawitPsnProducts,
  SaudiPsnProducts,
  UKPsnProducts,
  USPsnProducts,
  GlobalRazerProducts,
  XboxProduct,
  UKXboxProducts,
  USXboxProducts,
  CandaXboxProducts,
  EmiratesXboxProducts,
  SaudiXboxProducts,
  BrazilXboxProducts,
  AustraliaXboxProducts,
  JapanXboxProducts,
  XboxGoldProduct,
  USXboxGoldProducts,
  CandaXboxGoldProducts,
  SaudiXboxGoldProducts,
  TurkeyXboxGoldProducts,
  BrazilXboxGoldProducts,
  SingaporeXboxGoldProducts,
  XboxGameProduct,
  BrazilXboxGameProducts,
  USXboxGameProducts,
  EmiratesXboxGameProducts,
  SaudiXboxGameProducts,
  XboxUltimateProduct,
  BrazilXboxUltimateProducts,
  USXboxUltimateProducts,
  EuropeXboxUltimateProducts,
  SaudiXboxUltimateProducts,
  RussiaXboxUltimateProducts,
  TurkeyXboxUltimateProducts,
} from "@/common/GiftProducts";
import { addToCart } from "@/slices/cartSlice";
import { Toaster, toast } from "sonner";
import HeaderHome from "@/lib/HeaderHome";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../../../../../../../styles/giftCards.scss";
import Footer from "@/common/Footer";

const USD_TO_EGP_RATE = 47.78;
export default function page() {
  const [selectedCurrency, setSelectedCurrency] = useState("EGP");

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const convertCurrency = (price: number) => {
    if (selectedCurrency === "EGP") {
      return (price * USD_TO_EGP_RATE).toFixed(2);
    }
    return price.toFixed(2);
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // itunes products
  const handleAddToCart = (ItuneProduct: ItuneProduct) => {
    dispatch(addToCart(ItuneProduct));
    toast.success("Successfully added to cart", {
      description: `${ItuneProduct.name} has been added to your cart.`,
    });
  };
  // google products
  const handleAddToCartGoogle = (GoogleProduct: GoogleProduct) => {
    dispatch(addToCart(GoogleProduct));
    toast.success("Successfully added to cart", {
      description: `${GoogleProduct.name} has been added to your cart.`,
    });
  };
  // netflix products
  const handleAddToCartNetflix = (NetflixProduct: NetflixProduct) => {
    dispatch(addToCart(NetflixProduct));
    toast.success("Successfully added to cart", {
      description: `${NetflixProduct.name} has been added to your cart.`,
    });
  };
  // razer products
  const handleAddToCartRazer = (RazerProduct: RazerProduct) => {
    dispatch(addToCart(RazerProduct));
    toast.success("Successfully added to cart", {
      description: `${RazerProduct.name} has been added to your cart.`,
    });
  };
  // steam products
  const handleAddToCartSteam = (SteamProduct: SteamProduct) => {
    dispatch(addToCart(SteamProduct));
    toast.success("Successfully added to cart", {
      description: `${SteamProduct.name} has been added to your cart.`,
    });
  };
  // psn products
  const handleAddToCartPsn = (PsnProduct: PsnProduct) => {
    dispatch(addToCart(PsnProduct));
    toast.success("Successfully added to cart", {
      description: `${PsnProduct.name} has been added to your cart.`,
    });
  };
  // xbox products
  const handleAddToCartXbox = (XboxProduct: XboxProduct) => {
    dispatch(addToCart(XboxProduct));
    toast.success("Successfully added to cart", {
      description: `${XboxProduct.name} has been added to your cart.`,
    });
  };
  // xbox gold products
  const handleAddToCartXboxGold = (XboxGoldProduct: XboxGoldProduct) => {
    dispatch(addToCart(XboxGoldProduct));
    toast.success("Successfully added to cart", {
      description: `${XboxGoldProduct.name} has been added to your cart.`,
    });
  };
  // xbox game pass products
  const handleAddToCartXboxGame = (XboxGameProduct: XboxGameProduct) => {
    dispatch(addToCart(XboxGameProduct));
    toast.success("Successfully added to cart", {
      description: `${XboxGameProduct.name} has been added to your cart.`,
    });
  };
  // xbox ultimate products
  const handleAddToCartXboxUltimate = (
    XboxUltimateProduct: XboxUltimateProduct
  ) => {
    dispatch(addToCart(XboxUltimateProduct));
    toast.success("Successfully added to cart", {
      description: `${XboxUltimateProduct.name} has been added to your cart.`,
    });
  };
  return (
    <>
      <HeaderHome />
      <section className="gift-cards overflow-hidden">
        <div className="gift-hero flex justify-center items-center flex-col min-h-screen relative">
          <h1 className={`${raleway.className} text-8xl text-center`}>
            GIFT CARDS
          </h1>
          <Image
            src="https://i.imgur.com/5Vz5H5r.png"
            alt="gift box"
            aria-label="gift box"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="gift-products min-h-screen flex justify-center items-center gap-4 flex-col py-8">
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
            {/* itune tab */}
            <Tab key="Itunes" title="Itunes">
              <Card className="max-w-7xl">
                <CardBody>
                  {/* inside itunes */}
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* china */}
                    <Tab key="China" title="China">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="china-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {ChinaProducts.map((ItuneProduct: ItuneProduct) => (
                              <div
                                key={ItuneProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={ItuneProduct.image}
                                  alt={ItuneProduct.name}
                                  aria-label={ItuneProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {ItuneProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(ItuneProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === ItuneProduct.id
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
                                          handleAddToCart(ItuneProduct)
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
                    {/* canada */}
                    <Tab key="Canada" title="Canada">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {CanadaProducts.map(
                              (ItuneProduct: ItuneProduct) => (
                                <div
                                  key={ItuneProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={ItuneProduct.image}
                                    alt={ItuneProduct.name}
                                    aria-label={ItuneProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {ItuneProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(ItuneProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === ItuneProduct.id
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
                                            handleAddToCart(ItuneProduct)
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
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaProducts.map(
                              (ItuneProduct: ItuneProduct) => (
                                <div
                                  key={ItuneProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={ItuneProduct.image}
                                    alt={ItuneProduct.name}
                                    aria-label={ItuneProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {ItuneProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(ItuneProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === ItuneProduct.id
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
                                            handleAddToCart(ItuneProduct)
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
                          <div className="uk-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {UKProducts.map((ItuneProduct: ItuneProduct) => (
                              <div
                                key={ItuneProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={ItuneProduct.image}
                                  alt={ItuneProduct.name}
                                  aria-label={ItuneProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {ItuneProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(ItuneProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === ItuneProduct.id
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
                                          handleAddToCart(ItuneProduct)
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
                    {/* usa */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USProducts.map((ItuneProduct: ItuneProduct) => (
                              <div
                                key={ItuneProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={ItuneProduct.image}
                                  alt={ItuneProduct.name}
                                  aria-label={ItuneProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {ItuneProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(ItuneProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === ItuneProduct.id
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
                                          handleAddToCart(ItuneProduct)
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
                    {/* Emirates */}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesProducts.map(
                              (ItuneProduct: ItuneProduct) => (
                                <div
                                  key={ItuneProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={ItuneProduct.image}
                                    alt={ItuneProduct.name}
                                    aria-label={ItuneProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {ItuneProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(ItuneProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === ItuneProduct.id
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
                                            handleAddToCart(ItuneProduct)
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
                    {/* saudi arabia */}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiArabiaProducts.map(
                              (ItuneProduct: ItuneProduct) => (
                                <div
                                  key={ItuneProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={ItuneProduct.image}
                                    alt={ItuneProduct.name}
                                    aria-label={ItuneProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {ItuneProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(ItuneProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === ItuneProduct.id
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
                                            handleAddToCart(ItuneProduct)
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
                    {/* germany */}
                    <Tab key="Germany" title="Germany">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="germany-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {GermanyProducts.map(
                              (ItuneProduct: ItuneProduct) => (
                                <div
                                  key={ItuneProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={ItuneProduct.image}
                                    alt={ItuneProduct.name}
                                    aria-label={ItuneProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {ItuneProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(ItuneProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === ItuneProduct.id
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
                                            handleAddToCart(ItuneProduct)
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
            {/* google play tab */}
            <Tab key="GooglePlay" title="Google Play">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="australia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaGoogleProducts.map(
                              (GoogleProduct: GoogleProduct) => (
                                <div
                                  key={GoogleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={GoogleProduct.image}
                                    alt={GoogleProduct.name}
                                    aria-label={GoogleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {GoogleProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(GoogleProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === GoogleProduct.id
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
                                            handleAddToCartGoogle(GoogleProduct)
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
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilGoogleProducts.map(
                              (GoogleProduct: GoogleProduct) => (
                                <div
                                  key={GoogleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={GoogleProduct.image}
                                    alt={GoogleProduct.name}
                                    aria-label={GoogleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {GoogleProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(GoogleProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === GoogleProduct.id
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
                                            handleAddToCartGoogle(GoogleProduct)
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
                    {/* emirates */}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesGoogleProducts.map(
                              (GoogleProduct: GoogleProduct) => (
                                <div
                                  key={GoogleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={GoogleProduct.image}
                                    alt={GoogleProduct.name}
                                    aria-label={GoogleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {GoogleProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(GoogleProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === GoogleProduct.id
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
                                            handleAddToCartGoogle(GoogleProduct)
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
                    {/* germany */}
                    <Tab key="Germany" title="Germany">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="germany-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {GermanyGoogleProducts.map(
                              (GoogleProduct: GoogleProduct) => (
                                <div
                                  key={GoogleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={GoogleProduct.image}
                                    alt={GoogleProduct.name}
                                    aria-label={GoogleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {GoogleProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(GoogleProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === GoogleProduct.id
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
                                            handleAddToCartGoogle(GoogleProduct)
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
                    {/* saudi arabia */}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiArabiaGoogleProducts.map(
                              (GoogleProduct: GoogleProduct) => (
                                <div
                                  key={GoogleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={GoogleProduct.image}
                                    alt={GoogleProduct.name}
                                    aria-label={GoogleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {GoogleProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(GoogleProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === GoogleProduct.id
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
                                            handleAddToCartGoogle(GoogleProduct)
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
                    {/* turkey*/}
                    <Tab key="Turkey" title="Turkey">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="turkey-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {TurkeyGoogleProducts.map(
                              (GoogleProduct: GoogleProduct) => (
                                <div
                                  key={GoogleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={GoogleProduct.image}
                                    alt={GoogleProduct.name}
                                    aria-label={GoogleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {GoogleProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(GoogleProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === GoogleProduct.id
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
                                            handleAddToCartGoogle(GoogleProduct)
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
                            {USGoogleProducts.map(
                              (GoogleProduct: GoogleProduct) => (
                                <div
                                  key={GoogleProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={GoogleProduct.image}
                                    alt={GoogleProduct.name}
                                    aria-label={GoogleProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {GoogleProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(GoogleProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === GoogleProduct.id
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
                                            handleAddToCartGoogle(GoogleProduct)
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
            {/* Netflix tab */}
            <Tab key="Netflix" title="Netflix">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="australia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaNetflixProducts.map(
                              (NetflixProduct: NetflixProduct) => (
                                <div
                                  key={NetflixProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NetflixProduct.image}
                                    alt={NetflixProduct.name}
                                    aria-label={NetflixProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NetflixProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NetflixProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NetflixProduct.id
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
                                            handleAddToCartNetflix(
                                              NetflixProduct
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
                    {/* brazil */}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilNetflixProducts.map(
                              (NetflixProduct: NetflixProduct) => (
                                <div
                                  key={NetflixProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NetflixProduct.image}
                                    alt={NetflixProduct.name}
                                    aria-label={NetflixProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NetflixProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NetflixProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NetflixProduct.id
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
                                            handleAddToCartNetflix(
                                              NetflixProduct
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
                    {/* canda */}
                    <Tab key="Canda" title="Canda">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {CandaNetflixProducts.map(
                              (NetflixProduct: NetflixProduct) => (
                                <div
                                  key={NetflixProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NetflixProduct.image}
                                    alt={NetflixProduct.name}
                                    aria-label={NetflixProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NetflixProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NetflixProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NetflixProduct.id
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
                                            handleAddToCartNetflix(
                                              NetflixProduct
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
                    {/* emirates */}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesNetflixProducts.map(
                              (NetflixProduct: NetflixProduct) => (
                                <div
                                  key={NetflixProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NetflixProduct.image}
                                    alt={NetflixProduct.name}
                                    aria-label={NetflixProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NetflixProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NetflixProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NetflixProduct.id
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
                                            handleAddToCartNetflix(
                                              NetflixProduct
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
                    {/* uk */}
                    <Tab key="United Kingdom" title="United Kingdom">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="uk-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {UKNetflixProducts.map(
                              (NetflixProduct: NetflixProduct) => (
                                <div
                                  key={NetflixProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NetflixProduct.image}
                                    alt={NetflixProduct.name}
                                    aria-label={NetflixProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NetflixProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NetflixProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NetflixProduct.id
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
                                            handleAddToCartNetflix(
                                              NetflixProduct
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
                    {/* us */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USNetflixProducts.map(
                              (NetflixProduct: NetflixProduct) => (
                                <div
                                  key={NetflixProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={NetflixProduct.image}
                                    alt={NetflixProduct.name}
                                    aria-label={NetflixProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {NetflixProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(NetflixProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === NetflixProduct.id
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
                                            handleAddToCartNetflix(
                                              NetflixProduct
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
            {/* razer gold tab */}
            <Tab key="Razer Gold" title="Razer Gold">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* brazil */}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilRazerProducts.map(
                              (RazerProduct: RazerProduct) => (
                                <div
                                  key={RazerProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RazerProduct.image}
                                    alt={RazerProduct.name}
                                    aria-label={RazerProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RazerProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(RazerProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RazerProduct.id
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
                                            handleAddToCartRazer(RazerProduct)
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
                    {/* canda */}
                    <Tab key="Canda" title="Canda">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {CandaRazerProducts.map(
                              (RazerProduct: RazerProduct) => (
                                <div
                                  key={RazerProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RazerProduct.image}
                                    alt={RazerProduct.name}
                                    aria-label={RazerProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RazerProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(RazerProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RazerProduct.id
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
                                            handleAddToCartRazer(RazerProduct)
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
                    {/* europe */}
                    <Tab key="Europen Union" title="Europen Union">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuropeRazerProducts.map(
                              (RazerProduct: RazerProduct) => (
                                <div
                                  key={RazerProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RazerProduct.image}
                                    alt={RazerProduct.name}
                                    aria-label={RazerProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RazerProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(RazerProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RazerProduct.id
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
                                            handleAddToCartRazer(RazerProduct)
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
                    {/* malaysia */}
                    <Tab key="Malaysia" title="Malaysia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="malaysia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {MalaysiaRazerProducts.map(
                              (RazerProduct: RazerProduct) => (
                                <div
                                  key={RazerProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RazerProduct.image}
                                    alt={RazerProduct.name}
                                    aria-label={RazerProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RazerProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(RazerProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RazerProduct.id
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
                                            handleAddToCartRazer(RazerProduct)
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
                    {/* turkey */}
                    <Tab key="Turkey" title="Turkey">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="turkey-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {TurkeyRazerProducts.map(
                              (RazerProduct: RazerProduct) => (
                                <div
                                  key={RazerProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RazerProduct.image}
                                    alt={RazerProduct.name}
                                    aria-label={RazerProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RazerProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(RazerProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RazerProduct.id
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
                                            handleAddToCartRazer(RazerProduct)
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
                    {/* us */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USRazerProducts.map(
                              (RazerProduct: RazerProduct) => (
                                <div
                                  key={RazerProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RazerProduct.image}
                                    alt={RazerProduct.name}
                                    aria-label={RazerProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RazerProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(RazerProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RazerProduct.id
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
                                            handleAddToCartRazer(RazerProduct)
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
                    {/* global */}
                    <Tab key="Global" title="Global">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="global-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {GlobalRazerProducts.map(
                              (RazerProduct: RazerProduct) => (
                                <div
                                  key={RazerProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={RazerProduct.image}
                                    alt={RazerProduct.name}
                                    aria-label={RazerProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {RazerProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(RazerProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === RazerProduct.id
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
                                            handleAddToCartRazer(RazerProduct)
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
            {/* steam tab */}
            <Tab key="Steam" title="Steam">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="australia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                    {/* emirates */}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                    {/* europe */}
                    <Tab key="Europen Union" title="Europen Union">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuropeSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                          <div className="Brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                    {/* kuawit */}
                    <Tab key="Kuawit" title="Kuawit">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="kuawit-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {KuawitSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                    {/* saudi */}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                    {/* turkey */}
                    <Tab key="Turkey" title="Turkey">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="turkey-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {TurkeySteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                          <div className="uk-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {UKSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
                    {/* us */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USSteamProducts.map(
                              (SteamProduct: SteamProduct) => (
                                <div
                                  key={SteamProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={SteamProduct.image}
                                    alt={SteamProduct.name}
                                    aria-label={SteamProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {SteamProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(SteamProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === SteamProduct.id
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
                                            handleAddToCartSteam(SteamProduct)
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
            {/* psn tab */}
            <Tab key="PSN" title="PSN">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* australia */}
                    <Tab key="Australia" title="Australia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="australia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaPsnProducts.map(
                              (PsnProduct: PsnProduct) => (
                                <div
                                  key={PsnProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={PsnProduct.image}
                                    alt={PsnProduct.name}
                                    aria-label={PsnProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {PsnProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(PsnProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === PsnProduct.id
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
                                            handleAddToCartPsn(PsnProduct)
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
                    {/* emirates */}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesPsnProducts.map(
                              (PsnProduct: PsnProduct) => (
                                <div
                                  key={PsnProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={PsnProduct.image}
                                    alt={PsnProduct.name}
                                    aria-label={PsnProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {PsnProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(PsnProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === PsnProduct.id
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
                                            handleAddToCartPsn(PsnProduct)
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
                    {/* europe */}
                    <Tab key="Europen Union" title="Europen Union">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuropePsnProducts.map((PsnProduct: PsnProduct) => (
                              <div
                                key={PsnProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={PsnProduct.image}
                                  alt={PsnProduct.name}
                                  aria-label={PsnProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {PsnProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(PsnProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === PsnProduct.id
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
                                          handleAddToCartPsn(PsnProduct)
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
                    {/* germany */}
                    <Tab key="Germany" title="Germany">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="germany-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {GermanyPsnProducts.map(
                              (PsnProduct: PsnProduct) => (
                                <div
                                  key={PsnProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={PsnProduct.image}
                                    alt={PsnProduct.name}
                                    aria-label={PsnProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {PsnProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(PsnProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === PsnProduct.id
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
                                            handleAddToCartPsn(PsnProduct)
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
                    {/* kuawit */}
                    <Tab key="Kuawit" title="Kuawit">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="kuawit-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {KuawitPsnProducts.map((PsnProduct: PsnProduct) => (
                              <div
                                key={PsnProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={PsnProduct.image}
                                  alt={PsnProduct.name}
                                  aria-label={PsnProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {PsnProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(PsnProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === PsnProduct.id
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
                                          handleAddToCartPsn(PsnProduct)
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
                    {/* saudi */}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiPsnProducts.map((PsnProduct: PsnProduct) => (
                              <div
                                key={PsnProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={PsnProduct.image}
                                  alt={PsnProduct.name}
                                  aria-label={PsnProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {PsnProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(PsnProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === PsnProduct.id
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
                                          handleAddToCartPsn(PsnProduct)
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
                    {/* uk */}
                    <Tab key="United Kingdom" title="United Kingdom">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="uk-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {UKPsnProducts.map((PsnProduct: PsnProduct) => (
                              <div
                                key={PsnProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={PsnProduct.image}
                                  alt={PsnProduct.name}
                                  aria-label={PsnProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {PsnProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(PsnProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === PsnProduct.id
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
                                          handleAddToCartPsn(PsnProduct)
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
                    {/* us */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USPsnProducts.map((PsnProduct: PsnProduct) => (
                              <div
                                key={PsnProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={PsnProduct.image}
                                  alt={PsnProduct.name}
                                  aria-label={PsnProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {PsnProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(PsnProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === PsnProduct.id
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
                                          handleAddToCartPsn(PsnProduct)
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
            {/* xbox live tab */}
            <Tab key="Xbox Live" title="Xbox Live">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* uk */}
                    <Tab key="United Kingdom" title="United Kingdom">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="australia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {UKXboxProducts.map((XboxProduct: XboxProduct) => (
                              <div
                                key={XboxProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={XboxProduct.image}
                                  alt={XboxProduct.name}
                                  aria-label={XboxProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {XboxProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(XboxProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === XboxProduct.id
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
                                          handleAddToCartXbox(XboxProduct)
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
                    {/* us */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USXboxProducts.map((XboxProduct: XboxProduct) => (
                              <div
                                key={XboxProduct.id}
                                className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                              >
                                <Image
                                  src={XboxProduct.image}
                                  alt={XboxProduct.name}
                                  aria-label={XboxProduct.name}
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                />
                                <div className="mt-4 pb-5">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                    {XboxProduct.name}
                                  </h5>
                                  <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-slate-900">
                                      {convertCurrency(XboxProduct.price)}{" "}
                                      {selectedCurrency}
                                    </p>
                                    {cartItems.find(
                                      (item: { id: number }) =>
                                        item.id === XboxProduct.id
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
                                          handleAddToCartXbox(XboxProduct)
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
                    {/* canda */}
                    <Tab key="Canda" title="Canda">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="canda-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {CandaXboxProducts.map(
                              (XboxProduct: XboxProduct) => (
                                <div
                                  key={XboxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxProduct.image}
                                    alt={XboxProduct.name}
                                    aria-label={XboxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxProduct.id
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
                                            handleAddToCartXbox(XboxProduct)
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
                    {/* emirates */}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesXboxProducts.map(
                              (XboxProduct: XboxProduct) => (
                                <div
                                  key={XboxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxProduct.image}
                                    alt={XboxProduct.name}
                                    aria-label={XboxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxProduct.id
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
                                            handleAddToCartXbox(XboxProduct)
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
                    {/* saudi */}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiXboxProducts.map(
                              (XboxProduct: XboxProduct) => (
                                <div
                                  key={XboxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxProduct.image}
                                    alt={XboxProduct.name}
                                    aria-label={XboxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxProduct.id
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
                                            handleAddToCartXbox(XboxProduct)
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
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilXboxProducts.map(
                              (XboxProduct: XboxProduct) => (
                                <div
                                  key={XboxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxProduct.image}
                                    alt={XboxProduct.name}
                                    aria-label={XboxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxProduct.id
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
                                            handleAddToCartXbox(XboxProduct)
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
                          <div className="australia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {AustraliaXboxProducts.map(
                              (XboxProduct: XboxProduct) => (
                                <div
                                  key={XboxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxProduct.image}
                                    alt={XboxProduct.name}
                                    aria-label={XboxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxProduct.id
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
                                            handleAddToCartXbox(XboxProduct)
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
                    {/* japan */}
                    <Tab key="Japan" title="Japan">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="japan-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {JapanXboxProducts.map(
                              (XboxProduct: XboxProduct) => (
                                <div
                                  key={XboxProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxProduct.image}
                                    alt={XboxProduct.name}
                                    aria-label={XboxProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxProduct.id
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
                                            handleAddToCartXbox(XboxProduct)
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
            {/* xbox live gold tab */}
            <Tab key="Xbox Live Gold" title="Xbox Live Gold">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* us */}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USXboxGoldProducts.map(
                              (XboxGoldProduct: XboxGoldProduct) => (
                                <div
                                  key={XboxGoldProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGoldProduct.image}
                                    alt={XboxGoldProduct.name}
                                    aria-label={XboxGoldProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGoldProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGoldProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGoldProduct.id
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
                                            handleAddToCartXboxGold(
                                              XboxGoldProduct
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
                    {/* canda */}
                    <Tab key="Canda" title="Canda">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {CandaXboxGoldProducts.map(
                              (XboxGoldProduct: XboxGoldProduct) => (
                                <div
                                  key={XboxGoldProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGoldProduct.image}
                                    alt={XboxGoldProduct.name}
                                    aria-label={XboxGoldProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGoldProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGoldProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGoldProduct.id
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
                                            handleAddToCartXboxGold(
                                              XboxGoldProduct
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
                    {/* saudi arabia */}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiXboxGoldProducts.map(
                              (XboxGoldProduct: XboxGoldProduct) => (
                                <div
                                  key={XboxGoldProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGoldProduct.image}
                                    alt={XboxGoldProduct.name}
                                    aria-label={XboxGoldProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGoldProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGoldProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGoldProduct.id
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
                                            handleAddToCartXboxGold(
                                              XboxGoldProduct
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
                    {/* turkey*/}
                    <Tab key="Turkey" title="Turkey">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="turkey-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {TurkeyXboxGoldProducts.map(
                              (XboxGoldProduct: XboxGoldProduct) => (
                                <div
                                  key={XboxGoldProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGoldProduct.image}
                                    alt={XboxGoldProduct.name}
                                    aria-label={XboxGoldProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGoldProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGoldProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGoldProduct.id
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
                                            handleAddToCartXboxGold(
                                              XboxGoldProduct
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
                    {/* brazil*/}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilXboxGoldProducts.map(
                              (XboxGoldProduct: XboxGoldProduct) => (
                                <div
                                  key={XboxGoldProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGoldProduct.image}
                                    alt={XboxGoldProduct.name}
                                    aria-label={XboxGoldProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGoldProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGoldProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGoldProduct.id
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
                                            handleAddToCartXboxGold(
                                              XboxGoldProduct
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
                    {/* singapore*/}
                    <Tab key="Singapore" title="Singapore">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="singapore-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SingaporeXboxGoldProducts.map(
                              (XboxGoldProduct: XboxGoldProduct) => (
                                <div
                                  key={XboxGoldProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGoldProduct.image}
                                    alt={XboxGoldProduct.name}
                                    aria-label={XboxGoldProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGoldProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGoldProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGoldProduct.id
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
                                            handleAddToCartXboxGold(
                                              XboxGoldProduct
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
            {/* xbox game pass tab */}
            <Tab key="Xbox Game Pass" title="Xbox Game Pass">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* brazil*/}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilXboxGameProducts.map(
                              (XboxGameProduct: XboxGameProduct) => (
                                <div
                                  key={XboxGameProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGameProduct.image}
                                    alt={XboxGameProduct.name}
                                    aria-label={XboxGameProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGameProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGameProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGameProduct.id
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
                                            handleAddToCartXboxGame(
                                              XboxGameProduct
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
                    {/* us*/}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USXboxGameProducts.map(
                              (XboxGameProduct: XboxGameProduct) => (
                                <div
                                  key={XboxGameProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGameProduct.image}
                                    alt={XboxGameProduct.name}
                                    aria-label={XboxGameProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGameProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGameProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGameProduct.id
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
                                            handleAddToCartXboxGame(
                                              XboxGameProduct
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
                    {/* emirates*/}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EmiratesXboxGameProducts.map(
                              (XboxGameProduct: XboxGameProduct) => (
                                <div
                                  key={XboxGameProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGameProduct.image}
                                    alt={XboxGameProduct.name}
                                    aria-label={XboxGameProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGameProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGameProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGameProduct.id
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
                                            handleAddToCartXboxGame(
                                              XboxGameProduct
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
                    {/* saudi*/}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiXboxGameProducts.map(
                              (XboxGameProduct: XboxGameProduct) => (
                                <div
                                  key={XboxGameProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxGameProduct.image}
                                    alt={XboxGameProduct.name}
                                    aria-label={XboxGameProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxGameProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(XboxGameProduct.price)}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxGameProduct.id
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
                                            handleAddToCartXboxGame(
                                              XboxGameProduct
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
            {/* xbox game pass ultimate tab */}
            <Tab key="Xbox Game Pass Ultimate" title="Xbox Game Pass Ultimate">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    {/* brazil*/}
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {BrazilXboxUltimateProducts.map(
                              (XboxUltimateProduct: XboxUltimateProduct) => (
                                <div
                                  key={XboxUltimateProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxUltimateProduct.image}
                                    alt={XboxUltimateProduct.name}
                                    aria-label={XboxUltimateProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxUltimateProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          XboxUltimateProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxUltimateProduct.id
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
                                            handleAddToCartXboxUltimate(
                                              XboxUltimateProduct
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
                    {/* us*/}
                    <Tab key="United States" title="United States">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="us-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {USXboxUltimateProducts.map(
                              (XboxUltimateProduct: XboxUltimateProduct) => (
                                <div
                                  key={XboxUltimateProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxUltimateProduct.image}
                                    alt={XboxUltimateProduct.name}
                                    aria-label={XboxUltimateProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxUltimateProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          XboxUltimateProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxUltimateProduct.id
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
                                            handleAddToCartXboxUltimate(
                                              XboxUltimateProduct
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
                    <Tab key="Europe" title="Europe">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="europe-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuropeXboxUltimateProducts.map(
                              (XboxUltimateProduct: XboxUltimateProduct) => (
                                <div
                                  key={XboxUltimateProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxUltimateProduct.image}
                                    alt={XboxUltimateProduct.name}
                                    aria-label={XboxUltimateProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxUltimateProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          XboxUltimateProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxUltimateProduct.id
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
                                            handleAddToCartXboxUltimate(
                                              XboxUltimateProduct
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
                    {/* emirates*/}
                    <Tab
                      key="United Arab Emirates"
                      title="United Arab Emirates"
                    >
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="emirates-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {EuropeXboxUltimateProducts.map(
                              (XboxUltimateProduct: XboxUltimateProduct) => (
                                <div
                                  key={XboxUltimateProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxUltimateProduct.image}
                                    alt={XboxUltimateProduct.name}
                                    aria-label={XboxUltimateProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxUltimateProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          XboxUltimateProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxUltimateProduct.id
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
                                            handleAddToCartXboxUltimate(
                                              XboxUltimateProduct
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
                    {/* saudi*/}
                    <Tab key="Saudi Arabia" title="Saudi Arabia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="saudi-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {SaudiXboxUltimateProducts.map(
                              (XboxUltimateProduct: XboxUltimateProduct) => (
                                <div
                                  key={XboxUltimateProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxUltimateProduct.image}
                                    alt={XboxUltimateProduct.name}
                                    aria-label={XboxUltimateProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxUltimateProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          XboxUltimateProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxUltimateProduct.id
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
                                            handleAddToCartXboxUltimate(
                                              XboxUltimateProduct
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
                    {/* turkey*/}
                    <Tab key="Turkey" title="Turkey">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="turkey-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {TurkeyXboxUltimateProducts.map(
                              (XboxUltimateProduct: XboxUltimateProduct) => (
                                <div
                                  key={XboxUltimateProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxUltimateProduct.image}
                                    alt={XboxUltimateProduct.name}
                                    aria-label={XboxUltimateProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxUltimateProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          XboxUltimateProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxUltimateProduct.id
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
                                            handleAddToCartXboxUltimate(
                                              XboxUltimateProduct
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
                    {/* russia*/}
                    <Tab key="Russia" title="Russia">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="russia-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            {RussiaXboxUltimateProducts.map(
                              (XboxUltimateProduct: XboxUltimateProduct) => (
                                <div
                                  key={XboxUltimateProduct.id}
                                  className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                                >
                                  <Image
                                    src={XboxUltimateProduct.image}
                                    alt={XboxUltimateProduct.name}
                                    aria-label={XboxUltimateProduct.name}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                                  />
                                  <div className="mt-4 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                                      {XboxUltimateProduct.name}
                                    </h5>
                                    <div className="flex items-center justify-between">
                                      <p className="text-2xl font-bold text-slate-900">
                                        {convertCurrency(
                                          XboxUltimateProduct.price
                                        )}{" "}
                                        {selectedCurrency}
                                      </p>
                                      {cartItems.find(
                                        (item: { id: number }) =>
                                          item.id === XboxUltimateProduct.id
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
                                            handleAddToCartXboxUltimate(
                                              XboxUltimateProduct
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
          </Tabs>
        </div>
        <Toaster position="top-right" richColors closeButton />
      </section>
      <Footer />
    </>
  );
}
