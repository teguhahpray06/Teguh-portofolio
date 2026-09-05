/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.icons8.com', 'raw.githubusercontent.com', 'cdn.jsdelivr.net']
  }
}

module.exports = nextConfig
