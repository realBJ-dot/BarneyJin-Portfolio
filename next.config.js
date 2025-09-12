/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/BarneyJin-Portfolio',
  assetPrefix: '/BarneyJin-Portfolio/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

