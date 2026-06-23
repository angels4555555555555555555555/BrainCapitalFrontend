/** @type {import('next').NextConfig} */
const nextConfig = {
    // Keep Turbopack development artifacts separate from production builds.
    // Sharing one .next directory can leave internal manifests in a mixed state.
    distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

export default nextConfig;
