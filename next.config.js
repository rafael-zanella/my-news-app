const withPWA = require('next-pwa')
const customRuntimeCaching = require('./customRuntimeCaching')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    cacheOnFrontEndNav: true,
    runtimeCaching: customRuntimeCaching,
    // swSrc: './service-worker.js'
    publicExcludes: [
      '!icons/**/*'
    ],
    buildExcludes: [/chunks\/images\/.*$/]
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

module.exports = withPWA(nextConfig)
