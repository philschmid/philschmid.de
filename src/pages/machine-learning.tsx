import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import PostLink from '../components/blog/Post.Link';

const seoQuery = graphql`
  {
    allBlogPost(
      sort: {fields: [date, title], order: DESC}
      limit: 1000
      filter: {tags: {in: ["NLP", "ML", "Machine Learning", "AI", "Bert"]}}
    ) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        dateForSEO: date
        tags
        readingTime
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`;

const MachineLearning = () => {
  const results = useStaticQuery(seoQuery);
  const tags = [...new Set(results.allBlogPost.nodes.map((article) => article.tags).flat())];
  const posts = results.allBlogPost.nodes;
  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Blog overview'} />

      <div className="mt-8 mb-32 ">
        <h1 className="text-6xl font-serif "> Machine Learning Articles</h1>
        {tags.map((tag) => (
          <span className="text-primary text-2xl">#{tag} </span>
        ))}
      </div>
      <main className="grid sm:grid-cols-3  gap-16">
        {posts.map((node) => (
          <PostLink key={node.slug} {...node} />
        ))}
      </main>
    </Layout>
  );
};

export default MachineLearning;
