require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Mamma Teresa Restaurang & Pizzeria`,
    description: `Mamma Teresa är en italiensk oas i centrala Landskrona. Kvalitet är av största vikt för oss och vi vill leverera en äkta italiensk smakupplevelse.`,
    author: `@niklaswallentin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appWcj3R3jMgsncJU`,
            tableName: `Öppettider`,
            tableView: `Överblick`,
          },
          {
            baseId: `appWcj3R3jMgsncJU`,
            tableName: `Meny`,
            tableView: `Överblick`,
          },
          {
            baseId: `appWcj3R3jMgsncJU`,
            tableName: `Drinkmeny`,
            tableView: `Överblick`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `pizzeriamammateresa`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`300`, `900`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mamma Teresa`,
        short_name: `Mamma Teresa`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cropped-italy-180x180.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
