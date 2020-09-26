import React from 'react';

import PostLink from './Post.Link';

const PostList = ({posts}) => (
  <>
    {posts.map((node) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
);

export default PostList;
