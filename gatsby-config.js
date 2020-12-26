module.exports = {
  siteMetadata: {
    title: "Vance Tan –– Creative Software Engineer",
    description: `Creative Software Engineer Based in Singapore`,
    image: "./src/assets/meta/meta-image.png",
    imageTwitter: "./src/assets/meta/meta-image-twitter.png",
    sitename: "vancetan.dev",
    siteUrl: "https://vancetan.dev",
    twitterID: "@vxncetxn"
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }

            allMdx {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
        }`,
        serialize: ({ site, allMdx }) =>
          ["projects", "contact"]
            .concat(allMdx.edges.map(edge => edge.node.frontmatter.path))
            .map(path => {
              return {
                url: `${site.siteMetadata.siteUrl}/${path}/`,
                changefreq: `daily`,
                priority: 0.7
              };
            })
      }
    },
    `gatsby-plugin-robots-txt`,
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
