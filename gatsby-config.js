module.exports = {
  siteMetadata: {
    siteUrl: "https://jatan.dev",
    title: "Jatan Patel",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-generator",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printSummary: true
      }
    },
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noScript: true,
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: true,
        removeGatsbyAnnouncer: true,
      }
    },
  ],
};
