import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tell Next.js to transpile your UI package
  transpilePackages: ['@sume/ui'],
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
