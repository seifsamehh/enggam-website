/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.imgur.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
};

module.exports = nextConfig;
