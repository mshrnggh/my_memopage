/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the prefix in the Next.js router
  basePath: '/mshrnggh',
  assetPrefix: '/mshrnggh',
  // Add this configuration
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/index1': { page: '/index1' },
      // Add more paths here
    };
  },
};

export default nextConfig;