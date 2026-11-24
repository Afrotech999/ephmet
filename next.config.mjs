/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain HTML files in /out: works on Vercel and on any static host.
  output: "export",
  images: { unoptimized: true },
  experimental: {
    // One 404 page across the English and the /zh, /fr, /ar root layouts.
    globalNotFound: true,
  },
};

export default nextConfig;
