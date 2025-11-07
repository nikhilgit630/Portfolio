/** @type {import('next').NextConfig} */

const isGithub = process.env.NEXT_PUBLIC_IS_GITHUB === "true";

const nextConfig = {
  output: "export", // ✅ Required for GitHub Pages (Next.js 16)
  images: {
    unoptimized: true, // ✅ Needed for static export
  },

  // ✅ GitHub Pages specific path
  basePath: isGithub ? "/Portfolio" : "",
  assetPrefix: isGithub ? "/Portfolio/" : "",
};

export default nextConfig;
