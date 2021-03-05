module.exports = {
  siteMetadata: {
    title: "National Arts and Education Network",
    titleTemplate: "National Arts and Education Network",
    description:
      "We bring together schools, artists and cultural organisations to succeed in the Expressive Arts.",
    url: "https://naen.artsed.wales", // No trailing slash allowed!
    image: "/images/aen_network.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@artsed_wales",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `./src/markdown`,
      },
    },
  ],
};
