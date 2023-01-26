/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-jss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jaycie Rethorical`,
        short_name: `Jaycie Rethorical`,
        start_url: `/`,
        icon: `src/hand.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1TD6B1LDF4", // Google Analytics / GA
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Jaycie Rethorical",
    author: "Maximo Campo",
  },
  
};
