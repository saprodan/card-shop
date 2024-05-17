/** @type {import('next').NextConfig} */

const repo = 'card-shop'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  // basePath: "/card-shop",
  // assetPrefix: './',
  
  assetPrefix: assetPrefix,
  basePath: basePath,
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
