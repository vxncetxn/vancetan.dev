module.exports = {
  siteMetadata: {
    title: "Vance Tan - Creative Software Engineer",
    description: `Creative Software Engineer Based in Singapore`,
    image: "./src/assets/meta/meta-image.png",
    imageTwitter: "./src/assets/meta/meta-image-twitter.png",
    sitename: "vancetan.dev",
    url: "https://www.vancetan.dev",
    twitterID: "@vxncetxn"
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              wrapperStyle: "background-color: var(--color-layer-top);",
              withWebp: true,
              tracedSVG: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`oswald\:400,600`, `roboto mono\:400,500,600`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graphics-head`,
        path: `src/assets/graphics/head`
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
