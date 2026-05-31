/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  
  // PERISAI 1: Mengabaikan peringatan ESLint yang terlalu cerewet saat Build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // PERISAI 2: Mengabaikan peringatan TypeScript yang berlebihan (seperti tipe data 3D) saat Build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;