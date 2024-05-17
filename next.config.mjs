/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// import withNextIntl from "next-intl/plugin";

// await import("./src/env.js");

// const nextIntlConfig = withNextIntl();

// /** @type {import("next").NextConfig} */
// const config = {
 
//   images: {
//     remotePatterns: [ {
//       protocol: "https",
//       hostname: "source.unsplash.com",
//       pathname: "**",
//     },],
//   },
// };

// export default nextIntlConfig(config);

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);