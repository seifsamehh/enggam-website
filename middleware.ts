import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about-us",
    "/sign-in",
    "/sign-up",
    "/Home-Page",
    "/Home-Page/about-us",
    "/Home-Page/sale-page",
    "/Home-Page/categories/gift-cards",
    "/Home-Page/categories/game-cards",
    "/Home-Page/categories/payment-cards",
    "/Home-Page/feedback",
    "/Home-Page/cart",
    "/Home-Page/api/sendEmail",
    "/api/sendEmail",
    "/Home-Page/api/sendFeedback",
    "/api/sendFeedback",
    "/Home-Page/success",
  ],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/app(.*)",
    "/account(.*)",
  ],
};
