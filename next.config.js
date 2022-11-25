/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'dkstatics-public.digikala.com',
      port: '',
      pathname: '/**',
    },
  ],
},
  reactStrictMode: true
}

module.exports = nextConfig
