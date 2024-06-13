"use client";

import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import axios from "axios";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} from "@/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

import { Raleway } from "next/font/google";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";
const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

const USD_TO_EGP_RATE = 52.0;
const CartPage = () => {
  const fees = 1.15;

  const router = useRouter();

  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const convertCurrency = (price) => {
    if (selectedCurrency === "EGP") {
      return +(price * USD_TO_EGP_RATE).toFixed(2); // Convert the string back to a number using the unary plus operator
    }
    return +price.toFixed(2); // Convert the string back to a number using the unary plus operator
  };

  // user data
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const totalPrice = products
    .reduce(
      (total, item) => total + convertCurrency(item.price) * item.quantity,
      0
    )
    .toFixed(2);

  // Handle form submission
  const [productsItems, setProductsItems] = useState(""); // Initialize products state

  useEffect(() => {
    // Update products string whenever products change
    setProductsItems(
      products.map((item) => `${item.name} x ${item.quantity}`).join(", ")
    );
  }, [products]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    // Update price string whenever products or totalPrice change
    setPrice(totalPrice.toString());
  }, [products, totalPrice]);

  // start fawry integration

  // user data
  const customerEmail =
    user.primaryEmailAddress.emailAddress || "customer@domain.com";
  const customerProfileId = user.id || "";
  const customerName = user.username || "MR/MRS";

  // Function to generate a random ID
  function generateRandomId() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  // Function to build the charge request
  const merchantRefNum = generateRandomId();

  function buildChargeRequest(products) {
    const chargeItems = products.map((product) => ({
      itemId: product.id,
      description: product.name,
      price: (product.price * USD_TO_EGP_RATE + fees + 2.0).toFixed(2),
      imageUrl: product.image,
      quantity: product.quantity || 1,
    }));

    // Concatenate the elements for signature calculation
    const concatenatedString =
      "400000018490" +
      merchantRefNum +
      customerProfileId +
      "https://www.enggam.com/Home-Page" +
      chargeItems.map((item) => item.itemId).join("") +
      chargeItems.map((item) => item.quantity).join("") +
      chargeItems.map((item) => item.price).join("") +
      "5d289a9c-6a46-4b5a-a618-23b2929de937";

    // Calculate the signature
    const signature = CryptoJS.SHA256(concatenatedString).toString();

    return {
      merchantCode: "400000018490",
      merchantRefNum: merchantRefNum,
      customerEmail: customerEmail,
      customerName: customerName,
      paymentMethod: "",
      customerProfileId: customerProfileId,
      chargeItems: chargeItems,
      returnUrl: "https://www.enggam.com/Home-Page",
      authCaptureModePayment: false,
      signature: signature,
    };
  }

  // Concatenate the elements for signature calculation
  const concatenatedStringPaymentStatus =
    "400000018490" + merchantRefNum + "5d289a9c-6a46-4b5a-a618-23b2929de937";

  // Calculate the signature
  const signaturePaymentStatus = CryptoJS.SHA256(
    concatenatedStringPaymentStatus
  ).toString();

  // Function to handle checkout
  async function checkout(products) {
    const configuration = {
      locale: "en", // Default locale
      mode: DISPLAY_MODE.POPUP, // Required mode
    };
    const chargeRequest = buildChargeRequest(products);

    // Make the initial FawryPay checkout request
    FawryPay.checkout(chargeRequest, configuration);

    // Make the additional request to check the payment status
    const merchantCode = "400000018490";
    const merchantRefNumber = merchantRefNum;
    const signature = signaturePaymentStatus;

    const statusUrl =
      "https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/status/v2";
    const queryParams = `merchantCode=${merchantCode}&merchantRefNumber=${merchantRefNumber}&signature=${signature}`;

    try {
      const response = await fetch(`${statusUrl}?${queryParams}`);
      const data = await response.json();
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  }

  // Geidea integration
  const paymentAmount = totalPrice * USD_TO_EGP_RATE + fees + 2.0;

  const generateError = () => {
    toast.error("Something went Wrong Please Try Again!");
  };

  const generateCancel = () => {
    router.push("/Home-Page/cancel");
    toast.warning("You canceled the order!");
  };

  const generateSuccess = async () => {
    const email = customerEmail || "customer@domain.com";
    const price = paymentAmount;
    const products = productsItems;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          price,
          products,
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        router.push("/Home-Page/success");
        dispatch(resetCart());
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
        });
        toast.success("Your order has been confirmed!");
      } else {
        console.error("Failed to send email:", responseData.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = async () => {
    const name = customerName;
    const email = customerEmail;
    const amount = paymentAmount;

    const onSuccess = () => {
      generateSuccess("Payment Successful!");
    };
    const onError = () => {
      generateError("Something went Wrong Please Try Again!");
    };
    const onCancel = () => {
      generateCancel("You have Canceled the operation!");
    };

    try {
      const response = await axios.post("/api/payments", {
        amount: amount,
        name: name,
        email: email,
      });

      const sessionId = response.data.session.id;
      var payment = new GeideaCheckout(onSuccess, onError, onCancel);
      payment.startPayment(sessionId);
    } catch (err) {
      console.error(err);
      generateError("Failed to process payment.");
    }
  };

  return (
    <section className="cart-page overflow-hidden min-h-screen">
      {products.length === 0 ? (
        <div className="cart-empty min-h-screen flex justify-center items-center flex-col relative">
          <Image
            src="/Empty-Cart.webp"
            alt="Empty Cart"
            aria-label="Empty Cart"
            width={600}
            height={600}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
          />
          <h1 className={`${raleway.className} text-5xl text-center mb-4`}>
            Your Cart is Empty
          </h1>
          <Link
            href="/Home-Page"
            className="bg-[#0056b3] text-white py-2 px-4 rounded-md relative z-10"
          >
            Go Home
          </Link>
          <svg
            className="w-44 h-44 absolute top-6 left-6"
            viewBox="0 0 115 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.96056 72.4776C2.11526 72.1427 2.61932 71.3858 3.47274 70.2068C4.32617 69.0278 5.12206 67.971 5.86041 67.0365C6.59877 66.102 7.54001 64.8843 8.68414 63.3832C9.82849 61.8822 10.7074 60.7311 11.3207 59.9299C11.9341 59.1285 12.5843 58.2841 13.2713 57.3967C13.9584 56.509 15.1275 54.993 16.7787 52.8487C18.4299 50.7043 20.1083 48.5845 21.8138 46.4892C23.5193 44.3939 24.8029 42.8334 25.6647 41.8077C26.5262 40.7821 27.2318 39.9321 27.7814 39.258C28.3309 38.5838 29.2978 37.4637 30.6822 35.8979C32.0668 34.332 33.1765 33.0913 34.0112 32.176C34.8462 31.2609 35.6647 30.3806 36.4668 29.535C37.2686 28.6897 38.0465 27.8696 38.8004 27.0747C39.5543 26.2796 40.7613 25.0652 42.4216 23.4316C44.0818 21.7979 45.4922 20.4434 46.6528 19.3679C47.8133 18.2927 48.6809 17.4937 49.2556 16.9708C49.8305 16.4479 50.4121 15.9271 51.0005 15.4083C51.5889 14.8892 52.4073 14.182 53.4557 13.2864C54.5041 12.3909 55.6724 11.4026 56.9604 10.3215"
              stroke="#ff474d"
              strokeWidth="2.40238"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M22.4046 76.4629C22.4757 76.2636 22.8882 75.2594 23.6421 73.4504C24.3963 71.6413 25.5284 69.4455 27.0387 66.8629C28.5492 64.2803 29.7211 62.335 30.5545 61.027C31.3881 59.7189 31.9949 58.7378 32.3747 58.0837C32.7546 57.4295 33.7812 55.8811 35.4545 53.4384C37.1276 50.9957 38.4956 49.06 39.5587 47.6315C40.6217 46.203 41.4966 45.0339 42.1831 44.1242C42.8697 43.2147 43.7552 42.0704 44.8397 40.6914C45.9243 39.3122 47.0484 37.9385 48.2119 36.5703C49.3754 35.2022 50.2633 34.1643 50.8755 33.4568C51.4878 32.7495 52.2802 31.8579 53.2527 30.782C54.2253 29.7064 55.2707 28.5952 56.3889 27.4486C57.5069 26.3018 58.5024 25.2882 59.3754 24.4077C60.2482 23.5273 61.5074 22.3131 63.153 20.7653C64.7988 19.2174 66.3734 17.7947 67.8767 16.4972C69.3802 15.1998 70.8823 13.932 72.3831 12.694C73.8839 11.4558 75.3001 10.3252 76.6316 9.30249C77.9633 8.27974 79.4285 7.16454 81.0272 5.95691"
              stroke="#ff474d"
              strokeWidth="2.40238"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M40.0535 96.3708C40.1289 96.0743 40.5204 94.6886 41.2279 92.2139C41.9354 89.7392 42.8657 87.1333 44.0189 84.396C45.1718 81.6585 46.1029 79.5524 46.8122 78.0777C47.5217 76.6033 48.0229 75.5319 48.3156 74.8636C48.6081 74.1952 49.4992 72.4651 50.989 69.6731C52.4788 66.8811 53.7505 64.6236 54.8041 62.9006C55.8577 61.1773 56.6296 59.9047 57.1198 59.0828C57.6098 58.2607 58.4645 56.9465 59.6838 55.1404C60.9031 53.3342 61.8391 51.9585 62.4916 51.0132C63.1444 50.0679 63.9512 48.9479 64.9121 47.6531C65.8729 46.3586 66.6215 45.3676 67.1579 44.6801C67.6943 43.9926 68.1759 43.3761 68.6029 42.8305C69.03 42.2849 69.6793 41.4738 70.5507 40.3972C71.4222 39.3207 72.5404 37.9981 73.9054 36.4295C75.2707 34.8611 76.4771 33.5194 77.5246 32.4043C78.5724 31.2895 79.6814 30.1035 80.8516 28.8463C82.0216 27.5891 83.856 25.7855 86.3548 23.4353C88.8536 21.0853 90.8133 19.2912 92.234 18.053C93.6546 16.8147 94.8794 15.757 95.9082 14.8797C96.937 14.0026 98.3193 12.8774 100.055 11.5041C101.79 10.1307 103.119 9.08812 104.041 8.37633C104.963 7.66455 105.694 7.10317 106.235 6.69222C106.777 6.28127 107.584 5.67645 108.659 4.87774C109.733 4.07904 111.207 2.98964 113.082 1.60953"
              stroke="#ff474d"
              strokeWidth="2.40238"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <svg
            className="w-44 h-44 absolute bottom-6 right-6 rotate-180"
            viewBox="0 0 115 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.96056 72.4776C2.11526 72.1427 2.61932 71.3858 3.47274 70.2068C4.32617 69.0278 5.12206 67.971 5.86041 67.0365C6.59877 66.102 7.54001 64.8843 8.68414 63.3832C9.82849 61.8822 10.7074 60.7311 11.3207 59.9299C11.9341 59.1285 12.5843 58.2841 13.2713 57.3967C13.9584 56.509 15.1275 54.993 16.7787 52.8487C18.4299 50.7043 20.1083 48.5845 21.8138 46.4892C23.5193 44.3939 24.8029 42.8334 25.6647 41.8077C26.5262 40.7821 27.2318 39.9321 27.7814 39.258C28.3309 38.5838 29.2978 37.4637 30.6822 35.8979C32.0668 34.332 33.1765 33.0913 34.0112 32.176C34.8462 31.2609 35.6647 30.3806 36.4668 29.535C37.2686 28.6897 38.0465 27.8696 38.8004 27.0747C39.5543 26.2796 40.7613 25.0652 42.4216 23.4316C44.0818 21.7979 45.4922 20.4434 46.6528 19.3679C47.8133 18.2927 48.6809 17.4937 49.2556 16.9708C49.8305 16.4479 50.4121 15.9271 51.0005 15.4083C51.5889 14.8892 52.4073 14.182 53.4557 13.2864C54.5041 12.3909 55.6724 11.4026 56.9604 10.3215"
              stroke="#ff474d"
              strokeWidth="2.40238"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M22.4046 76.4629C22.4757 76.2636 22.8882 75.2594 23.6421 73.4504C24.3963 71.6413 25.5284 69.4455 27.0387 66.8629C28.5492 64.2803 29.7211 62.335 30.5545 61.027C31.3881 59.7189 31.9949 58.7378 32.3747 58.0837C32.7546 57.4295 33.7812 55.8811 35.4545 53.4384C37.1276 50.9957 38.4956 49.06 39.5587 47.6315C40.6217 46.203 41.4966 45.0339 42.1831 44.1242C42.8697 43.2147 43.7552 42.0704 44.8397 40.6914C45.9243 39.3122 47.0484 37.9385 48.2119 36.5703C49.3754 35.2022 50.2633 34.1643 50.8755 33.4568C51.4878 32.7495 52.2802 31.8579 53.2527 30.782C54.2253 29.7064 55.2707 28.5952 56.3889 27.4486C57.5069 26.3018 58.5024 25.2882 59.3754 24.4077C60.2482 23.5273 61.5074 22.3131 63.153 20.7653C64.7988 19.2174 66.3734 17.7947 67.8767 16.4972C69.3802 15.1998 70.8823 13.932 72.3831 12.694C73.8839 11.4558 75.3001 10.3252 76.6316 9.30249C77.9633 8.27974 79.4285 7.16454 81.0272 5.95691"
              stroke="#ff474d"
              strokeWidth="2.40238"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M40.0535 96.3708C40.1289 96.0743 40.5204 94.6886 41.2279 92.2139C41.9354 89.7392 42.8657 87.1333 44.0189 84.396C45.1718 81.6585 46.1029 79.5524 46.8122 78.0777C47.5217 76.6033 48.0229 75.5319 48.3156 74.8636C48.6081 74.1952 49.4992 72.4651 50.989 69.6731C52.4788 66.8811 53.7505 64.6236 54.8041 62.9006C55.8577 61.1773 56.6296 59.9047 57.1198 59.0828C57.6098 58.2607 58.4645 56.9465 59.6838 55.1404C60.9031 53.3342 61.8391 51.9585 62.4916 51.0132C63.1444 50.0679 63.9512 48.9479 64.9121 47.6531C65.8729 46.3586 66.6215 45.3676 67.1579 44.6801C67.6943 43.9926 68.1759 43.3761 68.6029 42.8305C69.03 42.2849 69.6793 41.4738 70.5507 40.3972C71.4222 39.3207 72.5404 37.9981 73.9054 36.4295C75.2707 34.8611 76.4771 33.5194 77.5246 32.4043C78.5724 31.2895 79.6814 30.1035 80.8516 28.8463C82.0216 27.5891 83.856 25.7855 86.3548 23.4353C88.8536 21.0853 90.8133 19.2912 92.234 18.053C93.6546 16.8147 94.8794 15.757 95.9082 14.8797C96.937 14.0026 98.3193 12.8774 100.055 11.5041C101.79 10.1307 103.119 9.08812 104.041 8.37633C104.963 7.66455 105.694 7.10317 106.235 6.69222C106.777 6.28127 107.584 5.67645 108.659 4.87774C109.733 4.07904 111.207 2.98964 113.082 1.60953"
              stroke="#ff474d"
              strokeWidth="2.40238"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      ) : (
        <section className="cart-page-products min-h-screen overflow-hidden flex justify-center items-center py-12">
          <div className="cart-content w-screen flex justify-around items-start gap-4 flex-wrap">
            <div className="left min-[290px]:mx-4 md:mx-0">
              <div className="shopping mb-8">
                <Link
                  href="/Home-Page"
                  title="Home Page"
                  className="flex justify-start items-center gap-2"
                >
                  <FaArrowLeftLong />
                  Continue Shopping
                </Link>
              </div>
              <div className="cart-products flex flex-col gap-2">
                {products.map((item) => (
                  <div
                    className="product-box flex items-start min-[290px]:flex-wrap-reverse md:flex-nowrap p-8 gap-48 rounded-lg bg-[#0056b3] text-white "
                    key={item.id}
                  >
                    <div className="product-left flex gap-8">
                      <div className="product-brand">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="rounded-md"
                          width={200}
                          height={200}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
                        />
                      </div>
                      <div className="product-content">
                        <h2
                          className={`${raleway.className} font-black text-xl`}
                        >
                          {item.name}
                        </h2>
                        <p>
                          {convertCurrency(item.price)} {selectedCurrency}
                        </p>
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="bg-white text-[#ff474d] py-2 px-4 rounded-md"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="bg-white text-[#ff474d] py-2 px-4 rounded-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product-right">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="bg-[#ff474d] text-white py-2 px-4 rounded-md"
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right min-[290px]:min-h-full md:min-h-screen bg-[#ff474d] text-white p-4 min-[290px]:w-[90%] md:w-1/4 flex justify-around flex-col">
              <div className="user-data">
                <h2 className={`${raleway.className} text-3xl`}>
                  Welcome,
                  <br />
                  <span className="text-xl">{user.fullName}</span>
                </h2>
                <p className="my-4">
                  You can ship the order easily and choose the easiest and most
                  suitable payment method for all and send it to us and the
                  reply will be done as soon as possible so that it is done to
                  help you in everything and make the order come out as soon as
                  possible and you can communicate with us easily in order to
                  complete any order required and make it faster ...
                </p>
                <p>
                  <span className={`${raleway.className} text-xl`}>Note:</span>
                  <br />
                  We will email you to complete your purchase, so keep in mind
                  that the email you are logged in or signed up with is the
                  email to which we will send your product.
                </p>
                <div className="hidden">
                  <select
                    value={selectedCurrency}
                    onChange={(e) => handleCurrencyChange(e.target.value)}
                    className="bg-white text-[#ff474d] py-2 px-4 rounded-md"
                  >
                    <option value="USD">USD</option>
                    <option value="EGP">EGP</option>
                  </select>
                </div>
              </div>
              <div className="checkout min-[290px]:mt-8 md:mt-0">
                <p className={`${raleway.className} text-2xl`}>
                  <span className="font-black">Total Price:</span> {totalPrice}{" "}
                  {selectedCurrency}
                </p>
                {products.length > 0 && (
                  <div className="payments flex justify-start items-center gap-4 flex-wrap md:flex-nowrap">
                    <Button
                      onClick={() => checkout(products)}
                      id="fawry-payment-btn"
                      // className="hidden"
                    >
                      Fawry Checkout
                    </Button>
                    <Button onClick={handleSubmit} id="geidea-payment-btn">
                      Geidea Checkout
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default CartPage;
