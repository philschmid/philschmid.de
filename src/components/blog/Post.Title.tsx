import React from 'react';

const PostTitle = (props) => (
  <h1 className="text-4xl" {...props}>
    {props.children}
  </h1>
);

export default PostTitle;
