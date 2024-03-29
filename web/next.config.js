/** @type {import("next").NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/sendgrid",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://sendgrid.com" },
          { key: "Access-Control-Allow-Methods", value: "POST, GET, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "X-Requested-With" },
        ],
      },
    ];
  },
  i18n: {
    locales: ["en", "cy"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      {
        domain: "artsed.wales",
        defaultLocale: "en",
      },
      {
        domain: "celfadd.cymru",
        defaultLocale: "cy",
      },
    ],
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
