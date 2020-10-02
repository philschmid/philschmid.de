import React from 'react';
import AuthorHero from '../components/author/Author.Hero';
import PostLink from '../components/blog/Post.Link';
import Pagination from '../components/default/Pagination/Pagination';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';
import PostHighlight from '../components/blog/Post.Highlight';

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
  // console.log(props);
  const {group, index, first, last, pageCount} = props.pageContext;
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const sitePath = '';
  return (
    <Layout>
      <SEO pathname={sitePath} title={''} description={'Blog overview'} />
      {first && (
        <div className="hidden md:flex justify-between space-x-24">
          <AuthorHero />
          <PostHighlight post={group[0]} />
        </div>
      )}

      <main className="grid sm:grid-cols-2 xl:grid-cols-3 gap-16">
        {group.map((node) => (
          <PostLink key={node.slug} {...node} />
        ))}
      </main>
      <Pagination {...{nextUrl, previousUrl, index, first, last, pageCount, sitePath}} />
    </Layout>
  );
};

export default Posts;
