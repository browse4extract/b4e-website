/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/b4e-website',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
