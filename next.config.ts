import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // In local dev, proxy /api/* to FastAPI running on port 8000.
        // On Vercel, the api/ directory serverless functions take precedence over this rewrite.
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
