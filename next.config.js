/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: 'qr.cloudboost.co.za' },
      { protocol: 'https', hostname: '**.netlify.app' },
    ],
  },
};

module.exports = nextConfig;