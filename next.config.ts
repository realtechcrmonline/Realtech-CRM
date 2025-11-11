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
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
  basePath: isProjectPage ? '/realtech-crm' : undefined,
  assetPrefix: isProjectPage ? '/realtech-crm/' : undefined,
};

export default nextConfig;
