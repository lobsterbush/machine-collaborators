import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/machine-collaborators',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
