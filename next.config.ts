import type {NextConfig} from 'next';

const isProjectPage = true; // set to false for user/org pages

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
  basePath: isProjectPage ? '/Realtech-CRM' : undefined,
  assetPrefix: isProjectPage ? '/Realtech-CRM/' : undefined,
};

export default nextConfig;
