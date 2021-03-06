import React from 'react';
import AuthorHero from '../components/author/Author.Hero';
import PostLink from '../components/blog/Post.Link';
import Pagination from '../components/default/Pagination/Pagination';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';
import PostHighlight from '../components/blog/Post.Highlight';
import {graphql, useStaticQuery} from 'gatsby';

const allTags = ['Machine Learning', 'Cloud', 'NLP', 'Serverless', 'Bert'];

const Posts = (props) => {
  const image = useStaticQuery(query);

  const {group, index, first, last, pageCount} = props.pageContext;
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const sitePath = '';
  const reducedGroups = group.slice(1);

  return (
    <Layout>
      <SEO
        pathname={sitePath}
        title={''}
        description={'Blog overview'}
        tags={allTags}
        image={image.file.childImageSharp.fluid.src}
      />
      {first && (
        <div className="flex justify-between items-center space-x-24">
          <div className="mt-8 mb-8 md:mb-32">
            <h1 className="text-6xl font-serif mb-4">
              philschmid <span className="text-gray-2">blog</span>
            </h1>
            {allTags.map((tag) => (
              <span className="text-primary text-lg md:text-2xl" key={tag}>
                #{tag}{' '}
              </span>
            ))}
          </div>
          <AuthorHero />

          {/* <PostHighlight post={group[0]} /> */}
        </div>
      )}

      <main className="grid sm:grid-cols-2 xl:grid-cols-3 gap-16">
        <PostHighlight post={group[0]} />
        {reducedGroups.map((node) => (
          <PostLink key={node.slug} {...node} />
        ))}
      </main>
      <Pagination {...{nextUrl, previousUrl, index, first, last, pageCount, sitePath}} />
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: {eq: "philippschmid-medium.png"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`;

export default Posts;
