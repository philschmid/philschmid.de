const GatsbyFluid_withWebp = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`;

module.exports.local = {
  posts: `{
    site: allSite {
      edges {
        node {
          siteMetadata {
            title
            social {
              name
              url
            }
          }
        }
      }
    }
    allposts: allBlogPost(sort: {fields: [date, title], order: DESC}, limit: 1000) {
      nodes {
        id
        excerpt
        body
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
              ${GatsbyFluid_withWebp}
            }
          }
        }
        imageAlt
        socialImage {
          childImageSharp {
            fluid {
              ${GatsbyFluid_withWebp}
            }
          }
        }
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 400) {
              ${GatsbyFluid_withWebp}
            }
          }
        }
      }
    }
  }`,
  mlPosts: `{
    mlposts: allBlogPost(
      sort: { fields: [date, title], order: DESC},
      limit: 1000,
      filter: {tags: {in: ["NLP", "ML", "Machine Learning", "AI", "Bert","GPT2","Pytorch","HuggingFace", "Computer Vision","BERT"]}}
  ) {
    nodes {
      id
      excerpt
      body
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
            ${GatsbyFluid_withWebp}
          }
        }
      }
      imageAlt
      socialImage {
        childImageSharp {
          fluid {
            ${GatsbyFluid_withWebp}
          }
        }
      }
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 400) {
            ${GatsbyFluid_withWebp}
          }
        }
      }
    }
  }
}`,
  cloudPosts: `{
  cloudposts: allBlogPost(
    sort: { fields: [date, title], order: DESC},
    limit: 1000,
    filter: {tags: {in: ["Cloud", "AWS", "GCP", "Azure","Serverless","Docker"]}}
) {
  nodes {
    id
    excerpt
    body
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
          ${GatsbyFluid_withWebp}
        }
      }
    }
    imageAlt
    socialImage {
      childImageSharp {
        fluid {
          ${GatsbyFluid_withWebp}
        }
      }
    }
    thumbnail {
      childImageSharp {
        fluid(maxWidth: 400) {
          ${GatsbyFluid_withWebp}
        }
      }
    }
  }
}
}`,
};
