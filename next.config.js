const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["filedn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "filedn.com",
        pathname: "/lPmOLyYLDG0bQGSveFAL3WB/**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
