/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/affinity-ai',
  assetPrefix: '/affinity-ai/'
}

module.exports = nextConfig
