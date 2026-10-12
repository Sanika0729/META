import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // 90 is used for full-width header and band photos so they stay crisp.
  images: {
    qualities: [75, 90],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // The blog has been removed; its URLs point to the pages that now hold that content.
  async redirects() {
    return [
      { source: "/latest-news", destination: "/", permanent: true },
      { source: "/welcome-to-the-new-meta", destination: "/about-us", permanent: true },
      { source: "/skill-assessments-the-often-overlooked-step-that-unlocks-global-careers", destination: "/services/skill-assessments", permanent: true },
      {
        source: "/from-indian-kitchens-to-global-careers-why-patisserie-and-commercial-cookery-are-international-pathways-worth-taking-seriously",
        destination: "/services/vocational-training",
        permanent: true,
      },
      { source: "/category/:slug*", destination: "/", permanent: true },
      { source: "/author/:slug*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
