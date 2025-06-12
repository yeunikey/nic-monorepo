import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'flood.astanait.edu.kz'], // 👈 добавили api.sedmarket.kz
  },
  reactStrictMode: false
};

export default nextConfig;
