/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@selfxyz/qrcode", "@selfxyz/core"],
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    }
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
