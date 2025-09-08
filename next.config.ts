import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"], // ✅ Next will convert automatically
    deviceSizes: [320, 420, 768, 1024, 1200], // ✅ responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96], // ✅ smaller sizes if needed
  },
};

export default nextConfig;
