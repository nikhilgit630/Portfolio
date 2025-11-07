/** @type {import('next').NextConfig} */

const isGithub = process.env.NEXT_PUBLIC_IS_GITHUB === "true";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // ✅ Apply basePath only for GitHub Pages
  basePath: isGithub ? "/Portfolio" : "",

  // ✅ Static asset prefix only for GitHub
  assetPrefix: isGithub ? "/Portfolio/" : "",
};

export default nextConfig;
