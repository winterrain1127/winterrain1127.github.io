/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    assetPrefix:
      process.env.NODE_ENV === "production"
        ? "https://winterrain1127.github.io/winterrain1127"
        : "",
};

export default nextConfig;
