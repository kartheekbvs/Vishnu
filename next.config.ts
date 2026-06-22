import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project site (repository name in path)
  // Use "./" so assets work from the root of the deployed path
  basePath: process.env.NODE_ENV === "production" ? "/Vishnu" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Vishnu/" : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
