/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    domains: ["images.unsplash.com"], // Add Unsplash to allowed image sources
  },
};

export default nextConfig;
