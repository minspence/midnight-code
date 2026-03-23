import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    basePath: "/midnight-code",
    assetPrefix: "/midnight-code/",
};
module.exports = nextConfig;

export default nextConfig;
