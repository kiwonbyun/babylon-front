import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'babylon-web.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
