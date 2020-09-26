import React from 'react';
import Layout from '../default/Layout/Layout';

import PostList from './Post.List';

const Posts = ({data}) => {
  const posts = data.allBlogPost.nodes;
  console.log(posts);
  return (
    <Layout>
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export default Posts;
