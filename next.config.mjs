const isGithub = process.env.NEXT_PUBLIC_IS_GITHUB === "true";
const forceBase = process.env.NEXT_PUBLIC_FORCE_BASEPATH === "true";

export default {
  output: "export",
  images: { unoptimized: true },

  // ✅ GitHub Pages basePath force apply
  basePath: isGithub || forceBase ? "/Portfolio" : "",
  assetPrefix: isGithub || forceBase ? "/Portfolio/" : "",
};
