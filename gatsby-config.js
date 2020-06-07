if (process.env.ENVIROMENT !== "production") {
  require("dotenv").config();
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
};

const PRIMARY_SITE_URL = `https://awafikitchen.com`;

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful TypeScript starter",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: PRIMARY_SITE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159331737-1",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "awafi-kitchen-website",
        short_name: "awafi-kitchen-website",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/awafi-favicon.png",
      },
    },
    `gatsby-plugin-typescript`,
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `400i`, `600`, `700`],
          },
        ],
      },
    },
  ],
};
