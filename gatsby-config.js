module.exports = {
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`oswald\:400,600`, `roboto mono\:400,500`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `src/content/projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writings`,
        path: `src/content/writings`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-images`,
        path: `src/assets/project-images`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    "gatsby-plugin-webpack-bundle-analyser-v2"
  ]
};
