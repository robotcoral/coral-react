/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
          },
        },
      ],
    });

    return config;
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
  },
};

module.exports = nextConfig;
