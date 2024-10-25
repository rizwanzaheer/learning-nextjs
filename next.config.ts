import type { NextConfig } from "next";
const { version, dependencies } = require("./package.json");

// module.exports = {
//   publicRuntimeConfig: {
//     version,
//     dependencies,
//   },
//   // experimental: {
//   //   serverAction: true,
//   // },
// };


const nextConfig: NextConfig = {
  /* config options here */
    publicRuntimeConfig: {
      version,
      dependencies,
    },
};

export default nextConfig;