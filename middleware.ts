import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about-us",
    "/privacy-policy",
    "/sign-in",
    "/sign-up",
    "/Home-Page",
    "/Home-Page/*",
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
