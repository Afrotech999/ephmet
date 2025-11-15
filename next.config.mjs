/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ⬅️ this is the important line
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
