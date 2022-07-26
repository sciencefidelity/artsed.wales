/** @type {import("next").NextConfig} */
module.exports = {
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
    ]
  },
  i18n: {
    locales: ["en", "cy"],
    defaultLocale: "en",
    domains: [
      {
        domain: "artsed.wales",
        defaultLocale: "en",
        http: true,
      },
      {
        domain: "celfadd.cymru",
        defaultLocale: "cy",
        http: true,
      },
    ],
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  swcMinify: true,
}
