/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/KmbDataBridge.io" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/KmbDataBridge.io/" : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
