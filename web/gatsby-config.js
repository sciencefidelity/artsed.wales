require("dotenv").config()

const clientConfig = require("./client-config")

module.exports = {
  siteMetadata: {
    title: "National Arts and Education Network",
    titleTemplate: "National Arts and Education Network",
    description:
      "We bring together schools, artists and cultural organisations to succeed in the Expressive Arts.",
    url: "https://nat.artsed.wales",
    image: "/static/images/aen_network.jpg",
    twitterUsername: "@artsed_wales",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        short_name: "naen",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/icons/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-intl",
      options: {
        path: `${__dirname}/src/intl`,
        languages: ["en", "cy"],
        defaultLanguage: "en",
        redirect: true,
        redirectComponent: require.resolve("./src/components/redirect.tsx"),
      },
    },
  ],
}
