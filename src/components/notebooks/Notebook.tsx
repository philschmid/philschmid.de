import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../default/Layout/Layout';
import NotebookTitle from './Notebook.Title';
import NotebookDate from './Notebook.Date';
import NotebookSEO from '../default/SEO/SEO.Notebook';

const Notebook = ({data}) => {
  const notebook = data.notebook;
  console.log(notebook);
  return (
    <Layout>
      <NotebookSEO article={notebook} />
      <article className="Notebook ">
        <header>
          <NotebookTitle>{notebook.title}</NotebookTitle>
          <NotebookDate>{notebook.date}</NotebookDate>
        </header>
        <section className="w-Notebook m-auto">
          <MDXRenderer>{notebook.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default Notebook;
