import React from 'react';
import AuthorHero from '../author/Author.Hero';
import PostLink from '../blog/Post.Link';
import Layout from '../default/Layout/Layout';
import SEO from '../default/SEO/SEO';
import PostHighlight from './Post.Highlight';

const Posts = ({data}) => {
  const highlighPost = data.allBlogPost.nodes[0];
  const postList = data.allBlogPost.nodes.slice(1);
  console.log(postList);
  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Blog overview'} />
      <div className="hidden md:flex justify-between space-x-24">
        <AuthorHero />
        <PostHighlight post={highlighPost} />
      </div>
      <main className="grid sm:grid-cols-2 xl:grid-cols-3 gap-16">
        <div className="md:hidden">
          <PostLink {...highlighPost} />
        </div>
        {postList.map((node) => (
          <PostLink key={node.slug} {...node} />
        ))}
      </main>
    </Layout>
  );
};

export default Posts;
