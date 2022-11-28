/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URI: 'http://127.0.0.1:5001'
  }
}

module.exports = nextConfig
