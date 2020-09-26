import React from 'react';

import NotebookLink from './Notebook.Link';

const NotebookList = ({Notebooks}) => (
  <>
    {Notebooks.map((node) => (
      <NotebookLink key={node.slug} {...node} />
    ))}
  </>
);

export default NotebookList;
