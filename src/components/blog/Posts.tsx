import React from 'react';
import AuthorHero from '../author/Author.Hero';
import PostLink from '../blog/Post.Link';
import Pagination from '../default/Footer/Pagination';
import Layout from '../default/Layout/Layout';
import SEO from '../default/SEO/SEO';
import PostHighlight from './Post.Highlight';

// {additionalContext: {}
// first: true
// group:
// [0: {id: "0d03fa3f-1340-5121-9dd2-31c1f5df96f4", slug: "/create-custom-github-actions-in-4-steps/"}
// 1: {id: "6cdf0369-499c-5199-9e47-482d46918ebd", slug: "/fine-tune-a-non-english-gpt-2-model-with-huggingface/"}]
// length: 2
// index: 1
// last: false
// pageCount: 4
// pathPrefix: ""}

const Posts = (props) => {
  console.log(props);
  const {group, index, first, last, pageCount} = props.pageContext;
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  const highlighPost = props.data.allBlogPost.nodes[0];
  const postList = props.data.allBlogPost.nodes.slice(1);
  console.log(postList);
  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Blog overview'} />
      {first && (
        <div className="hidden md:flex justify-between space-x-24">
          <AuthorHero />
          <PostHighlight post={highlighPost} />
        </div>
      )}

      <main className="grid sm:grid-cols-2 xl:grid-cols-3 gap-16">
        <div className="md:hidden">
          <PostLink {...highlighPost} />
        </div>
        {group.map((node) => (
          <PostLink key={node.slug} {...node} />
        ))}
      </main>
      <Pagination {...{nextUrl, previousUrl, index, first, last, pageCount}} />
    </Layout>
  );
};

export default Posts;
