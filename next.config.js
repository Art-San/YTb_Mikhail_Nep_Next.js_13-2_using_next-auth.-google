/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ['image/avif', 'image/webp'],
    // deviceSizes: [375, 640, 750, 928, 1000, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatarzo.ru',
        port: '',
        pathname: ''
      }
    ]
  }
}

module.exports = nextConfig

// https://avatarzo.ru/wp-content/uploads/derevo-na-zakate.jpg
