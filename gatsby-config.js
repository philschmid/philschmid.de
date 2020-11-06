const options = require(`./gatsby-meta-config`);

function slugify(string) {
  const slug = string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  return `/${slug}`.replace(/\/\/+/g, '/');
}

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
    `gatsby-transformer-yaml`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.authorPath,
        name: options.authorPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.projectsPath,
        name: options.projectsPath,
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://philschmid.us19.list-manage.com/subscribe/post?u=9dbbfdd84e34132c1147d9db9&amp;id=a10a54e23e',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.philschmid.de`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        setup: ({
          query: {
            site: {siteMetadata},
          },
          ...rest
        }) => {
          siteMetadata.feed_url = siteMetadata.siteUrl + '/rss.xml';
          siteMetadata.image_url = siteMetadata.siteUrl + '/icons/icon-512x512.png';
          const siteMetadataModified = siteMetadata;
          siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

          return {
            ...siteMetadataModified,
            ...rest,
          };
        },
        feeds: [
          {
            serialize: ({query: {site, allBlogPost}}) => {
              return allBlogPost.nodes.map((node) => {
                return {
                  ...node,
                  description: node.excerpt,
                  date: node.date,
                  url: site.siteMetadata.siteUrl + slugify(node.slug),
                  guid: site.siteMetadata.siteUrl + slugify(node.slug),
                  // custom_elements: [{ "content:encoded": edge.node.body }],
                  author: 'Philipp Schmid',
                  custom_elements: [
                    {tags: node.tags.join(', ')},
                    {readingTime: node.readingTime},
                    {dateForSEO: node.dateForSEO},
                    {image: site.siteMetadata.siteUrl + node.image.childImageSharp.fluid.src},
                  ],
                };
              });
            },
            query: `
            {
              allBlogPost(sort: {fields: [date, title], order: DESC}, limit: 1000) {
                nodes {
                  id
                  excerpt
                  slug
                  title
                  tags
                  readingTime
                  photograph
                  links {
                    colab
                    github
                  }
                  date(formatString: "MMMM DD, YYYY")
                  dateForSEO: date
                  image {
                    childImageSharp {
                      fluid(maxWidth: 900) {
                        src
                        srcWebp
                      }
                    }
                  }
                  imageAlt
                }
              }
            }            
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
  ].filter(Boolean),
};
