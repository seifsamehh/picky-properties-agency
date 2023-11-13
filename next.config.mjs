/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
};

export default withPWA(nextConfig);
