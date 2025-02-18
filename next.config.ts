import path from "path";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles")],
    additionalData: `@import "@/styles/mixins.scss";\n`,
  },
  images: {
    domains: ["next-sh-world.vercel.app"],
  },
};

export default nextConfig;
