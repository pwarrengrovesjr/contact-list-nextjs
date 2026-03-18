/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://upload.wikimedia.org/wikipedia/**')],
  }
}

module.exports = nextConfig
