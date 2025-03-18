import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_HOST || '',
      },
    ],
  },
  // biome-ignore lint/suspicious/useAwait: <explanation>
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.FETCH_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
