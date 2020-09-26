import React from 'react';
import AuthorHero from '../author/Author.Hero';
import PostLink from '../blog/Post.Link';
import Layout from '../default/Layout/Layout';
import SEO from '../default/SEO/SEO';
import PostHighlight from './Post.Highlight';

import PostList from './Post.List';

const Posts = ({data}) => {
  const highlighPost = data.allBlogPost.nodes[0];
  const postList = data.allBlogPost.nodes.slice(1);
  console.log(postList);
  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Blog overview'} />
      <div className="hidden md:grid grid-cols-2">
        <AuthorHero />
        <PostHighlight post={highlighPost} />
      </div>
      <main>
        <div className="md:hidden">
          <PostLink {...highlighPost} />
        </div>
        <PostList posts={postList} />
      </main>
    </Layout>
  );
};

export default Posts;
