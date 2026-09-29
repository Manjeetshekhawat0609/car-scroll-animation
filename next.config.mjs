const isProd = process.env.NODE_ENV === "production";
const repo = "car-scroll-animation"; // GitHub repo name (needed for GitHub Pages)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",                       // static HTML export
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
};
export default nextConfig;
