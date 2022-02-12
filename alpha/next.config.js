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
        ]
      }
    ]
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "cy"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en"
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  swcMinify: true
}
