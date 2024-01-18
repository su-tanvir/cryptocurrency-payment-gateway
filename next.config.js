/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/checkout',
        permanent: true,
      },
    ]
  },
}


module.exports = nextConfig
