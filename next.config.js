/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects () {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
