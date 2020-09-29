const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const debug = require(`debug`);
const readingTime = require('reading-time');

const {createFilePath, createRemoteFileNode} = require(`gatsby-source-filesystem`);
const {urlResolve, createContentDigest, slash} = require(`gatsby-core-utils`);

const options = require(`./gatsby-meta-config`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({store}, themeOptions) => {
  const {program} = store.getState();

  const dirs = [
    path.join(program.directory, options.contentPath),
    path.join(program.directory, options.notebookPath),
    path.join(program.directory, options.assetPath),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough = (fieldName) => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

exports.createSchemaCustomization = ({actions, schema}, themeOptions) => {
  const {createTypes} = actions;
  createTypes(`
  type Link {
    colab: String
    github: String
  }
  
  interface BlogPost @nodeInterface {
      id: ID!
      title: String!
      body: String!
      slug: String!
      date: Date! @dateformat
      dateForSEO: Date!
      tags: [String]!
      links: Link
      excerpt: String!
      photograph: String!
      readingTime: String
      image: File
      imageAlt: String
      socialImage: File
  }

  `);

  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPost`,
      fields: {
        id: {type: `ID!`},
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        date: {type: `Date!`, extensions: {dateformat: {}}},
        tags: {type: `[String]!`},
        dateForSEO: {type: `Date!`},
        links: {type: `Link`},
        photograph: {type: `String!`},
        readingTime: {
          type: `String`,
          resolve: async (source, args, context, info) => {
            const mdxNode = context.nodeModel.getNodeById({
              id: source.parent,
            });
            const time = readingTime(mdxNode.internal.content);
            return time.text;
          },
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: options.excerptLength,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        image: {
          type: `File`,
          resolve: async (source, args, context, info) => {
            if (source.image___NODE) {
              return context.nodeModel.getNodeById({id: source.image___NODE});
            } else if (source.image) {
              return processRelativeImage(source, context, `image`);
            }
          },
        },
        imageAlt: {
          type: `String`,
        },
        socialImage: {
          type: `File`,
          resolve: async (source, args, context, info) => {
            if (source.socialImage___NODE) {
              return context.nodeModel.getNodeById({
                id: source.socialImage___NODE,
              });
            } else if (source.socialImage) {
              return processRelativeImage(source, context, `socialImage`);
            }
          },
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `BlogPost`],
      extensions: {
        infer: false,
      },
    }),
  );

  createTypes(`
  type Link {
    colab: String
    github: String
  }
  
  interface Notebook @nodeInterface {
      id: ID!
      title: String!
      body: String!
      slug: String!
      excerpt: String!
      date: Date! @dateformat
      dateForSEO: Date!
      tags: [String]!
      links: Link
  }

  `);

  createTypes(
    schema.buildObjectType({
      name: `MdxNotebook`,
      fields: {
        id: {type: `ID!`},
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        date: {type: `Date!`, extensions: {dateformat: {}}},
        dateForSEO: {type: `Date!`},
        tags: {type: `[String]!`},
        links: {type: `Link`},
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: options.excerptLength,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `Notebook`],
      extensions: {
        infer: false,
      },
    }),
  );
};

function processRelativeImage(source, context, type) {
  // Image is a relative path - find a corresponding file
  const mdxFileNode = context.nodeModel.findRootNodeAncestor(
    source,
    (node) => node.internal && node.internal.type === `File`,
  );
  if (!mdxFileNode) {
    return;
  }
  const imagePath = slash(path.join(mdxFileNode.dir, source[type]));

  const fileNodes = context.nodeModel.getAllNodes({type: `File`});
  for (const file of fileNodes) {
    if (file.absolutePath === imagePath) {
      return file;
    }
  }
}

function validURL(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async ({node, actions, getNode, createNodeId, store, cache}, themeOptions) => {
  const {createNode, createParentChildLink} = actions;

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === `Mdx` && source === options.contentPath) {
    let slug;
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug;
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(options.basePath, node.frontmatter.slug);
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: options.contentPath,
      });

      slug = urlResolve(options.basePath, filePath);
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, `/`);

    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      links: node.frontmatter.links || {},
      photograph: node.frontmatter.photograph || '',
      readingTime: node.frontmatter.readingTime,
      slug,
      date: node.frontmatter.date,
      dateForSEO: node.frontmatter.dateForSEO,
      image: node.frontmatter.image,
      socialImage: node.frontmatter.socialImage,
    };

    if (validURL(node.frontmatter.image)) {
      // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.image,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      });
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) {
        fieldData.image___NODE = remoteFileNode.id;
      }
    }

    if (validURL(node.frontmatter.socialImage)) {
      // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.socialImage,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      });
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) {
        fieldData.socialImage___NODE = remoteFileNode.id;
      }
    }

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPost`);
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxBlogPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the BlogPost interface`,
      },
    });
    createParentChildLink({parent: node, child: getNode(mdxBlogPostId)});
  }

  if (node.internal.type === `Mdx` && source === options.notebookPath) {
    let slug;
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug;
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(options.baseNotebooksPath, node.frontmatter.slug);
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: options.notebookPath,
      });

      slug = urlResolve(options.baseNotebooksPath, filePath);
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, `/`);

    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      links: node.frontmatter.links || {},
      dateForSEO: node.frontmatter.dateForSEO,
      slug,
      date: node.frontmatter.date,
    };

    const mdxNotebookId = createNodeId(`${node.id} >>> MdxNotebook`);
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxNotebookId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxNotebook`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Notebook interface`,
      },
    });
    createParentChildLink({parent: node, child: getNode(mdxNotebookId)});
  }
};

// These queries are simply data-fetching wrappers that import components
const PostTemplate = require.resolve(`./src/queries/blog/post-query.js`);
const PostsTemplate = require.resolve(`./src/queries/blog/posts-query.js`);
// These queries are simply data-fetching wrappers that import components
const NotebookTemplate = require.resolve(`./src/queries/notebooks/notebook-query.js`);
const NotebooksTemplate = require.resolve(`./src/queries/notebooks/notebooks-query.js`);

exports.createPages = async ({graphql, actions, reporter}, themeOptions) => {
  const {createPage} = actions;

  const resultBlog = await graphql(`
    {
      allBlogPost(sort: {fields: [date, title], order: DESC}, limit: 1000) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (resultBlog.errors) {
    reporter.panic(resultBlog.errors);
  }

  // Create Posts and Post pages.
  const {allBlogPost} = resultBlog.data;
  const posts = allBlogPost.nodes;

  // Create a page for each Post
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    const {slug} = post;
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        id: post.id,
        previousId: previous ? previous.id : undefined,
        nextId: next ? next.id : undefined,
        maxWidth: options.imageMaxWidth,
      },
    });
  });

  // // Create the Posts page
  createPage({
    path: options.basePath,
    component: PostsTemplate,
    context: {},
  });

  const resultNotebook = await graphql(`
    {
      allNotebook(sort: {fields: [date, title], order: DESC}, limit: 1000) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (resultNotebook.errors) {
    reporter.panic(resultNotebook.errors);
  }
  // Create Posts and Post pages.
  const {allNotebook} = resultNotebook.data;
  const notebooks = allNotebook.nodes;

  // Create a page for each Post
  notebooks.forEach((notebook, index) => {
    const previous = index === notebooks.length - 1 ? null : notebooks[index + 1];
    const next = index === 0 ? null : notebooks[index - 1];
    const {slug} = notebook;
    createPage({
      path: slug,
      component: NotebookTemplate,
      context: {
        id: notebook.id,
        previousId: previous ? previous.id : undefined,
        nextId: next ? next.id : undefined,
      },
    });
  });

  // // Create the Posts page
  createPage({
    path: options.baseNotebooksPath,
    component: NotebooksTemplate,
    context: {},
  });
};

// const path = require('path');

// module.onCreateWebpackConfig = ({actions}) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         '@components': path.resolve(__dirname, './src/components/'),
//         '@icons': path.resolve(__dirname, './src/assets/icons/'),
//         // '@styles': path.resolve(__dirname, '../../styles/'),
//         // '@utils': path.resolve(__dirname, '../../utils/'),
//         // '@types': path.resolve(__dirname, '../../types/'),
//       },
//       extensions: ['.js', '.json', '.ts', '.tsx'],
//     },
//   });
// };
