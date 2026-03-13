import { withSentryConfig } from "@sentry/nextjs";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

// apply MDX first
const mdxConfig = withMDX(nextConfig);

// then apply sentry
export default withSentryConfig(mdxConfig, {
  org: "peter-ts",
  project: "javascript-nextjs",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  tunnelRoute: "/monitoring",

  webpack: {
    automaticVercelMonitors: true,
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
