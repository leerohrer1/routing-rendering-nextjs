
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/news',
        destination: 'http://localhost:8080/news',
      },
    ];
  },
};

export default nextConfig;
