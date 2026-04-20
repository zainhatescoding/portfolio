/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For easier deployment to Vercel without worrying about image optimization costs if needed, or just standard
  },
};

export default nextConfig;
