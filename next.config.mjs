/**
 * @type {import('next').NextConfig}
 */
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  /* config options here */
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
};

export default withPWA(nextConfig);
