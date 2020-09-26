import React from 'react';

const NotebookTitle = (props) => (
  <h1 className="text-4xl text-primary" {...props}>
    {props.children}
  </h1>
);

export default NotebookTitle;
