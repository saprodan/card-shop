/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/card-shop",
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
