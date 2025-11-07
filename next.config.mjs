/** @type {import('next').NextConfig} */

const isGithub = process.env.NEXT_PUBLIC_IS_GITHUB === "true";
const forceBase = process.env.NEXT_PUBLIC_FORCE_BASEPATH === "true";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  // ✅ Force basePath on GitHub Pages no matter what
  basePath: isGithub || forceBase ? "/Portfolio" : "",
  assetPrefix: isGithub || forceBase ? "/Portfolio/" : "",
};

export default nextConfig;
