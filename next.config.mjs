// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/hospital-appointment-booking-app" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
