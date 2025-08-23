import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Handle monorepo packages
  transpilePackages: ['@sume/ui'],
  
  // Webpack configuration for module resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sume/ui': require.resolve('@sume/ui'),
    };
    return config;
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
