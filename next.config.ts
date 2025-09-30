// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {

//   eslint: {
//     ignoreDuringBuilds: true,
//   },


// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: {
  //   domains: ['yourdomain.com'], 
  // },

  reactStrictMode: true,

};

export default nextConfig;
