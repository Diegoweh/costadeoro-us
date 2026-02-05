import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
eslint: {
  ignoreDuringBuilds: true,
},
output: 'export',           // Export estático (Next 13+)
basePath: '/welcome',       // Sirve todo bajo /welcome
assetPrefix: '/welcome',    // Asegura que _next y assets cuelguen de /welcome
trailingSlash: true,        // Genera /welcome/index.html
images: { unoptimized: true } // Si usas next/image, necesario para export estático
};

export default nextConfig;
