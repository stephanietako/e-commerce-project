/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },

      // {
      //   protocol: "https",
      //   hostname: "assets.example.com",
      //   port: "",
      //   pathname: "/Volumes/T7/ECOMMERCE-PROJECT/public/assets/vibes.png",
      // },
    ],
  },
};

module.exports = nextConfig;
