import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import PostList from '../components/blog/Post.List';

const seoQuery = graphql`
  {
    allBlogPost(
      sort: {fields: [date, title], order: DESC}
      limit: 1000
      filter: {tags: {in: ["Cloud", "AWS", "GCP", "Azure"]}}
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

const Cloud = () => {
  const results = useStaticQuery(seoQuery);
  const posts = results.allBlogPost.nodes;
  console.log(results);
  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Blog overview'} />

      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export default Cloud;
