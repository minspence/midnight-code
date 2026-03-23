import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    basePath: "/midnight-code",
    assetPrefix: "/midnight-code/app",
    images:{ unoptimized: true},
};
module.exports = nextConfig;

export default nextConfig;
