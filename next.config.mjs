/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/card-shop",
  assetPrefix: './',
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
