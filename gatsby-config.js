const options = require(`./gatsby-meta-config`);

module.exports = {
  siteMetadata: options.customSiteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom`, // Important!
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: options.imageMaxWidth,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
          {resolve: `gatsby-remark-copy-linked-files`},
          {resolve: `gatsby-remark-smartypants`},
          {resolve: `gatsby-remark-numbered-footnotes`},
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
        remarkPlugins: [require(`remark-slug`), require('remark-html-katex')],
        // remarkPlugins: [require(`remark-slug`)],
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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.philschmid.de',
        sitemap: 'https://www.philschmid.de/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `philschmid blog by Philipp Schmid`,
        short_name: `philschmid`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ].filter(Boolean),
};
