/** @type {import('next').NextJSConfig} */
const nextConfig = {
  eslint: {
    // This allows production builds to successfully complete 
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
