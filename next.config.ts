import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // Other Next.js configurations
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
