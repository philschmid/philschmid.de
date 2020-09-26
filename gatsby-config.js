const options = require(`./utils/options`);

module.exports = {
  siteMetadata: {
    title: `Blog Title Placeholder`,
    author: `Name Placeholder`,
    description: `Description placeholder`,
    siteUrl: `https://example.com`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: options.imageMaxWidth,
              linkImagesToOriginal: false,
            },
          },
          {resolve: `gatsby-remark-copy-linked-files`},
          {resolve: `gatsby-remark-smartypants`},
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.contentPath,
        name: options.contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.assetPath,
        name: options.assetPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.notebookPath,
        name: options.notebookPath,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ].filter(Boolean),
};
