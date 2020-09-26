import React from 'react';

import PostList from './Post.List';

const Posts = ({data}) => {
  const posts = data.allBlogPost.nodes;
  console.log(posts);
  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
};

export default Posts;
