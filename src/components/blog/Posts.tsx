import React from 'react';
import Layout from '../default/Layout/Layout';
import SEO from '../default/SEO/SEO';

import PostList from './Post.List';

const Posts = ({data}) => {
  const posts = data.allBlogPost.nodes;
  console.log(posts);
  return (
    <Layout>
      <SEO pathname={'/'} title={''} description={'Blog overview'} />

      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export default Posts;
